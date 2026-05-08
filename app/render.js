const SUGER_LOGO_SVG = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M49.9999 99.9999C77.6141 99.9999 99.9998 77.6142 99.9998 50C99.9998 22.3858 77.6141 6.10352e-05 49.9999 6.10352e-05C22.3857 6.10352e-05 0 22.3858 0 50C0 77.6142 22.3857 99.9999 49.9999 99.9999Z" fill="#F26A1C"/>
  <path d="M99.8031 45.5344C99.4753 41.8308 94.8315 41.8103 91.7516 43.893C83.7679 49.2918 74.1411 52.4446 63.7778 52.4446C53.5714 52.4446 44.0792 49.3864 36.1676 44.1365C27.0941 38.1155 16.0466 33.2801 6.25722 38.0495C5.81756 38.2638 5.37971 38.4811 4.94369 38.7015C2.30106 40.0375 0.457789 42.5847 0.196716 45.5344C0.0664981 47.0056 0 48.4951 0 50.0001C0 77.6143 22.3857 100 49.9999 100C77.6141 100 99.9998 77.6143 99.9998 50.0001C99.9998 48.4951 99.9333 47.0056 99.8031 45.5344Z" fill="#FBB92A"/>
  <path d="M99.7996 45.4C99.3996 41.8 94.7996 41.8 91.7997 43.8C83.7997 49.2 74.1997 52.4 63.7997 52.4C53.5997 52.4 44.0997 49.3 36.1997 44.1C27.0998 38.1 15.9998 33.3 6.29979 38C5.8998 38.2 5.3998 38.4 4.9998 38.7C2.3998 40 0.599804 42.5 0.299805 45.4C2.4998 19.9 23.8998 6.10352e-05 49.9997 6.10352e-05C76.0997 6.10352e-05 97.4996 20 99.7996 45.4Z" fill="#F26A1C"/>
</svg>`;

function renderEditionCard(nl, isActive) {
  const tagsHtml = [...(newsletterTags[nl.id] || [])]
    .map((tagId) => {
      const m = tagMeta[tagId] || {};
      return `<span class="edition-card-tag" style="background:${m.badgeBg};color:${m.badgeText}">${m.label || tagId}</span>`;
    })
    .join("");
  const editionLabel = `Edition ${String(nl.edition).padStart(2, "0")}`;
  return `
    <button class="edition-card${isActive ? " edition-card--active" : ""}" data-id="${nl.id}" onclick="selectEditionFromPanel('${nl.id}')">
      <div class="edition-card-meta">
        <span class="edition-card-num">${editionLabel}</span>
        <span class="edition-card-date">${nl.date}</span>
      </div>
      <div class="edition-card-title">${nl.title}</div>
      <div class="edition-card-tags">${tagsHtml}</div>
    </button>`;
}

function renderEditionsPanel() {
  const activeId = activeNewsletterId || newsletters[0]?.id;
  const cards = newsletters
    .map((nl) => renderEditionCard(nl, nl.id === activeId))
    .join("");
  return `
    <div id="editions-panel" class="editions-panel" role="dialog" aria-modal="true" aria-labelledby="editions-panel-title" hidden>
      <div class="editions-panel-backdrop" onclick="closeEditionsPanel()" aria-hidden="true"></div>
      <div class="editions-panel-inner">
        <div class="editions-panel-header">
          <h2 id="editions-panel-title" class="editions-panel-title">All editions</h2>
          <button class="editions-panel-close" onclick="closeEditionsPanel()" aria-label="Close editions panel">&times;</button>
        </div>
        <div class="editions-panel-list">${cards}</div>
      </div>
    </div>`;
}

function renderLayout() {
  const activeNl =
    newsletters.find((n) => n.id === activeNewsletterId) || newsletters[0];
  const activeEditionLabel = `Edition ${String(activeNl.edition).padStart(2, "0")}`;

  return `
    ${renderOnboarding()}
    ${renderEditionsPanel()}
    <header class="masthead" role="banner">
      <div class="masthead-brand">
        <span class="masthead-dot">${SUGER_LOGO_SVG}</span>
        <a class="masthead-wordmark" href="index.html">Suger Cube</a>
      </div>
      <div class="masthead-center">
        <button class="editions-trigger" id="editions-trigger" onclick="toggleEditionsPanel()" aria-haspopup="dialog" aria-expanded="false" aria-controls="editions-panel">
          <span class="editions-trigger-label" id="editions-trigger-label">${activeEditionLabel}</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1,1 5,5 9,1"/></svg>
        </button>
        <div class="pf-group" role="group" aria-label="Reader mode">
          <button class="pf-btn active-all" id="pf-all" onclick="setPersona('all',this)" aria-pressed="true">All</button>
          <button class="pf-btn" id="pf-explorer" onclick="setPersona('explorer',this)" aria-pressed="false">Explorer</button>
          <button class="pf-btn" id="pf-tracker" onclick="setPersona('tracker',this)" aria-pressed="false">Tracker</button>
        </div>
      </div>
      <div class="masthead-actions">
        <div class="export-wrap">
          <button class="masthead-action-btn" onclick="toggleExportMenu()" aria-label="Export edition" aria-haspopup="menu" aria-expanded="false" id="export-trigger">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </button>
          <div class="export-menu" id="export-menu" role="menu">
            <button class="export-option" onclick="triggerPrint()" role="menuitem">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              Print / Save PDF
            </button>
            <button class="export-option" onclick="exportAsHTML()" role="menuitem">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Export HTML
            </button>
          </div>
        </div>
        <button class="masthead-action-btn" id="dark-mode-btn" onclick="toggleDarkMode()" aria-label="Toggle dark mode" aria-pressed="false">
          <svg class="icon-moon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="icon-sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>
    </header>
    <div class="layout">
      <main class="main" id="main-content" tabindex="-1">
        ${renderNewsletterContent(activeNl)}
      </main>
      <aside class="glossary-panel" id="glossary-panel" aria-label="Marketplace Glossary">
        <div class="glossary-panel-header">
          <span class="glossary-panel-title">Marketplace Glossary</span>
          <button class="glossary-close" onclick="toggleGlossary()" aria-label="Close glossary">&times;</button>
        </div>
        <iframe id="glossary-iframe" class="glossary-iframe" data-src="https://gelogabz.github.io/marketplaceglossary-prototype-gelobaring/" title="Marketplace Glossary"></iframe>
      </aside>
    </div>
    <button class="glossary-btn" id="glossary-btn" onclick="toggleGlossary()" aria-label="Open glossary" aria-expanded="false" aria-controls="glossary-panel">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    </button>
    <button class="back-to-top" id="back-to-top" onclick="scrollMainToTop()" aria-label="Back to top">↑</button>`;
}

function editionFileName(nl) {
  const parts = nl.date.split(" ");
  const month = parts[0].toLowerCase();
  const year = parts[1];
  return `edition${nl.edition}-${month}-${year}.html`;
}

function groupTopicsByType(topics) {
  const news = topics.filter((t) => (t.contentType || "news") === "news");
  const educational = topics.filter((t) => t.contentType === "educational");
  return {
    news,
    educational,
    mixed: news.length > 0 && educational.length > 0,
  };
}

function renderEditionNav(nl) {
  const nlIndex = newsletters.findIndex((n) => n.id === nl.id);
  const prevNl =
    nlIndex < newsletters.length - 1 ? newsletters[nlIndex + 1] : null;
  const nextNl = nlIndex > 0 ? newsletters[nlIndex - 1] : null;
  if (!prevNl && !nextNl) return "";
  return `
    <nav class="edition-nav" aria-label="Browse editions">
      ${
        prevNl
          ? `
        <button class="edition-nav-btn" onclick="selectNewsletter('${prevNl.id}')">
          <span class="edition-nav-direction">← Previous edition</span>
          <span class="edition-nav-date">${prevNl.date}</span>
          <span class="edition-nav-title">${prevNl.title}</span>
        </button>`
          : `<div></div>`
      }
      ${
        nextNl
          ? `
        <button class="edition-nav-btn edition-nav-btn--next" onclick="selectNewsletter('${nextNl.id}')">
          <span class="edition-nav-direction">Next edition →</span>
          <span class="edition-nav-date">${nextNl.date}</span>
          <span class="edition-nav-title">${nextNl.title}</span>
        </button>`
          : `<div></div>`
      }
    </nav>`;
}

function renderSiteFooter() {
  return `
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
    </footer>`;
}

function renderFeedView(nl) {
  const nlTopics = nl.topicIds.map((id) => topicMap[id]).filter(Boolean);
  const { news, educational } = groupTopicsByType(nlTopics);
  const editionLabel = `Edition ${String(nl.edition).padStart(2, "0")} · ${nl.date}`;
  return `
    <div class="content content--feed">
      <div class="nl-header">
        <div class="nl-eyebrow">${editionLabel}</div>
        <h1 class="nl-title">${nl.title}</h1>
        <p class="nl-description">${nl.description}</p>
        <p class="nl-tagline">For sales teams, founders, and enterprise buyers navigating cloud marketplace deals.</p>
      </div>
      ${renderCardFeed(nl, news, educational)}
      ${renderEditionNav(nl)}
      ${renderSiteFooter()}
    </div>`;
}

function renderNewsletterContent(nl) {
  return renderFeedView(nl);
}

function renderEditionPageContent(nl) {
  const nlTopics = nl.topicIds.map((id) => topicMap[id]).filter(Boolean);
  const { news, educational, mixed } = groupTopicsByType(nlTopics);
  const editionNum = String(nl.edition).padStart(2, "0");
  const editionLabel = `Edition ${editionNum} · ${nl.date}`;
  const feedUrl = `../index.html#edition-${editionNum}`;

  let topicsHtml = "";
  if (mixed) {
    let num = 1;
    topicsHtml = `
      <div class="topic-section topic-section--news">
        <div class="topic-section-header">
          <span class="topic-section-label">What's new</span>
          <span class="topic-section-date">${nl.date}</span>
        </div>
        ${news.map((t) => renderTopic(t, num++, nl.date, t.featured === true)).join("")}
      </div>
      <div class="topic-section topic-section--educational">
        <div class="topic-section-header">
          <span class="topic-section-label">Deep dive</span>
        </div>
        ${educational.map((t) => renderTopic(t, num++, nl.date)).join("")}
      </div>`;
  } else {
    topicsHtml = nlTopics
      .map((t, i) => renderTopic(t, i + 1, nl.date, t.featured === true))
      .join("");
  }

  return `
    <div class="content">
      <a class="back-to-feed" href="${feedUrl}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>
        Back to ${editionLabel}
      </a>
      <div class="nl-header">
        <div class="nl-eyebrow">${editionLabel}</div>
        <h1 class="nl-title">${nl.title}</h1>
        <p class="nl-description">${nl.description}</p>
      </div>
      ${topicsHtml}
      ${renderEditionPageNav(nl)}
      ${renderSiteFooter()}
    </div>`;
}

function renderEditionPageNav(nl) {
  const nlIndex = newsletters.findIndex((n) => n.id === nl.id);
  const prevNl = nlIndex < newsletters.length - 1 ? newsletters[nlIndex + 1] : null;
  const nextNl = nlIndex > 0 ? newsletters[nlIndex - 1] : null;
  if (!prevNl && !nextNl) return "";
  return `
    <nav class="edition-nav" aria-label="Browse editions">
      ${
        prevNl
          ? `<a class="edition-nav-btn" href="${editionFileName(prevNl)}">
              <span class="edition-nav-direction">← Previous edition</span>
              <span class="edition-nav-date">${prevNl.date}</span>
              <span class="edition-nav-title">${prevNl.title}</span>
            </a>`
          : `<div></div>`
      }
      ${
        nextNl
          ? `<a class="edition-nav-btn edition-nav-btn--next" href="${editionFileName(nextNl)}">
              <span class="edition-nav-direction">Next edition →</span>
              <span class="edition-nav-date">${nextNl.date}</span>
              <span class="edition-nav-title">${nextNl.title}</span>
            </a>`
          : `<div></div>`
      }
    </nav>`;
}

function renderEditionPageLayout(nl) {
  const editionNum = String(nl.edition).padStart(2, "0");
  const editionLabel = `Edition ${editionNum} · ${nl.date}`;
  return `
    <header class="masthead" role="banner">
      <div class="masthead-brand">
        <span class="masthead-dot">${SUGER_LOGO_SVG}</span>
        <a class="masthead-wordmark" href="../index.html">Suger Cube</a>
      </div>
      <div class="masthead-center">
        <a class="editions-trigger" href="../index.html#edition-${editionNum}" style="text-decoration:none;">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9,5 5,1 1,5"/></svg>
          <span class="editions-trigger-label">Back to feed</span>
        </a>
        <span class="edition-page-label">${editionLabel}</span>
      </div>
      <div class="masthead-actions">
        <button class="masthead-action-btn" id="dark-mode-btn" onclick="toggleDarkMode()" aria-label="Toggle dark mode" aria-pressed="false">
          <svg class="icon-moon" width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="icon-sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
      </div>
    </header>
    <div class="layout">
      <main class="main" id="main-content" tabindex="-1">
        ${renderEditionPageContent(nl)}
      </main>
      <aside class="glossary-panel" id="glossary-panel" aria-label="Marketplace Glossary">
        <div class="glossary-panel-header">
          <span class="glossary-panel-title">Marketplace Glossary</span>
          <button class="glossary-close" onclick="toggleGlossary()" aria-label="Close glossary">&times;</button>
        </div>
        <iframe id="glossary-iframe" class="glossary-iframe" data-src="https://gelogabz.github.io/marketplaceglossary-prototype-gelobaring/" title="Marketplace Glossary"></iframe>
      </aside>
    </div>
    <button class="glossary-btn" id="glossary-btn" onclick="toggleGlossary()" aria-label="Open glossary" aria-expanded="false" aria-controls="glossary-panel">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    </button>
    <button class="back-to-top" id="back-to-top" onclick="scrollMainToTop()" aria-label="Back to top">↑</button>
    <div class="scroll-logo" id="scroll-logo" aria-hidden="true">
      <div class="scroll-logo-ghost">${SUGER_LOGO_SVG.replace(/fill="#F26A1C"/g, 'fill="currentColor"').replace(/fill="#FBB92A"/g, 'fill="currentColor" opacity="0.5"')}</div>
      <div class="scroll-logo-fill" id="scroll-logo-fill">${SUGER_LOGO_SVG}</div>
    </div>`;
}

function renderTopic(topic, number, nlDate, isFeatured = false) {
  const isEducational = topic.contentType === "educational";
  const badgeHtml = isEducational
    ? `<span class="content-type-badge content-type-badge--edu">Deep dive</span>`
    : `<span class="content-type-badge content-type-badge--news">What's new${nlDate ? ` · ${nlDate}` : ""}</span>`;
  const numHtml = number
    ? `<span class="topic-num">${String(number).padStart(2, "0")}</span>`
    : "";
  return `
    <article class="topic${isFeatured ? " topic--featured" : ""}" id="${topic.id}">
      <div class="topic-eyebrow">
        ${numHtml}
        <div class="topic-tags">
          ${topic.tags
            .map((tagId) => {
              const m = tagMeta[tagId] || {};
              return `<span class="tag-pill" style="background:${m.badgeBg};color:${m.badgeText}">${m.label || tagId}</span>`;
            })
            .join("")}
        </div>
        ${badgeHtml}
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

function renderOnboarding() {
  return `
    <div id="onboarding" class="onboarding-overlay">
      <div class="onb-inner">
        <div class="onb-step active" id="onb-step1">
          <div class="onb-eyebrow">Suger Cube</div>
          <h2 class="onb-title">Cloud Marketplace,<br><em>Decoded.</em></h2>
          <p class="onb-sub">Monthly intelligence on cloud marketplace changes, co-sell mechanics, and what matters for your deals.</p>
          <button class="onb-btn" onclick="onbGoStep(2)">Get started →</button>
        </div>
        <div class="onb-step" id="onb-step2">
          <div class="onb-eyebrow">Personalize your feed</div>
          <h2 class="onb-title onb-title--sm">How do you use the marketplace?</h2>
          <p class="onb-sub onb-sub--sm">Your feed order adjusts to your mode. You can switch anytime.</p>
          <div class="onb-personas">
            <button class="onb-persona" id="onb-card-explorer" onclick="onbSelectPersona('explorer',this)">
              <div class="persona-icon icon-explorer">🧭</div>
              <div class="persona-name explorer-name">The Explorer</div>
              <div class="persona-tagline">Learning · Building a foundation</div>
              <div class="persona-desc">I'm mapping the territory — learning how marketplace selling works, what the policies mean, and how to think about deals.</div>
            </button>
            <button class="onb-persona" id="onb-card-tracker" onclick="onbSelectPersona('tracker',this)">
              <div class="persona-icon icon-tracker">📡</div>
              <div class="persona-name tracker-name">The Tracker</div>
              <div class="persona-tagline">Active · Monitoring signals</div>
              <div class="persona-desc">I'm already selling. I need to know what changed, when it changed, and how it affects my active deals.</div>
            </button>
          </div>
          <button class="onb-btn" id="onb-continue-btn" onclick="onbEnterApp()" disabled>Enter my feed →</button>
          <button class="onb-skip" onclick="onbSkip()">Skip personalization</button>
        </div>
      </div>
    </div>`;
}

function renderSectionLabel(text, count) {
  return `
    <div class="section-label">
      <span class="section-label-text">${text}</span>
      <span class="section-label-line"></span>
      ${count ? `<span class="section-label-count">${count}</span>` : ""}
    </div>`;
}

function renderNewsCard(topic, isFeatured, nlDate) {
  const hsCount = (topic.hyperscalers || []).length;
  const dotsCount = isFeatured ? 5 : Math.min(hsCount + 2, 4);
  const dots = Array.from({ length: 5 }, (_, i) =>
    `<span class="rel-dot${i < dotsCount ? " filled" : ""}"></span>`,
  ).join("");
  const tagsHtml = (topic.tags || [])
    .map((tagId) => {
      const m = tagMeta[tagId] || {};
      return `<span class="card-tag-badge" style="background:${m.badgeBg};color:${m.badgeText}">${m.label || tagId}</span>`;
    })
    .join("");
  const typeBadge = `<span class="card-type-badge badge-news">New</span>`;
  const preview =
    (topic.intro || "").slice(0, 150) +
    ((topic.intro || "").length > 150 ? "…" : "");
  const tagsAttr = (topic.tags || []).join(" ");

  const activeNl = newsletters.find((n) => n.id === activeNewsletterId);
  const href = activeNl ? `editions/${editionFileName(activeNl)}#${topic.id}` : "#";

  return `
    <a class="card${isFeatured ? " card-featured" : ""}" href="${href}" data-tags="${tagsAttr}">
      <div class="card-badges">${tagsHtml}${typeBadge}</div>
      <h3 class="card-title">${topic.title}</h3>
      <p class="card-preview">${preview}</p>
      <div class="card-footer">
        <span class="card-ts">${nlDate}</span>
        <span class="relevancy" aria-label="Relevance ${dotsCount} of 5">${dots}</span>
        <span class="card-cta">Read more</span>
      </div>
    </a>`;
}

function renderDeepDiveCard(topic, nlDate) {
  const tagsHtml = (topic.tags || [])
    .map((tagId) => {
      const m = tagMeta[tagId] || {};
      return `<span class="card-tag-badge" style="background:${m.badgeBg};color:${m.badgeText}">${m.label || tagId}</span>`;
    })
    .join("");
  const preview =
    (topic.intro || "").slice(0, 200) +
    ((topic.intro || "").length > 200 ? "…" : "");
  const tagsAttr = (topic.tags || []).join(" ");
  const activeNl = newsletters.find((n) => n.id === activeNewsletterId);
  const href = activeNl ? `editions/${editionFileName(activeNl)}#${topic.id}` : "#";
  return `
    <a class="card card--deepdive" href="${href}" data-tags="${tagsAttr}">
      <div class="card-badges">
        ${tagsHtml}
        <span class="card-type-badge badge-edu">Guide</span>
      </div>
      <h3 class="card-title">${topic.title}</h3>
      <p class="card-preview">${preview}</p>
      <div class="card-footer">
        <span class="card-ts">${nlDate}</span>
        <span class="card-cta">Full analysis</span>
      </div>
    </a>`;
}

function renderCardFeed(nl, news, educational) {
  const allTopics = [...news, ...educational];
  const allTags = [...new Set(allTopics.flatMap((t) => t.tags || []))];

  const domainFiltersHtml =
    allTags.length > 1
      ? `<div class="domain-filters" role="group" aria-label="Filter by hyperscaler">
        <button type="button" class="df-btn active" onclick="nlFilterDomain('all',this)" aria-pressed="true">All</button>
        ${allTags
          .map((tagId) => {
            const m = tagMeta[tagId] || {};
            return `<button type="button" class="df-btn" onclick="nlFilterDomain('${tagId}',this)" aria-pressed="false">${m.label || tagId}</button>`;
          })
          .join("")}
      </div>`
      : "";

  let newsSectionHtml = "";
  if (news.length > 0) {
    const orderedNews = news.some((t) => t.featured)
      ? [
          ...news.filter((t) => t.featured),
          ...news.filter((t) => !t.featured),
        ]
      : news;
    newsSectionHtml = `
      <div id="card-section-news" class="card-section">
        ${renderSectionLabel("What's new", `${news.length} update${news.length !== 1 ? "s" : ""}`)}
        ${domainFiltersHtml}
        <div class="cards-grid" id="news-grid">
          ${orderedNews.map((t) => renderNewsCard(t, t.featured === true, nl.date)).join("")}
        </div>
      </div>`;
  }

  let eduSectionHtml = "";
  if (educational.length > 0) {
    eduSectionHtml = `
      <div id="card-section-edu" class="card-section">
        ${renderSectionLabel("Deep dive")}
        <div class="cards-grid" id="edu-grid">
          ${educational.map((t) => renderDeepDiveCard(t, nl.date)).join("")}
        </div>
      </div>`;
  }

  return `
    <div class="card-feed">
      <div id="card-feed-sections">
        ${newsSectionHtml}
        ${eduSectionHtml}
      </div>
      ${renderQuickLinks()}
    </div>`;
}

function renderQuickLinks() {
  return `
    <div class="section-label section-label--quicklinks">
      <span class="section-label-text">Quick links</span>
      <span class="section-label-line"></span>
    </div>
    <div class="quicklinks">
      <a class="ql-item" href="#" onclick="toggleGlossary();return false;">
        <div class="ql-icon">📖</div>
        <div class="ql-label">Marketplace Glossary</div>
        <div class="ql-desc">Searchable definitions for marketplace terms</div>
      </a>
      <a class="ql-item" href="https://doc.suger.io/" target="_blank" rel="noopener noreferrer">
        <div class="ql-icon">📋</div>
        <div class="ql-label">Suger Docs</div>
        <div class="ql-desc">Integration guides and API references</div>
      </a>
      <a class="ql-item" href="https://www.suger.io/blog" target="_blank" rel="noopener noreferrer">
        <div class="ql-icon">✍️</div>
        <div class="ql-label">Suger Blog</div>
        <div class="ql-desc">Product updates, marketplace insights, and guides</div>
      </a>
    </div>`;
}
