// Landing-page navigation. Links remain available if JavaScript is disabled.
const siteHeader = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');
if (siteHeader && navToggle && siteNav) {
  siteHeader.classList.add('nav-ready');
  const setOpen = (open) => {
    siteNav.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };
  navToggle.addEventListener('click', () => setOpen(navToggle.getAttribute('aria-expanded') !== 'true'));
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      navToggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!siteHeader.contains(event.target)) setOpen(false);
  });
  window.matchMedia('(min-width: 761px)').addEventListener('change', () => setOpen(false));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
