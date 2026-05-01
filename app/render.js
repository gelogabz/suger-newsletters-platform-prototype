function renderLayout() {
  const first = newsletters[0];
  return `
    <header class="masthead">
      <div class="masthead-brand">
        <span class="masthead-dot"></span>
        <span class="masthead-wordmark">Suger Rush</span>
        <span class="masthead-sep"></span>
        <span class="masthead-by">Marketplace intelligence, refined.</span>
      </div>
    </header>
    <div class="layout">
      <aside class="sidebar">
        <div class="sidebar-label">Newsletters</div>
        ${newsletters.map((nl, i) => {
          const isActive = i === 0;
          const nlTopics = nl.topicIds.map(id => topicMap[id]).filter(Boolean);
          return `
          <button class="sidebar-item${isActive ? ' active' : ''}" data-id="${nl.id}" onclick="selectNewsletter('${nl.id}')">
            <div class="sidebar-date">${nl.date}</div>
            <div class="sidebar-title">${nl.title}</div>
          </button>
          <div class="sidebar-topics${isActive ? ' visible' : ''}" data-nl="${nl.id}">
            ${nlTopics.map((t, ti) => `
              <button class="sidebar-topic-item" onclick="navigateToTopic('${nl.id}','${t.id}')">
                <span class="sidebar-topic-num">${String(ti + 1).padStart(2, '0')}</span>
                <span class="sidebar-topic-label">${t.title}</span>
              </button>`).join('')}
          </div>`;
        }).join('')}
      </aside>
      <main class="main" id="main-content">
        ${renderNewsletterContent(first)}
      </main>
    </div>
    <div class="glossary-panel" id="glossary-panel">
      <div class="glossary-panel-header">
        <span class="glossary-panel-title">Marketplace Glossary</span>
        <button class="glossary-close" onclick="toggleGlossary()" aria-label="Close glossary">&times;</button>
      </div>
      <iframe id="glossary-iframe" class="glossary-iframe" src="https://gelogabz.github.io/marketplaceglossary-prototype-gelobaring/" title="Marketplace Glossary"></iframe>
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
