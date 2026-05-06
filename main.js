const topicMap = {};
const newsletterTags = {};
const activeFilters = new Set();
let activeNewsletterId;
let currentSearch = "";
let searchTimeout = null;
let isNavigating = false;
let navigatingTimer = null;
let urlUpdateTimer = null;

function setNavigating() {
  isNavigating = true;
  clearTimeout(navigatingTimer);
  navigatingTimer = setTimeout(() => {
    isNavigating = false;
  }, 700);
}

function parseHash() {
  const raw = location.hash.slice(1);
  if (!raw) return { newsletterId: null, topicId: null };
  const slash = raw.indexOf("/");
  if (slash === -1) return { newsletterId: raw, topicId: null };
  return { newsletterId: raw.slice(0, slash), topicId: raw.slice(slash + 1) };
}

function pushHash(newsletterId, topicId) {
  const hash = topicId ? `#${newsletterId}/${topicId}` : `#${newsletterId}`;
  history.pushState(null, "", hash);
}

function replaceHash(newsletterId, topicId) {
  const hash = topicId ? `#${newsletterId}/${topicId}` : `#${newsletterId}`;
  history.replaceState(null, "", hash);
}

function onNavigate() {
  const { newsletterId, topicId } = parseHash();
  if (!newsletterId) return;
  if (newsletterId !== activeNewsletterId) {
    selectNewsletter(newsletterId, false);
    if (topicId) setTimeout(() => scrollToTopic(topicId), 80);
  } else if (topicId) {
    scrollToTopic(topicId);
  }
}

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
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".export-wrap")) closeExportMenu();
  });

  if (validId) ensureNewsletterVisible(activeNewsletterId);
  if (!location.hash) history.replaceState(null, "", `#${activeNewsletterId}`);
  if (topicId) setTimeout(() => scrollToTopic(topicId), 80);

  window.addEventListener("popstate", onNavigate);
  window.addEventListener("hashchange", onNavigate);
});

function ensureNewsletterVisible(id) {
  const item = document.querySelector(`.sidebar-item[data-id="${id}"]`);
  if (!item) return;
  const yearGroup = item.closest(".sidebar-year-group");
  if (yearGroup?.classList.contains("collapsed"))
    yearGroup.classList.remove("collapsed");
  if (item.classList.contains("sidebar-month-extra"))
    yearGroup?.classList.add("months-expanded");
}

function selectNewsletter(id, updateHash = true) {
  if (id === activeNewsletterId) return;
  activeNewsletterId = id;

  if (updateHash) pushHash(id, null);
  closeGlossary();
  closeMobileMenu();
  ensureNewsletterVisible(id);

  document.querySelectorAll(".sidebar-item").forEach((el) => {
    el.classList.toggle("active", el.dataset.id === id);
  });

  document.querySelectorAll(".sidebar-topics").forEach((el) => {
    el.classList.toggle("visible", el.dataset.nl === id);
  });

  const nl = newsletters.find((n) => n.id === id);
  document.title = `${nl.title} — Suger Cube`;
  const main = document.getElementById("main-content");
  main.innerHTML = renderNewsletterContent(nl);
  main.scrollTo({ top: 0, behavior: "smooth" });
  if (currentSearch) {
    const terms = currentSearch.split(/\s+/).filter(Boolean);
    highlightKeywords(main, terms);
  }
}

function navigateToTopic(newsletterId, topicId) {
  pushHash(newsletterId, topicId);
  setNavigating();
  if (newsletterId !== activeNewsletterId) {
    selectNewsletter(newsletterId, false);
    setTimeout(() => scrollToTopic(topicId), 80);
  } else {
    scrollToTopic(topicId);
  }
  closeMobileMenu();
}

function scrollToTopic(topicId) {
  const el = document.getElementById(topicId);
  const main = document.getElementById("main-content");
  if (!el || !main) return;
  setNavigating();
  const offset =
    el.getBoundingClientRect().top - main.getBoundingClientRect().top;
  main.scrollBy({ top: offset - 24, behavior: "smooth" });
}

function initScrollListener() {
  const main = document.getElementById("main-content");
  if (!main) return;
  main.addEventListener("scroll", () => {
    const btn = document.getElementById("back-to-top");
    if (btn) btn.classList.toggle("visible", main.scrollTop > 300);
    const logo = document.getElementById("scroll-logo");
    const logoFill = document.getElementById("scroll-logo-fill");
    if (logo && logoFill) {
      const scrollable = main.scrollHeight - main.clientHeight;
      const pct = scrollable > 0 ? (main.scrollTop / scrollable) * 100 : 0;
      logo.classList.toggle("visible", main.scrollTop > 20);
      logoFill.style.clipPath = `inset(${100 - pct}% 0 0 0)`;
    }
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

function smoothScrollTo(event, id) {
  event.preventDefault();
  pushHash(activeNewsletterId, id);
  setNavigating();
  const el = document.getElementById(id);
  const main = document.getElementById("main-content");
  if (!el || !main) return;
  const offset =
    el.getBoundingClientRect().top - main.getBoundingClientRect().top;
  main.scrollBy({ top: offset - 24, behavior: "smooth" });
}

function toggleGlossary() {
  const panel = document.getElementById("glossary-panel");
  const btn = document.getElementById("glossary-btn");
  const iframe = document.getElementById("glossary-iframe");
  if (!panel || !btn) return;

  const isOpen = panel.classList.toggle("open");
  btn.classList.toggle("active", isOpen);

  if (isOpen && iframe && !iframe.src && iframe.dataset.src) {
    iframe.src = iframe.dataset.src;
  }
}

function closeGlossary() {
  document.getElementById("glossary-panel")?.classList.remove("open");
  document.getElementById("glossary-btn")?.classList.remove("active");
}

function toggleMobileMenu() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("mobile-overlay");
  if (!sidebar || !overlay) return;

  const isOpen = sidebar.classList.toggle("mobile-open");
  overlay.classList.toggle("visible", isOpen);
}

function closeMobileMenu() {
  document.getElementById("sidebar")?.classList.remove("mobile-open");
  document.getElementById("mobile-overlay")?.classList.remove("visible");
}

function toggleFilter(tagId) {
  if (activeFilters.has(tagId)) activeFilters.delete(tagId);
  else activeFilters.add(tagId);
  applyFilters();
}

function clearFilters() {
  activeFilters.clear();
  applyFilters();
}

function applyFilters() {
  document.querySelectorAll(".filter-pill[data-tag]").forEach((pill) => {
    pill.classList.toggle("active", activeFilters.has(pill.dataset.tag));
  });
  document
    .getElementById("filter-all")
    ?.classList.toggle("active", activeFilters.size === 0);
  document.querySelectorAll(".sidebar-item[data-id]").forEach((item) => {
    const matches =
      activeFilters.size === 0 ||
      [...activeFilters].some((tag) =>
        newsletterTags[item.dataset.id]?.has(tag),
      );
    item.classList.toggle("dimmed", !matches);
  });
}

function toggleYearGroup(year) {
  document
    .querySelector(`.sidebar-year-group[data-year="${year}"]`)
    ?.classList.toggle("collapsed");
}

function toggleMoreMonths(year) {
  const group = document.querySelector(
    `.sidebar-year-group[data-year="${year}"]`,
  );
  if (!group) return;
  const isExpanded = group.classList.toggle("months-expanded");
  const btn = group.querySelector(".sidebar-show-more");
  if (btn)
    btn.textContent = isExpanded ? "Show less" : `+ ${btn.dataset.extra} more`;
}

function toggleExportMenu() {
  document.getElementById("export-menu")?.classList.toggle("open");
}

function closeExportMenu() {
  document.getElementById("export-menu")?.classList.remove("open");
}

function triggerPrint() {
  closeExportMenu();
  window.print();
}

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

  const bodyHTML = `
    <div style="width:100%;box-sizing:border-box;padding:48px 32px;font-family:'Inter',-apple-system,sans-serif;">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#ae530f;margin-bottom:14px;">${nl.date}</div>
      <h1 style="font-family:'Lexend',sans-serif;font-size:32px;font-weight:800;line-height:1.1;color:#000;letter-spacing:-0.03em;margin:0 0 14px;">${nl.title}</h1>
      <p style="font-size:15px;color:#666;line-height:1.75;margin:0 0 28px;">${nl.description}</p>
      <hr style="height:1px;background:#ebebeb;border:none;margin-bottom:32px;">
      ${topicsBodyHtml}
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
  a.download = `suger-cube-${nl.id}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark ? "1" : "0");
}

function initDarkMode() {
  if (localStorage.getItem("dark-mode") === "1") {
    document.body.classList.add("dark-mode");
  }
}

function handleSearch(query) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentSearch = query.trim().toLowerCase();
    applySearch();
  }, 250);
}

function applySearch() {
  const terms = currentSearch ? currentSearch.split(/\s+/).filter(Boolean) : [];

  if (terms.length === 0) {
    document.querySelectorAll(".sidebar-item[data-id]").forEach((item) => {
      item.classList.remove("search-dimmed");
    });
    clearHighlights(document.getElementById("main-content"));
    return;
  }

  document.querySelectorAll(".sidebar-item[data-id]").forEach((item) => {
    const nl = newsletters.find((n) => n.id === item.dataset.id);
    const score = nl ? scoreNewsletter(nl, terms) : 0;
    item.classList.toggle("search-dimmed", score === 0);
  });

  const scored = newsletters
    .map((nl) => ({ nl, score: scoreNewsletter(nl, terms) }))
    .sort((a, b) => b.score - a.score);
  const top = scored[0];

  if (top && top.score > 0) {
    if (top.nl.id !== activeNewsletterId) {
      selectNewsletter(top.nl.id);
    } else {
      highlightKeywords(document.getElementById("main-content"), terms);
    }
  }
}

function scoreNewsletter(nl, terms) {
  let score = 0;
  const fields = [
    { text: nl.title, weight: 10 },
    { text: nl.description, weight: 5 },
  ];
  nl.topicIds.forEach((tid) => {
    const topic = topicMap[tid];
    if (!topic) return;
    fields.push({ text: topic.title, weight: 3 });
    if (topic.subtitle) fields.push({ text: topic.subtitle, weight: 2 });
    if (topic.intro) fields.push({ text: topic.intro, weight: 1 });
  });
  [...(newsletterTags[nl.id] || [])].forEach((tagId) => {
    const m = tagMeta[tagId];
    if (m) fields.push({ text: m.label, weight: 8 });
  });
  terms.forEach((term) => {
    fields.forEach(({ text, weight }) => {
      if (text && text.toLowerCase().includes(term)) score += weight;
    });
  });
  return score;
}

function highlightKeywords(container, terms) {
  if (!container || !terms.length) return;
  clearHighlights(container);
  const content = container.querySelector(".content");
  if (!content) return;
  const regex = new RegExp(`(${terms.map(escapeRegex).join("|")})`, "gi");
  const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const tag = node.parentElement?.tagName?.toLowerCase();
      if (!tag || ["script", "style", "mark"].includes(tag))
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  let node;
  while ((node = walker.nextNode())) nodes.push(node);
  nodes.forEach((textNode) => {
    const text = textNode.textContent;
    if (!regex.test(text)) return;
    regex.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0;
    let m;
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last)
        frag.appendChild(document.createTextNode(text.slice(last, m.index)));
      const mark = document.createElement("mark");
      mark.className = "search-highlight";
      mark.textContent = m[0];
      frag.appendChild(mark);
      last = regex.lastIndex;
    }
    if (last < text.length)
      frag.appendChild(document.createTextNode(text.slice(last)));
    textNode.parentNode.replaceChild(frag, textNode);
  });
}

function clearHighlights(container) {
  if (!container) return;
  container.querySelectorAll("mark.search-highlight").forEach((mark) => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
