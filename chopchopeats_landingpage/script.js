(function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-nav');

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) { closeMenu(); return; }
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    menu.classList.add('is-open');
    document.body.classList.add('menu-open');
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  const storeSection = document.querySelector('.store-links');
  const headerCta = document.querySelector('.nav-cta');
  const header = document.querySelector('.site-header');
  const updateHeaderCta = () => {
    if (!storeSection || !headerCta || !header) return;
    const shouldShow = storeSection.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom + 8;
    headerCta.classList.toggle('is-visible', shouldShow);
  };
  let scrollTicking = false;
  const scheduleHeaderUpdate = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(() => { updateHeaderCta(); scrollTicking = false; });
  };
  window.addEventListener('scroll', scheduleHeaderUpdate, { passive: true });
  window.addEventListener('resize', updateHeaderCta);
  updateHeaderCta();
  if (headerCta) headerCta.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.querySelectorAll('[data-image-src]').forEach((slot) => {
    const image = new Image();
    image.onload = () => {
      image.src = slot.dataset.imageSrc;
      image.alt = slot.dataset.imageAlt || '';
      slot.replaceChildren(image);
      slot.classList.add('is-loaded');
      if (slot.classList.contains('app-visual-asset')) slot.closest('.hero-visual').classList.add('has-app-preview');
    };
    image.src = slot.dataset.imageSrc;
  });

  const scrollToDownload = () => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  document.querySelectorAll('.chef-card, .top-cooks > div').forEach((item) => {
    item.classList.add('download-on-click');
    item.setAttribute('role', 'link');
    item.setAttribute('tabindex', '0');
    item.addEventListener('click', scrollToDownload);
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); scrollToDownload(); }
    });
  });
}());
