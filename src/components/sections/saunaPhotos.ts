// saunaPhotos.ts — the sauna's photo set, shared by the Sauna block (Apartments and Activities
// pages) and the sauna row of the landing (/social), so every place shows the same photos.
//
// The files are public/images/sauna/sauna-01.webp, -02, … in the order of this list, each with a
// thumbnail in sauna/thumbs/ (scripts/make-image-derivatives.mjs). An entry is the dictionary key
// of that photo's alt text — to add a photo, add the next numbered file and its key here.
import type { UIKey } from '../../i18n/types';

const alts: UIKey[] = [
  'sauna.photo.room',
  'sauna.photo.benches',
  'sauna.photo.stove',
  'sauna.photo.door',
  'sauna.photo.shower',
  'sauna.photo.lounge',
  'sauna.photo.table',
  'sauna.photo.terrace',
  'sauna.photo.tub',
  'sauna.photo.chairs',
  'sauna.photo.view',
  'sauna.photo.exterior',
  'sauna.photo.evening',
];

export function saunaPhotos(t: (key: UIKey) => string) {
  return alts.map((key, index) => {
    const name = `sauna-${String(index + 1).padStart(2, '0')}`;
    return {
      src: `/images/sauna/${name}.webp`,
      thumb: `/images/sauna/thumbs/${name}.webp`,
      alt: t(key),
    };
  });
}
