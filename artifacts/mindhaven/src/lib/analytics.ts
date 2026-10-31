type AnalyticsData = Record<string, string | number | boolean>;

export type SignupPath = 'homepage' | 'guida' | 'sonno' | 'respiro' | 'focus';
export type SignupPosition =
  | 'homepage_header'
  | 'homepage_mobile_menu'
  | 'homepage_hero'
  | 'homepage_funnel'
  | 'guide_section'
  | 'intent_membership';

declare global {
  interface Window {
    umami?: {
      track(name: string, data?: AnalyticsData): void;
    };
  }
}

function trackEvent(name: string, data?: AnalyticsData): void {
  if (typeof window === 'undefined') return;

  try {
    window.umami?.track(name, data);
  } catch {
    // Analytics must never break the signup flow.
  }
}

export function trackSignupCtaClick(path: SignupPath, position: SignupPosition): void {
  trackEvent('signup_cta_click', { path, position });
}
