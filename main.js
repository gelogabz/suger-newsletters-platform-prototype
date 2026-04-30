const topicMap = {};
let activeNewsletterId;

document.addEventListener('DOMContentLoaded', () => {
  topics.forEach(t => topicMap[t.id] = t);
  activeNewsletterId = newsletters[0].id;
  document.getElementById('app').innerHTML = renderLayout();
  initScrollListener();
});

function selectNewsletter(id) {
  if (id === activeNewsletterId) return;
  activeNewsletterId = id;

  closeGlossary();

  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });

  document.querySelectorAll('.sidebar-topics').forEach(el => {
    el.classList.toggle('visible', el.dataset.nl === id);
  });

  const nl = newsletters.find(n => n.id === id);
  const main = document.getElementById('main-content');
  main.innerHTML = renderNewsletterContent(nl);
  main.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToTopic(newsletterId, topicId) {
  if (newsletterId !== activeNewsletterId) {
    selectNewsletter(newsletterId);
    setTimeout(() => scrollToTopic(topicId), 80);
  } else {
    scrollToTopic(topicId);
  }
}

function scrollToTopic(topicId) {
  const el = document.getElementById(topicId);
  const main = document.getElementById('main-content');
  if (!el || !main) return;
  const offset = el.getBoundingClientRect().top - main.getBoundingClientRect().top;
  main.scrollBy({ top: offset - 24, behavior: 'smooth' });
}

function initScrollListener() {
  const main = document.getElementById('main-content');
  if (!main) return;
  main.addEventListener('scroll', () => {
    const btn = document.getElementById('back-to-top');
    if (btn) btn.classList.toggle('visible', main.scrollTop > 300);
  });
}

function scrollMainToTop() {
  document.getElementById('main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
}

function smoothScrollTo(event, id) {
  event.preventDefault();
  const el = document.getElementById(id);
  const main = document.getElementById('main-content');
  if (!el || !main) return;
  const offset = el.getBoundingClientRect().top - main.getBoundingClientRect().top;
  main.scrollBy({ top: offset - 24, behavior: 'smooth' });
}

function toggleGlossary() {
  const panel = document.getElementById('glossary-panel');
  const btn = document.getElementById('glossary-btn');
  const iframe = document.getElementById('glossary-iframe');
  if (!panel || !btn) return;

  const isOpen = panel.classList.toggle('open');
  btn.classList.toggle('active', isOpen);

  if (isOpen && iframe && !iframe.src) {
    iframe.src = 'https://gelogabz.github.io/marketplaceglossary-prototype-gelobaring/';
  }
}

function closeGlossary() {
  document.getElementById('glossary-panel')?.classList.remove('open');
  document.getElementById('glossary-btn')?.classList.remove('active');
}
