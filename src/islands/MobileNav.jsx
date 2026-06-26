// MobileNav.jsx — React island for the mobile burger navigation (TASK-012).
//
// Shown only on small screens (the desktop nav is hidden via CSS at the same breakpoint).
// Opens a full-screen panel with the same nav items as the desktop header plus the Book CTA.
// Behaviour: toggle open/close, lock body scroll while open, focus-trap inside the panel,
// close on Escape and on overlay click, aria-expanded on the trigger.
//
// All visible copy comes from the i18n dictionary and is passed in as props by the .astro caller
// (no hardcoded strings here). Styling lives in src/styles/blocks/_mobile-nav.scss.

import { useEffect, useRef, useState } from 'react';

export default function MobileNav({
  links,
  bookHref,
  bookLabel,
  openLabel,
  closeLabel,
  navLabel,
}) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    // Lock body scroll while the panel is open; restore the previous value on close.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the panel (first focusable element).
    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        ) ?? []
      );
    focusables()[0]?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      // Focus trap: keep Tab cycling inside the panel.
      if (event.key === 'Tab') {
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={open ? closeLabel : openLabel}
        ref={triggerRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="mobile-nav__burger" aria-hidden="true">
          <span className="mobile-nav__bar"></span>
          <span className="mobile-nav__bar"></span>
          <span className="mobile-nav__bar"></span>
        </span>
      </button>

      {open && (
        <div className="mobile-nav__overlay" onClick={close}>
          <nav
            className="mobile-nav__panel"
            aria-label={navLabel}
            ref={panelRef}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="mobile-nav__close"
              aria-label={closeLabel}
              onClick={close}
            >
              <span className="mobile-nav__close-icon" aria-hidden="true">×</span>
            </button>

            <ul className="mobile-nav__list">
              {links.map((link) => (
                <li key={link.href} className="mobile-nav__item">
                  <a className="mobile-nav__link" href={link.href} onClick={close}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="btn btn--primary mobile-nav__book"
              href={bookHref}
              onClick={close}
            >
              {bookLabel}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
