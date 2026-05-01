function renderFilterBar() {
  const pills = Object.entries(tagMeta)
    .map(
      ([id, m]) =>
        `<button class="filter-pill" data-tag="${id}"
      style="--pill-bg:${m.badgeBg};--pill-text:${m.badgeText};--pill-border:${m.border}"
      onclick="toggleFilter('${id}')">${m.label}</button>`,
    )
    .join("");
  return `<div class="filterbar" id="filterbar">
    <span class="filterbar-label">Filter</span>
    <button class="filter-pill active" id="filter-all" onclick="clearFilters()">All</button>
    ${pills}
  </div>`;
}

function renderLayout() {
  const first = newsletters[0];

  const yearMap = {};
  newsletters.forEach((nl) => {
    const year = nl.date.split(" ").pop();
    if (!yearMap[year]) yearMap[year] = [];
    yearMap[year].push(nl);
  });
  const sortedYears = Object.keys(yearMap).sort(
    (a, b) => Number(b) - Number(a),
  );
  const VISIBLE_YEARS = 2;
  const VISIBLE_MONTHS = 6;

  const sidebarGroups = sortedYears
    .map((year, yi) => {
      const nls = yearMap[year];
      const isYearCollapsed = yi >= VISIBLE_YEARS;
      const monthItems = nls
        .map((nl, ni) => {
          const isActive = nl.id === first.id;
          const isExtra = ni >= VISIBLE_MONTHS;
          const nlTopics = nl.topicIds
            .map((id) => topicMap[id])
            .filter(Boolean);
          return `
        <button class="sidebar-item${isActive ? " active" : ""}${isExtra ? " sidebar-month-extra" : ""}" data-id="${nl.id}" onclick="selectNewsletter('${nl.id}')">
          <div class="sidebar-date">${nl.date}</div>
          <div class="sidebar-title">${nl.title}</div>
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
          <span></span><span></span><span></span>
        </button>
        <span class="masthead-dot"></span>
        <span class="masthead-wordmark">Suger Cube</span>
        <span class="masthead-sep"></span>
        <span class="masthead-by">Cloud Marketplace, Decoded.</span>
      </div>
    </header>
    ${renderFilterBar()}
    <div class="mobile-overlay" id="mobile-overlay" onclick="toggleMobileMenu()"></div>
    <div class="layout">
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-label">Newsletters</div>
        ${sidebarGroups}
      </aside>
      <main class="main" id="main-content">
        ${renderNewsletterContent(first)}
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
