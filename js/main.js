/**
 * FurBuddy — Global JS: Navbar, mobile menu, scroll, cookie banner, FAQ
 */

(function () {
  'use strict';

  // ——— Navbar scroll shadow ———
  var navbar = document.getElementById('navbar');
  if (navbar) {
    function onScroll() {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ——— Mobile menu (hamburger + drawer) ———
  var hamburger = document.getElementById('hamburger');
  var drawer = document.getElementById('nav-drawer');
  var overlay = document.getElementById('drawer-overlay');

  function openDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.add('open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    if (hamburger) {
      hamburger.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !overlay) return;
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    if (hamburger) {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
    }
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (drawer && drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeDrawer);
    });
  }

  // ——— Smooth scroll for anchor links (e.g. "See How It Works") ———
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ——— Cookie banner ———
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');
  var cookieKey = 'furbuddy_cookie_consent';

  function hideCookieBanner() {
    if (cookieBanner) {
      cookieBanner.classList.remove('show');
    }
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', function () {
      try {
        localStorage.setItem(cookieKey, 'accepted');
      } catch (e) {}
      hideCookieBanner();
    });
  }

  if (cookieBanner) {
    try {
      if (localStorage.getItem(cookieKey) === 'accepted') {
        hideCookieBanner();
      } else {
        cookieBanner.classList.add('show');
      }
    } catch (e) {
      cookieBanner.classList.add('show');
    }
  }

  // ——— FAQ accordion (pricing page) ———
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('button');
    var content = item.querySelector('.content');
    if (!btn || !content) return;

    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (other) {
        other.classList.remove('open');
        var otherBtn = other.querySelector('button');
        var otherContent = other.querySelector('.content');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        if (otherContent) otherContent.style.maxHeight = '';
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
})();
