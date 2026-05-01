const topicMap = {};
const newsletterTags = {};
const activeFilters = new Set();
let activeNewsletterId;

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
  activeNewsletterId = newsletters[0].id;
  document.getElementById("app").innerHTML = renderLayout();
  initScrollListener();
});

function ensureNewsletterVisible(id) {
  const item = document.querySelector(`.sidebar-item[data-id="${id}"]`);
  if (!item) return;
  const yearGroup = item.closest(".sidebar-year-group");
  if (yearGroup?.classList.contains("collapsed")) yearGroup.classList.remove("collapsed");
  if (item.classList.contains("sidebar-month-extra")) yearGroup?.classList.add("months-expanded");
}

function selectNewsletter(id) {
  if (id === activeNewsletterId) return;
  activeNewsletterId = id;

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
  const main = document.getElementById("main-content");
  main.innerHTML = renderNewsletterContent(nl);
  main.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateToTopic(newsletterId, topicId) {
  if (newsletterId !== activeNewsletterId) {
    selectNewsletter(newsletterId);
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
  });
}

function scrollMainToTop() {
  document
    .getElementById("main-content")
    ?.scrollTo({ top: 0, behavior: "smooth" });
}

function smoothScrollTo(event, id) {
  event.preventDefault();
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
  document.getElementById("filter-all")?.classList.toggle("active", activeFilters.size === 0);
  document.querySelectorAll(".sidebar-item[data-id]").forEach((item) => {
    const matches =
      activeFilters.size === 0 ||
      [...activeFilters].some((tag) => newsletterTags[item.dataset.id]?.has(tag));
    item.classList.toggle("dimmed", !matches);
  });
}

function toggleYearGroup(year) {
  document
    .querySelector(`.sidebar-year-group[data-year="${year}"]`)
    ?.classList.toggle("collapsed");
}

function toggleMoreMonths(year) {
  const group = document.querySelector(`.sidebar-year-group[data-year="${year}"]`);
  if (!group) return;
  const isExpanded = group.classList.toggle("months-expanded");
  const btn = group.querySelector(".sidebar-show-more");
  if (btn) btn.textContent = isExpanded ? "Show less" : `+ ${btn.dataset.extra} more`;
}
