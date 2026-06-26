// LanguageSwitcher.jsx — React island for the header language dropdown (TASK-011).
//
// i18n stub — non-functional in Phase 1. The site ships English only; selecting SI/RU does NOT
// change content. This is an intentional UI placeholder, wired so a later phase can make it active
// by enabling the locales in src/i18n/index.ts and routing in astro.config.mjs — no rewrite here.
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

  // Move focus between option buttons with Up/Down arrows (keyboard accessibility).
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

  // i18n stub — selecting an option does NOT change content in Phase 1; just close the menu.
  const onSelect = () => {
    setOpen(false);
    buttonRef.current?.focus();
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
              <button
                type="button"
                className="language-switcher__option"
                role="menuitem"
                onClick={onSelect}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
