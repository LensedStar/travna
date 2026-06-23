// Shared i18n types. Keeping the key type here (derived from the EN dictionary) lets every
// future locale dictionary be checked against the SAME key set without circular imports.
import type { en } from './en';

// The canonical set of UI string keys. Other locale dictionaries must satisfy this shape.
export type UIKey = keyof typeof en;

// The dictionary shape every locale file must implement (same keys → no missing translations).
export type UIDict = Record<UIKey, string>;
