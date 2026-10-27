(function () {
  'use strict';

  // Menú móvil
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('site-nav');

  if (toggle && nav) {
    function setMenu(open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Cerrar' : 'Menú';
    }

    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });

    document.addEventListener('click', function (event) {
      if (!nav.classList.contains('open')) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setMenu(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) setMenu(false);
    });
  }

  // Año
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
