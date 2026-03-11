/**
 * FurBuddy — Contact form: validation, loading state, success message
 * Email signup: submits to Google Forms (target=iframe), then shows success message
 */

(function () {
  'use strict';

  // ----- Email collector (Google Forms) -----
  var emailSignupForm = document.getElementById('email-signup-form');
  var emailSignupSuccess = document.getElementById('email-signup-success');
  var emailCollectorSection = emailSignupForm && emailSignupForm.closest('.email-collector');

  if (emailSignupForm && emailSignupSuccess && emailCollectorSection) {
    emailSignupForm.addEventListener('submit', function () {
      // Form POSTs to Google Forms in target iframe; show success after a short delay
      setTimeout(function () {
        emailSignupSuccess.hidden = false;
        emailCollectorSection.classList.add('form-submitted');
      }, 800);
    });
  }

  // ----- Main contact form -----
  var form = document.getElementById('contact-form');
  var wrap = document.getElementById('contact-form-wrap');
  var successEl = document.getElementById('success-message');
  var submitBtn = document.getElementById('submit-btn');

  var errors = {
    name: document.getElementById('error-name'),
    email: document.getElementById('error-email'),
    subject: document.getElementById('error-subject'),
    message: document.getElementById('error-message')
  };

  function showError(field, message) {
    var el = errors[field];
    if (el) {
      el.textContent = message;
      el.style.display = message ? 'block' : 'none';
    }
  }

  function clearErrors() {
    Object.keys(errors).forEach(function (key) {
      showError(key, '');
    });
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var name = (form.name && form.name.value || '').trim();
    var email = (form.email && form.email.value || '').trim();
    var subject = form.subject && form.subject.value;
    var message = (form.message && form.message.value || '').trim();

    var valid = true;
    if (!name) {
      showError('name', 'Please enter your name.');
      valid = false;
    }
    if (!email) {
      showError('email', 'Please enter your email.');
      valid = false;
    } else if (!validateEmail(email)) {
      showError('email', 'Please enter a valid email address.');
      valid = false;
    }
    if (!subject) {
      showError('subject', 'Please select a subject.');
      valid = false;
    }
    if (message.length < 20) {
      showError('message', 'Message must be at least 20 characters.');
      valid = false;
    }

    if (!valid) return;

    // Loading state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
      submitBtn.innerHTML = '<span class="spinner"></span> Sending...';
    }

    // Simulate submit (replace with EmailJS or real API in production)
    setTimeout(function () {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.classList.remove('btn-loading');
        submitBtn.innerHTML = 'Send Message →';
      }
      if (wrap) wrap.classList.add('submitted');
      if (successEl) successEl.classList.add('show');
    }, 1200);
  });
})();
