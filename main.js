const topicMap = {};
const newsletterTags = {};
let activeNewsletterId;
let activePersona = "all";
let isNavigating = false;
let navigatingTimer = null;
let urlUpdateTimer = null;

// Last focused element before opening a modal — restored on close
let modalReturnFocus = null;

function setNavigating() {
  isNavigating = true;
  clearTimeout(navigatingTimer);
  navigatingTimer = setTimeout(() => {
    isNavigating = false;
  }, 700);
}

// ── URL routing ──────────────────────────────────────────────────────────────

function nlSlug(id) {
  const nl = newsletters.find((n) => n.id === id);
  return nl ? `edition-${String(nl.edition).padStart(2, "0")}` : id;
}

function nlIdFromSlug(slug) {
  if (slug.startsWith("edition-")) {
    const num = parseInt(slug.slice(8), 10);
    const nl = newsletters.find((n) => n.edition === num);
    return nl ? nl.id : null;
  }
  // legacy issue-NN format — still resolve so old bookmarks don't break
  if (slug.startsWith("issue-")) {
    const num = parseInt(slug.slice(6), 10);
    const nl = newsletters.find((n) => n.edition === num);
    return nl ? nl.id : null;
  }
  // legacy nl-001 format — still resolve so old bookmarks don't break
  return newsletters.find((n) => n.id === slug) ? slug : null;
}

function parseHash() {
  const raw = location.hash.slice(1);
  if (!raw) return { newsletterId: null, topicId: null };
  const slash = raw.indexOf("/");
  const slug = slash === -1 ? raw : raw.slice(0, slash);
  const topicId = slash === -1 ? null : raw.slice(slash + 1);
  return { newsletterId: nlIdFromSlug(slug), topicId };
}

function pushHash(newsletterId, topicId) {
  const slug = nlSlug(newsletterId);
  const hash = topicId ? `#${slug}/${topicId}` : `#${slug}`;
  history.pushState(null, "", hash);
}

function replaceHash(newsletterId, topicId) {
  const slug = nlSlug(newsletterId);
  const hash = topicId ? `#${slug}/${topicId}` : `#${slug}`;
  history.replaceState(null, "", hash);
}

function onNavigate() {
  const { newsletterId } = parseHash();
  if (!newsletterId || newsletterId === activeNewsletterId) return;
  selectNewsletter(newsletterId, false);
}

// ── Bootstrap ────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  topics.forEach((t) => (topicMap[t.id] = t));
  newsletters.forEach((nl) => {
    const tagSet = new Set();
    nl.topicIds.forEach((tid) => {
      const topic = topicMap[tid];
      if (topic) topic.tags.forEach((tag) => tagSet.add(tag));
    });
    newsletterTags[nl.id] = tagSet;
  });

  const { newsletterId, topicId } = parseHash();
  const validId =
    newsletterId && newsletters.find((n) => n.id === newsletterId)
      ? newsletterId
      : null;
  activeNewsletterId = validId || newsletters[0].id;
  const initialNl = newsletters.find((n) => n.id === activeNewsletterId);
  if (initialNl) document.title = `${initialNl.title} — Suger Cube`;

  document.getElementById("app").innerHTML = renderLayout();
  initScrollListener();
  initDarkMode();
  initOnboarding();

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".export-wrap")) closeExportMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const onb = document.getElementById("onboarding");
      const ed = document.getElementById("editions-panel");
      if (onb && !onb.classList.contains("onb-hidden")) {
        onbSkip();
        return;
      }
      if (ed && !ed.hasAttribute("hidden")) {
        closeEditionsPanel();
        return;
      }
      closeExportMenu();
      closeGlossary();
    }
  });

  if (!location.hash) replaceHash(activeNewsletterId, null);

  window.addEventListener("popstate", onNavigate);
  window.addEventListener("hashchange", onNavigate);
});

// ── Newsletter selection ─────────────────────────────────────────────────────

function selectNewsletter(id, updateHash = true) {
  if (id === activeNewsletterId) return;
  activeNewsletterId = id;

  if (updateHash) pushHash(id, null);
  closeGlossary();

  const nl = newsletters.find((n) => n.id === id);
  document.title = `${nl.title} — Suger Cube`;

  // Update edition trigger label in masthead
  const editionLabel = `Edition ${String(nl.edition).padStart(2, "0")}`;
  const triggerLabel = document.getElementById("editions-trigger-label");
  if (triggerLabel) triggerLabel.textContent = editionLabel;

  // Update editions panel active state
  document.querySelectorAll(".edition-card").forEach((card) => {
    card.classList.toggle("edition-card--active", card.dataset.id === id);
  });

  const main = document.getElementById("main-content");
  main.innerHTML = renderNewsletterContent(nl);
  main.scrollTo({ top: 0, behavior: "smooth" });
  applyPersonaToFeed();
}

function selectEditionFromPanel(id) {
  closeEditionsPanel();
  if (id !== activeNewsletterId) selectNewsletter(id);
}

// ── Scroll + URL sync ────────────────────────────────────────────────────────

function initScrollListener() {
  const main = document.getElementById("main-content");
  if (!main) return;
  main.addEventListener("scroll", () => {
    const btn = document.getElementById("back-to-top");
    if (btn) btn.classList.toggle("visible", main.scrollTop > 300);
    if (isNavigating) return;
    clearTimeout(urlUpdateTimer);
    urlUpdateTimer = setTimeout(() => {
      const mainTop = main.getBoundingClientRect().top;
      let activeTopicId = null;
      main.querySelectorAll("article.topic[id]").forEach((article) => {
        if (article.getBoundingClientRect().top - mainTop <= 80)
          activeTopicId = article.id;
      });
      replaceHash(activeNewsletterId, activeTopicId);
    }, 120);
  });
}

function scrollMainToTop() {
  document
    .getElementById("main-content")
    ?.scrollTo({ top: 0, behavior: "smooth" });
}

// ── Glossary panel ───────────────────────────────────────────────────────────

function toggleGlossary() {
  const panel = document.getElementById("glossary-panel");
  const btn = document.getElementById("glossary-btn");
  const iframe = document.getElementById("glossary-iframe");
  if (!panel || !btn) return;
  const isOpen = panel.classList.toggle("open");
  btn.classList.toggle("active", isOpen);
  btn.setAttribute("aria-expanded", String(isOpen));
  if (isOpen && iframe && !iframe.src && iframe.dataset.src) {
    iframe.src = iframe.dataset.src;
  }
}

function closeGlossary() {
  document.getElementById("glossary-panel")?.classList.remove("open");
  const btn = document.getElementById("glossary-btn");
  btn?.classList.remove("active");
  btn?.setAttribute("aria-expanded", "false");
}

// ── Editions panel (replaces sidebar) ────────────────────────────────────────

function toggleEditionsPanel() {
  const panel = document.getElementById("editions-panel");
  if (!panel) return;
  if (panel.hasAttribute("hidden")) openEditionsPanel();
  else closeEditionsPanel();
}

function openEditionsPanel() {
  const panel = document.getElementById("editions-panel");
  const trigger = document.getElementById("editions-trigger");
  if (!panel) return;
  modalReturnFocus = document.activeElement;
  panel.removeAttribute("hidden");
  panel.classList.add("open");
  trigger?.setAttribute("aria-expanded", "true");
  // Focus the active edition card so keyboard users land somewhere useful
  const active =
    panel.querySelector(".edition-card--active") ||
    panel.querySelector(".edition-card");
  active?.focus();
}

function closeEditionsPanel() {
  const panel = document.getElementById("editions-panel");
  const trigger = document.getElementById("editions-trigger");
  if (!panel) return;
  panel.classList.remove("open");
  panel.setAttribute("hidden", "");
  trigger?.setAttribute("aria-expanded", "false");
  if (modalReturnFocus && typeof modalReturnFocus.focus === "function") {
    modalReturnFocus.focus();
    modalReturnFocus = null;
  }
}

// ── Export menu ──────────────────────────────────────────────────────────────

function toggleExportMenu() {
  const menu = document.getElementById("export-menu");
  const trigger = document.getElementById("export-trigger");
  if (!menu) return;
  const isOpen = menu.classList.toggle("open");
  trigger?.setAttribute("aria-expanded", String(isOpen));
}

function closeExportMenu() {
  document.getElementById("export-menu")?.classList.remove("open");
  document
    .getElementById("export-trigger")
    ?.setAttribute("aria-expanded", "false");
}

function triggerPrint() {
  closeExportMenu();
  window.print();
}

// ── Export (HTML) — DRY refactor lands in Phase 5 ────────────────────────────

function exportRenderHSSection(hs, isLast) {
  const m = tagMeta[hs.tagId] || {};
  const sourceHtml = hs.source
    ? `<a href="${hs.source.url}" style="display:inline-block;margin-top:10px;font-size:11px;color:#767676;text-decoration:none;" target="_blank" rel="noopener noreferrer">↗ ${hs.source.label}</a>`
    : "";
  return `
    <div style="padding:22px 0;${isLast ? "" : "border-bottom:1px solid #f5f5f5;"}">
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:10px;">
        <span style="display:inline-block;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;border-radius:4px;padding:3px 8px;background:${m.badgeBg};color:${m.badgeText};">${m.label || hs.tagId}</span>
        <h3 style="font-family:'Lexend',sans-serif;font-size:15px;font-weight:700;color:#000;line-height:1.3;letter-spacing:-0.01em;margin:0;">${hs.headline}</h3>
      </div>
      <p style="font-size:14px;line-height:1.8;color:#666;margin:0;">${hs.body}</p>
      ${sourceHtml}
    </div>`;
}

function exportRenderTopic(topic, number, nlDate) {
  const num = String(number).padStart(2, "0");
  const isEducational = topic.contentType === "educational";
  const badgeStyle = isEducational
    ? "font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;border-radius:4px;padding:2px 7px;background:#f3f4f6;color:#767676;margin-left:auto;white-space:nowrap;"
    : "font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;border-radius:4px;padding:2px 7px;background:rgba(242,106,28,0.1);color:#ae530f;margin-left:auto;white-space:nowrap;";
  const badgeLabel = isEducational
    ? "Deep dive"
    : `What's new${nlDate ? ` · ${nlDate}` : ""}`;
  const tagsHtml = topic.tags
    .map((tagId) => {
      const m = tagMeta[tagId] || {};
      return `<span style="font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;border-radius:4px;padding:2px 7px;background:${m.badgeBg};color:${m.badgeText};">${m.label || tagId}</span>`;
    })
    .join(" ");
  const hsSections = topic.hyperscalers
    .map((hs, i) =>
      exportRenderHSSection(hs, i === topic.hyperscalers.length - 1),
    )
    .join("");
  return `
    <div style="background:#fff;border-radius:12px;padding:36px 40px;margin-bottom:16px;border:1px solid #ebebeb;font-family:'Inter',-apple-system,sans-serif;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
        <span style="font-size:11px;font-weight:700;color:#767676;letter-spacing:0.06em;">${num}</span>
        <div style="display:flex;gap:5px;">${tagsHtml}</div>
        <span style="${badgeStyle}">${badgeLabel}</span>
      </div>
      <h2 style="font-family:'Lexend',sans-serif;font-size:22px;font-weight:800;line-height:1.2;color:#000;letter-spacing:-0.02em;margin:0 0 5px;">${topic.title}</h2>
      <p style="font-size:13px;color:#767676;font-style:italic;margin:0 0 20px;">${topic.subtitle}</p>
      <p style="font-size:14px;color:#666;line-height:1.8;padding-bottom:24px;border-bottom:1px solid #ebebeb;margin:0 0 4px;">${topic.intro}</p>
      <div style="margin-bottom:24px;">${hsSections}</div>
      <div style="background:rgba(242,106,28,0.08);border:1px solid rgba(242,106,28,0.2);border-left:3px solid #f26a1c;border-radius:0 8px 8px 0;padding:18px 22px;">
        <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#ae530f;margin-bottom:8px;">What this means for you</div>
        <p style="font-size:14px;line-height:1.8;color:#333;margin:0;">${topic.implications}</p>
      </div>
    </div>`;
}

function exportAsHTML() {
  closeExportMenu();
  const nl = newsletters.find((n) => n.id === activeNewsletterId);
  if (!nl) return;
  const nlTopics = nl.topicIds.map((id) => topicMap[id]).filter(Boolean);
  const newsTopics = nlTopics.filter(
    (t) => (t.contentType || "news") === "news",
  );
  const eduTopics = nlTopics.filter((t) => t.contentType === "educational");
  const mixed = newsTopics.length > 0 && eduTopics.length > 0;

  let topicsBodyHtml = "";
  if (mixed) {
    let num = 1;
    const newsSectionHeader = `<div style="display:flex;align-items:center;gap:12px;padding:0 0 14px;margin-bottom:20px;border-bottom:2px solid rgba(242,106,28,0.35);"><span style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.14em;color:#ae530f;">What's new</span><span style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#767676;margin-left:auto;">${nl.date}</span></div>`;
    const eduSectionHeader = `<div style="display:flex;align-items:center;gap:12px;padding:0 0 14px;margin-bottom:20px;border-bottom:2px solid #DBEAFE;"><span style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.14em;color:#1D4ED8;">Deep dive</span></div>`;
    topicsBodyHtml = `
      <div style="margin-bottom:8px;">${newsSectionHeader}${newsTopics.map((t) => exportRenderTopic(t, num++, nl.date)).join("")}</div>
      <div style="margin-bottom:8px;">${eduSectionHeader}${eduTopics.map((t) => exportRenderTopic(t, num++, nl.date)).join("")}</div>`;
  } else {
    topicsBodyHtml = nlTopics
      .map((t, i) => exportRenderTopic(t, i + 1, nl.date))
      .join("");
  }

  const editionLabel = `Edition ${String(nl.edition).padStart(2, "0")}`;
  const bodyHTML = `
    <div style="width:100%;box-sizing:border-box;padding:48px 32px;font-family:'Inter',-apple-system,sans-serif;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#ae530f;margin-bottom:14px;">${editionLabel} · ${nl.date}</div>
      <h1 style="font-family:'Lexend',sans-serif;font-size:32px;font-weight:800;line-height:1.1;color:#000;letter-spacing:-0.03em;margin:0 0 14px;">${nl.title}</h1>
      <p style="font-size:15px;color:#666;line-height:1.75;margin:0 0 28px;">${nl.description}</p>
      <hr style="height:1px;background:#ebebeb;border:none;margin-bottom:32px;">
      ${topicsBodyHtml}
      <div style="margin-top:48px;padding-top:24px;border-top:1px solid #ebebeb;font-size:11px;color:#767676;text-align:center;">Suger Cube · ${editionLabel} · ${nl.date}</div>
    </div>`;
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${nl.title} — Suger Cube</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lexend:wght@700;800&display=swap" rel="stylesheet">
</head>
<body style="font-family:'Inter',-apple-system,sans-serif;background:#f5f5f5;color:#111;line-height:1.6;margin:0;padding:0;">
  ${bodyHTML}
</body>
</html>`;
  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `suger-cube-${nlSlug(nl.id)}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ── Dark mode ────────────────────────────────────────────────────────────────

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark ? "1" : "0");
  document
    .getElementById("dark-mode-btn")
    ?.setAttribute("aria-pressed", String(isDark));
}

function initDarkMode() {
  if (localStorage.getItem("dark-mode") === "1") {
    document.body.classList.add("dark-mode");
    document
      .getElementById("dark-mode-btn")
      ?.setAttribute("aria-pressed", "true");
  }
}

// ── Onboarding ───────────────────────────────────────────────────────────────

function initOnboarding() {
  const seen = localStorage.getItem("suger-cube-onboarded");
  if (seen) {
    activePersona = localStorage.getItem("suger-cube-persona") || "all";
    document.getElementById("onboarding")?.classList.add("onb-hidden");
    syncPersonaPills();
    applyPersonaToFeed();
    return;
  }
  // Onboarding overlay is visible by default — focus the first CTA
  setTimeout(() => {
    document.querySelector("#onb-step1 .onb-btn")?.focus();
  }, 100);
}

function onbGoStep(n) {
  document
    .querySelectorAll(".onb-step")
    .forEach((s) => s.classList.remove("active"));
  const step = document.getElementById("onb-step" + n);
  step?.classList.add("active");
  // Move focus to the first focusable element in the new step
  setTimeout(() => {
    step?.querySelector(".onb-persona, .onb-btn")?.focus();
  }, 50);
}

function onbSelectPersona(persona, el) {
  document
    .querySelectorAll(".onb-persona")
    .forEach((c) => c.classList.remove("sel-explorer", "sel-tracker"));
  el.classList.add("sel-" + persona);
  activePersona = persona;
  const btn = document.getElementById("onb-continue-btn");
  if (btn) btn.disabled = false;
}

function onbEnterApp() {
  localStorage.setItem("suger-cube-onboarded", "1");
  localStorage.setItem("suger-cube-persona", activePersona);
  document.getElementById("onboarding")?.classList.add("onb-hidden");
  syncPersonaPills();
  applyPersonaToFeed();
  document.getElementById("main-content")?.focus();
}

function onbSkip() {
  activePersona = "all";
  localStorage.setItem("suger-cube-onboarded", "1");
  localStorage.setItem("suger-cube-persona", "all");
  document.getElementById("onboarding")?.classList.add("onb-hidden");
  syncPersonaPills();
  document.getElementById("main-content")?.focus();
}

// ── Persona + domain filters ─────────────────────────────────────────────────

function setPersona(persona) {
  activePersona = persona;
  localStorage.setItem("suger-cube-persona", persona);
  syncPersonaPills();
  applyPersonaToFeed();
}

function syncPersonaPills() {
  document.querySelectorAll(".pf-btn").forEach((b) => {
    b.classList.remove("active-all", "active-explorer", "active-tracker");
    b.setAttribute("aria-pressed", "false");
  });
  const activeBtn = document.getElementById("pf-" + activePersona);
  if (activeBtn) {
    activeBtn.classList.add("active-" + activePersona);
    activeBtn.setAttribute("aria-pressed", "true");
  }
}

function applyPersonaToFeed() {
  const feedSections = document.getElementById("card-feed-sections");
  const newsSection = document.getElementById("card-section-news");
  const eduSection = document.getElementById("card-section-edu");
  if (!feedSections || !newsSection || !eduSection) return;
  if (activePersona === "explorer") {
    feedSections.insertBefore(eduSection, newsSection);
  } else {
    feedSections.insertBefore(newsSection, eduSection);
  }
}

function nlFilterDomain(domain, btn) {
  document.querySelectorAll(".df-btn").forEach((b) => {
    b.classList.remove("active");
    b.setAttribute("aria-pressed", "false");
  });
  btn.classList.add("active");
  btn.setAttribute("aria-pressed", "true");
  document.querySelectorAll("#news-grid .card").forEach((c) => {
    if (domain === "all") {
      c.classList.remove("domain-hidden");
      return;
    }
    const tags = (c.dataset.tags || "").split(" ").filter(Boolean);
    c.classList.toggle("domain-hidden", !tags.includes(domain));
  });
}
