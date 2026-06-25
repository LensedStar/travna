// ContactForm.jsx — React island for the Contact inquiry form (TASK-022).
//
// Netlify Forms (no backend): the form posts to Netlify, which emails Webline (notifications are
// configured in Netlify, not in code). The form markup is rendered to static HTML by Astro at build
// time, so Netlify's build-time form detection picks it up (data-netlify + a hidden form-name field).
//
// Fields: Name (required), Email (required), Phone (optional), Check-in / Check-out (optional),
// Message (optional), plus a REQUIRED privacy-consent checkbox.
//
// Client-side validation runs before submission; if anything is invalid we preventDefault and show
// inline messages. When valid, the native POST goes to Netlify and redirects to /thank-you/
// (method POST → no PII in the URL query string). Spam is filtered by a CSS-hidden honeypot field.
//
// All visible strings come from the i18n dictionary and are passed in as a `strings` object by the
// .astro caller (no hardcoded copy here). Styling lives in src/styles/blocks/_contact.scss.

import { useState } from 'react';

// Form name is the Netlify submission bucket (Phase 1: single EN form).
const FORM_NAME = 'contact-en';

// Simple, permissive email shape check (real validation happens server-side at Netlify).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({ strings = {} }) {
  const [errors, setErrors] = useState({});

  const validate = (form) => {
    const next = {};
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const consent = form.elements.consent.checked;

    if (!name) next.name = strings.required;
    if (!email) next.email = strings.required;
    else if (!EMAIL_RE.test(email)) next.email = strings.invalidEmail;
    if (!consent) next.consent = strings.consentRequired;

    return next;
  };

  const handleSubmit = (e) => {
    const next = validate(e.currentTarget);
    if (Object.keys(next).length > 0) {
      e.preventDefault(); // block submission; native POST + /thank-you/ redirect only when valid
      setErrors(next);
      const firstInvalid = e.currentTarget.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
    }
  };

  const errorId = (field) => (errors[field] ? `contact-${field}-error` : undefined);

  return (
    <form
      className="contact-form"
      name={FORM_NAME}
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
    >
      {/* Netlify needs this hidden field to associate the POST with the right form. */}
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot — hidden via CSS (NOT type=hidden); bots fill it, humans don't. */}
      <p className="contact-form__honeypot" aria-hidden="true">
        <label>
          {strings.honeypot}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-name">
          {strings.name} <span className="contact-form__req" aria-hidden="true">*</span>
        </label>
        <input
          className="contact-form__input"
          id="contact-name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errorId('name')}
        />
        {errors.name && (
          <span className="contact-form__error" id="contact-name-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-email">
          {strings.email} <span className="contact-form__req" aria-hidden="true">*</span>
        </label>
        <input
          className="contact-form__input"
          id="contact-email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errorId('email')}
        />
        {errors.email && (
          <span className="contact-form__error" id="contact-email-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-phone">
          {strings.phone}
        </label>
        <input className="contact-form__input" id="contact-phone" name="phone" type="tel" />
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="contact-checkin">
            {strings.checkin}
          </label>
          <input className="contact-form__input" id="contact-checkin" name="checkin" type="date" />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="contact-checkout">
            {strings.checkout}
          </label>
          <input className="contact-form__input" id="contact-checkout" name="checkout" type="date" />
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">
          {strings.message}
        </label>
        <textarea className="contact-form__textarea" id="contact-message" name="message" rows={5}></textarea>
      </div>

      <div className="contact-form__field contact-form__field--consent">
        <label className="contact-form__consent" htmlFor="contact-consent">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={errors.consent ? 'true' : undefined}
            aria-describedby={errorId('consent')}
          />
          <span>
            {strings.consent} <span className="contact-form__req" aria-hidden="true">*</span>
          </span>
        </label>
        {errors.consent && (
          <span className="contact-form__error" id="contact-consent-error" role="alert">
            {errors.consent}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn--primary contact-form__submit">
        {strings.submit}
      </button>
    </form>
  );
}
