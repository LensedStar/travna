// landingGoal.ts — the single source of truth for the landing's (/social) conversion goal.
//
// Every call-to-action on the landing — the hero and the buttons inside the sections — reads
// its target, label and tracking marker from here, so the goal is changed in ONE place:
//   1. add an entry to `landingGoals` (e.g. `inquiry` -> an inquiry form, `offer` -> an offer capture),
//   2. point `activeLandingGoal` at it,
//   3. render the section that fulfils it at `#<anchor>` in src/pages/[...lang]/social.astro.
// No CTA markup changes.
import type { UIKey } from '../../i18n/types';

interface LandingGoalConfig {
  // id of the section on the landing that fulfils the goal — the CTAs scroll to it.
  anchor: string;
  // Dictionary key of the CTA label.
  labelKey: UIKey;
  // Emitted as `data-conversion` on every CTA — the hook for campaign tracking (GA4 / Meta Pixel).
  conversion: string;
}

export const landingGoals = {
  // Booking: the Bentral reservation widget closes the landing itself, so the CTAs stay on the page.
  booking: {
    anchor: 'reservation',
    labelKey: 'lp.cta',
    conversion: 'booking',
  },
} as const satisfies Record<string, LandingGoalConfig>;

export type LandingGoal = keyof typeof landingGoals;

export const activeLandingGoal: LandingGoal = 'booking';
