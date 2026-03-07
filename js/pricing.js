/**
 * FurBuddy — Pricing page: Monthly / Annual toggle
 */

(function () {
  'use strict';

  var toggle = document.getElementById('pricing-toggle');
  var labelMonthly = document.getElementById('label-monthly');
  var labelAnnual = document.getElementById('label-annual');

  if (!toggle) return;

  function setAnnual(isAnnual) {
    toggle.classList.toggle('annual', isAnnual);
    toggle.setAttribute('aria-pressed', isAnnual ? 'true' : 'false');
    if (labelMonthly) labelMonthly.style.fontWeight = isAnnual ? '400' : '600';
    if (labelAnnual) labelAnnual.style.fontWeight = isAnnual ? '600' : '400';

    document.querySelectorAll('.pricing-card .price').forEach(function (el) {
      var monthly = el.getAttribute('data-monthly');
      var annual = el.getAttribute('data-annual');
      if (monthly != null && annual != null) {
        el.textContent = isAnnual ? annual : monthly;
      }
    });

    document.querySelectorAll('.price-note-monthly').forEach(function (el) {
      el.style.display = isAnnual ? 'none' : 'block';
    });
    document.querySelectorAll('.price-note-annual').forEach(function (el) {
      el.style.display = isAnnual ? 'block' : 'none';
    });
  }

  toggle.addEventListener('click', function () {
    var isAnnual = toggle.classList.contains('annual');
    setAnnual(!isAnnual);
  });

  setAnnual(false);
})();
