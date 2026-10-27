// contactPhones.ts — the property's phone numbers as one list (label, number, tel: href), so the
// Contact page, the "Finding us" block, the landing and the JSON-LD all show the same numbers in the
// same order. The numbers and labels live in the i18n dictionary; the hrefs are derived from them.
import type { UIKey } from '../../i18n/types';

export function contactPhones(t: (key: UIKey) => string) {
  return [
    { label: t('footer.contact.landlineLabel'), number: t('footer.contact.landline') },
    { label: t('footer.contact.mobileLabel'), number: t('footer.contact.mobile1') },
    { label: t('footer.contact.mobileLabel'), number: t('footer.contact.mobile2') },
  ].map((phone) => ({ ...phone, href: `tel:${phone.number.replace(/[^\d+]/g, '')}` }));
}
