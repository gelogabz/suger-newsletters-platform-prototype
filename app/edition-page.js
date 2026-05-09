// Globals that render.js functions expect
const topicMap = {};
const newsletterTags = {};
let activeNewsletterId = EDITION_ID;

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

  const nl = newsletters.find((n) => n.id === EDITION_ID);
  if (!nl) return;

  const editionNum = String(nl.edition).padStart(2, "0");
  document.title = `${nl.title} — Edition ${editionNum} · ${nl.date} — Suger Cube`;

  document.getElementById("app").innerHTML = renderEditionPageLayout(nl);

  if (localStorage.getItem("dark-mode") === "1") {
    document.body.classList.add("dark-mode");
    document
      .getElementById("dark-mode-btn")
      ?.setAttribute("aria-pressed", "true");
  }

  initEditionScrollListener();

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".export-wrap")) closeExportMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const exportMenu = document.getElementById("export-menu");
      if (exportMenu?.classList.contains("open")) {
        closeExportMenu();
        return;
      }
      const glossaryPanel = document.getElementById("glossary-panel");
      if (glossaryPanel?.classList.contains("open")) toggleGlossary();
    }
  });

  // Scroll to specific article if hash is present
  if (location.hash) {
    setTimeout(() => {
      const el = document.getElementById(location.hash.slice(1));
      const main = document.getElementById("main-content");
      if (el && main) {
        const offset =
          el.getBoundingClientRect().top - main.getBoundingClientRect().top;
        main.scrollBy({ top: offset - 24, behavior: "smooth" });
      }
    }, 120);
  }
});

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", isDark ? "1" : "0");
  document
    .getElementById("dark-mode-btn")
    ?.setAttribute("aria-pressed", String(isDark));
}

function scrollMainToTop() {
  document
    .getElementById("main-content")
    ?.scrollTo({ top: 0, behavior: "smooth" });
}

function initEditionScrollListener() {
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
  });
}

function toggleGlossary() {
  const panel = document.getElementById("glossary-panel");
  const btn = document.getElementById("glossary-btn");
  if (!panel) return;
  const isOpen = panel.classList.toggle("open");
  if (btn) btn.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    const iframe = panel.querySelector(".glossary-iframe");
    if (iframe && iframe.dataset.src && !iframe.src) {
      iframe.src = iframe.dataset.src;
    }
  }
}
