function renderFilterBar() {
  const pills = Object.entries(tagMeta)
    .map(([id, m]) => {
      const count = newsletters.filter((nl) =>
        newsletterTags[nl.id]?.has(id),
      ).length;
      return `<button class="filter-pill" data-tag="${id}"
      style="--pill-bg:${m.badgeBg};--pill-text:${m.badgeText};--pill-border:${m.border}"
      onclick="toggleFilter('${id}')">${m.label}<span class="pill-count">${count}</span></button>`;
    })
    .join("");
  return `<div class="filterbar" id="filterbar">
    <span class="filterbar-label">Filter</span>
    <button class="filter-pill active" id="filter-all" onclick="clearFilters()">All</button>
    ${pills}
  </div>`;
}

function renderLayout() {
  const activeNl =
    newsletters.find((n) => n.id === activeNewsletterId) || newsletters[0];

  const yearMap = {};
  newsletters.forEach((nl) => {
    const year = nl.date.split(" ").pop();
    if (!yearMap[year]) yearMap[year] = [];
    yearMap[year].push(nl);
  });
  const sortedYears = Object.keys(yearMap).sort(
    (a, b) => Number(b) - Number(a),
  );
  const currentYear = new Date().getFullYear().toString();
  const VISIBLE_MONTHS = 6;

  const sidebarGroups = sortedYears
    .map((year) => {
      const nls = yearMap[year];
      const isYearCollapsed = year !== currentYear;
      const monthItems = nls
        .map((nl, ni) => {
          const isActive = nl.id === activeNl.id;
          const isExtra = ni >= VISIBLE_MONTHS;
          const nlTopics = nl.topicIds
            .map((id) => topicMap[id])
            .filter(Boolean);
          const nlTagDots = [...(newsletterTags[nl.id] || [])]
            .map((tagId) => {
              const m = tagMeta[tagId] || {};
              return `<span class="sidebar-tag-dot" style="background:${m.border || "#444"}" title="${m.label || tagId}"></span>`;
            })
            .join("");
          return `
        <button class="sidebar-item${isActive ? " active" : ""}${isExtra ? " sidebar-month-extra" : ""}" data-id="${nl.id}" onclick="selectNewsletter('${nl.id}')">
          <div class="sidebar-date">${nl.date}</div>
          <div class="sidebar-title">${nl.title}</div>
          <div class="sidebar-item-meta">${nlTagDots}</div>
        </button>
        <div class="sidebar-topics${isActive ? " visible" : ""}" data-nl="${nl.id}">
          ${nlTopics
            .map(
              (t, ti) => `
            <button class="sidebar-topic-item" onclick="navigateToTopic('${nl.id}','${t.id}')">
              <span class="sidebar-topic-num">${String(ti + 1).padStart(2, "0")}</span>
              <span class="sidebar-topic-label">${t.title}</span>
            </button>`,
            )
            .join("")}
        </div>`;
        })
        .join("");
      const extraCount = nls.length - VISIBLE_MONTHS;
      return `
      <div class="sidebar-year-group${isYearCollapsed ? " collapsed" : ""}" data-year="${year}">
        <button class="sidebar-year-header" onclick="toggleYearGroup('${year}')">
          <span class="sidebar-year-label">${year}</span>
          <svg class="sidebar-year-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1,1 5,5 9,1"/></svg>
        </button>
        <div class="sidebar-year-body">
          ${monthItems}
          ${extraCount > 0 ? `<button class="sidebar-show-more" data-extra="${extraCount}" onclick="toggleMoreMonths('${year}')">+ ${extraCount} more</button>` : ""}
        </div>
      </div>`;
    })
    .join("");

  return `
    <header class="masthead">
      <div class="masthead-brand">
        <button class="mobile-menu-btn" onclick="toggleMobileMenu()" aria-label="Open navigation">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
            <rect width="20" height="2" rx="1" fill="white"/>
            <rect y="6" width="20" height="2" rx="1" fill="white"/>
            <rect y="12" width="20" height="2" rx="1" fill="white"/>
          </svg>
        </button>
        <svg class="masthead-dot" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M49.9999 99.9999C77.6141 99.9999 99.9998 77.6142 99.9998 50C99.9998 22.3858 77.6141 6.10352e-05 49.9999 6.10352e-05C22.3857 6.10352e-05 0 22.3858 0 50C0 77.6142 22.3857 99.9999 49.9999 99.9999Z" fill="#F26A1C"/>
            <path d="M99.8031 45.5344C99.4753 41.8308 94.8315 41.8103 91.7516 43.893C83.7679 49.2918 74.1411 52.4446 63.7778 52.4446C53.5714 52.4446 44.0792 49.3864 36.1676 44.1365C27.0941 38.1155 16.0466 33.2801 6.25722 38.0495C5.81756 38.2638 5.37971 38.4811 4.94369 38.7015C2.30106 40.0375 0.457789 42.5847 0.196716 45.5344C0.0664981 47.0056 0 48.4951 0 50.0001C0 77.6143 22.3857 100 49.9999 100C77.6141 100 99.9998 77.6143 99.9998 50.0001C99.9998 48.4951 99.9333 47.0056 99.8031 45.5344Z" fill="#FBB92A"/>
            <path d="M99.7996 45.4C99.3996 41.8 94.7996 41.8 91.7997 43.8C83.7997 49.2 74.1997 52.4 63.7997 52.4C53.5997 52.4 44.0997 49.3 36.1997 44.1C27.0998 38.1 15.9998 33.3 6.29979 38C5.8998 38.2 5.3998 38.4 4.9998 38.7C2.3998 40 0.599804 42.5 0.299805 45.4C2.4998 19.9 23.8998 6.10352e-05 49.9997 6.10352e-05C76.0997 6.10352e-05 97.4996 20 99.7996 45.4Z" fill="#F26A1C"/>
        </svg>
        <span class="masthead-wordmark">Suger Cube</span>
        <span class="masthead-sep"></span>
        <span class="masthead-by">Cloud Marketplace, Decoded.</span>
      </div>
      <div class="masthead-actions">
        <div class="export-wrap">
          <button class="masthead-action-btn" onclick="toggleExportMenu()" aria-label="Export newsletter">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          </button>
          <div class="export-menu" id="export-menu">
            <button class="export-option" onclick="triggerPrint()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              Print / Save PDF
            </button>
            <button class="export-option" onclick="exportAsHTML()">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export HTML
            </button>
          </div>
        </div>
        <button class="masthead-action-btn" id="dark-mode-btn" onclick="toggleDarkMode()" aria-label="Toggle dark mode">
          <svg class="icon-moon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="icon-sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>
    </header>
    ${renderFilterBar()}
    <div class="mobile-overlay" id="mobile-overlay" onclick="toggleMobileMenu()"></div>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-label">Newsletters</div>
      <div class="sidebar-search">
        <input class="sidebar-search-input" type="search" placeholder="Search newsletters…" oninput="handleSearch(this.value)" autocomplete="off" />
      </div>
      ${sidebarGroups}
    </aside>
    <div class="layout">
      <main class="main" id="main-content">
        ${renderNewsletterContent(activeNl)}
      </main>
      <aside class="glossary-panel" id="glossary-panel">
        <div class="glossary-panel-header">
          <span class="glossary-panel-title">Marketplace Glossary</span>
          <button class="glossary-close" onclick="toggleGlossary()" aria-label="Close glossary">&times;</button>
        </div>
        <iframe id="glossary-iframe" class="glossary-iframe" data-src="https://gelogabz.github.io/marketplaceglossary-prototype-gelobaring/" title="Marketplace Glossary"></iframe>
      </aside>
    </div>
    <button class="glossary-btn" id="glossary-btn" onclick="toggleGlossary()" aria-label="Open glossary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    </button>
    <button class="back-to-top" id="back-to-top" onclick="scrollMainToTop()" aria-label="Back to top">↑</button>`;
}

function renderNewsletterContent(nl) {
  const nlTopics = nl.topicIds.map((id) => topicMap[id]).filter(Boolean);
  return `
    <div class="reading-progress-wrap"><div class="reading-progress" id="reading-progress"></div></div>
    <div class="content">
      <div class="nl-header">
        <div class="nl-eyebrow">${nl.date}</div>
        <h1 class="nl-title">${nl.title}</h1>
        <p class="nl-description">${nl.description}</p>
        <div class="nl-divider"></div>
        <nav class="nl-nav">
          ${nlTopics
            .map(
              (t, i) => `
            <a href="#${t.id}" class="nl-nav-item" onclick="smoothScrollTo(event,'${t.id}')">
              <span class="nl-nav-num">${String(i + 1).padStart(2, "0")}</span>
              ${t.title}
            </a>`,
            )
            .join("")}
        </nav>
      </div>
      ${nlTopics.map((t, i) => renderTopic(t, i + 1)).join("")}
      <footer class="site-footer">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-col-title">Suger</div>
            <ul class="footer-links">
              <li><a href="https://www.suger.io/" target="_blank" rel="noopener noreferrer">suger.io</a></li>
              <li><a href="https://doc.suger.io/" target="_blank" rel="noopener noreferrer">Documentation</a></li>
              <li><a href="https://doc.suger.io/get-started/" target="_blank" rel="noopener noreferrer">Get started</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Cloud marketplaces</div>
            <ul class="footer-links">
              <li><a href="https://aws.amazon.com/marketplace" target="_blank" rel="noopener noreferrer">AWS Marketplace</a></li>
              <li><a href="https://azuremarketplace.microsoft.com/" target="_blank" rel="noopener noreferrer">Azure Marketplace</a></li>
              <li><a href="https://cloud.google.com/marketplace" target="_blank" rel="noopener noreferrer">GCP Marketplace</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <div class="footer-col-title">Marketplace docs</div>
            <ul class="footer-links">
              <li><a href="https://docs.aws.amazon.com/marketplace/latest/userguide/index.html" target="_blank" rel="noopener noreferrer">AWS MP docs</a></li>
              <li><a href="https://learn.microsoft.com/en-us/partner-center/marketplace/" target="_blank" rel="noopener noreferrer">Azure MP docs</a></li>
              <li><a href="https://cloud.google.com/marketplace/docs" target="_blank" rel="noopener noreferrer">GCP MP docs</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">© 2026 Suger, Inc. All rights reserved.</div>
      </footer>
    </div>`;
}

function renderTopic(topic, number) {
  const num = String(number).padStart(2, "0");
  return `
    <article class="topic" id="${topic.id}">
      <div class="topic-eyebrow">
        <span class="topic-num">${num}</span>
        <div class="topic-tags">
          ${topic.tags
            .map((tagId) => {
              const m = tagMeta[tagId] || {};
              return `<span class="tag-pill" style="background:${m.badgeBg};color:${m.badgeText}">${m.label || tagId}</span>`;
            })
            .join("")}
        </div>
      </div>
      <h2 class="topic-title">${topic.title}</h2>
      <p class="topic-subtitle">${topic.subtitle}</p>
      <p class="topic-intro">${topic.intro}</p>
      <div class="hs-sections">
        ${topic.hyperscalers.map(renderHSSection).join("")}
      </div>
      <div class="implications">
        <div class="implications-label">What this means for you</div>
        <p class="implications-body">${topic.implications}</p>
      </div>
    </article>`;
}

function renderHSSection(hs) {
  const m = tagMeta[hs.tagId] || {};
  const sourceHtml = hs.source
    ? `<a href="${hs.source.url}" class="hs-source" target="_blank" rel="noopener noreferrer">${hs.source.label}</a>`
    : "";
  return `
    <div class="hs-section">
      <div class="hs-section-head">
        <span class="hs-badge" style="background:${m.badgeBg};color:${m.badgeText}">${m.label || hs.tagId}</span>
        <h3 class="hs-headline">${hs.headline}</h3>
      </div>
      <p class="hs-body">${hs.body}</p>
      ${sourceHtml}
    </div>`;
}
