// LanguageSwitcher.jsx — React island for the header language dropdown (TASK-011).
//
// Functional: each option is a link to the SAME page in another locale, built by the .astro caller
// with localizePath (the island has no access to Astro.currentLocale). The trigger shows the code
// of the locale currently being viewed.
//
// All visible copy comes from the i18n dictionary and is passed in as props by the .astro caller
// (no hardcoded strings here). Styling lives in src/styles/blocks/_language-switcher.scss.

import { useEffect, useRef, useState } from 'react';

export default function LanguageSwitcher({ currentLabel, menuLabel, options }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    // Close on outside click and on Escape (returning focus to the trigger).
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  // Move focus between options with Up/Down arrows (keyboard accessibility).
  const onMenuKeyDown = (event) => {
    const items = Array.from(
      rootRef.current?.querySelectorAll('.language-switcher__option') ?? []
    );
    const currentIndex = items.indexOf(document.activeElement);
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      items[(currentIndex + 1) % items.length]?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }
  };

  return (
    <div className="language-switcher" ref={rootRef}>
      <button
        type="button"
        className="language-switcher__toggle"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={menuLabel}
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="language-switcher__current">{currentLabel}</span>
        <span className="language-switcher__caret" aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul className="language-switcher__menu" role="menu" onKeyDown={onMenuKeyDown}>
          {options.map((option) => (
            <li key={option.code} role="none">
              {/* A plain link: navigating to the localized URL is what switches the language,
                  so the switcher keeps working without JS once the island has rendered. */}
              <a
                className="language-switcher__option"
                role="menuitem"
                href={option.href}
                hrefLang={option.code}
                aria-current={option.current ? 'true' : undefined}
                onClick={() => setOpen(false)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
