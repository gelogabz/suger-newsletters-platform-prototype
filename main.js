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
  const triggerLabel = document.getElementById("editions-trigger-label");
  if (triggerLabel) triggerLabel.textContent = nl.date;

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

function hideOnboarding() {
  document.getElementById("onboarding")?.classList.add("onb-hidden");
}

function initOnboarding() {
  const seen = localStorage.getItem("suger-cube-onboarded");
  if (seen) {
    activePersona = localStorage.getItem("suger-cube-persona") || "all";
    hideOnboarding();
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
  hideOnboarding();
  syncPersonaPills();
  applyPersonaToFeed();
  document.getElementById("main-content")?.focus();
}

function onbSkip() {
  activePersona = "all";
  localStorage.setItem("suger-cube-onboarded", "1");
  localStorage.setItem("suger-cube-persona", "all");
  hideOnboarding();
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
