import type {
  CommerceProviderConfig,
  ContactConfig,
  NewsletterConfig,
} from '../types/store';

/**
 * External checkout & digital product delivery configuration.
 *
 * Replace `null` values with live HTTPS checkout URLs from your external provider
 * (e.g., Razorpay Payment Pages, Lemon Squeezy, Gumroad, or Cosmofeed) and set
 * `checkoutConfigured` / `deliveryConfigured` to `true` once connected.
 *
 * Paid download assets must live behind your digital delivery provider, never in
 * unrestricted public static directories.
 */
export const COMMERCE_CONFIG: CommerceProviderConfig = {
  providerName: null,
  checkoutConfigured: false,
  deliveryConfigured: false,
  productCheckoutUrls: {
    'creator-starter-kit': null,
    'creator-media-kit-pack': null,
    'freelance-editor-toolkit': null,
    'freelance-launch-pack': null,
    'college-event-organiser-kit': null,
    'internship-application-toolkit': null,
  },
  bundleCheckoutUrls: {
    'creator-essentials-bundle': null,
    'freelancer-bundle': null,
    'campus-organiser-bundle': null,
  },
};

/**
 * Optional newsletter integration configuration.
 * Keep `configured: false` until connected to a real email provider form endpoint.
 */
export const NEWSLETTER_CONFIG: NewsletterConfig = {
  configured: false,
  providerName: null,
  actionUrl: null,
};

/**
 * Contact & support expectations configuration.
 * Replace the placeholder support address with your production domain inbox before launch.
 */
export const CONTACT_CONFIG: ContactConfig = {
  supportEmail: 'support@readyset-kits.example',
  emailIsPlaceholder: true,
  responseWindow: 'Within 1–2 business days (Monday to Friday)',
  supportHours: '10:00 AM – 6:00 PM IST',
};

export const STORE_META = {
  brandName: 'ReadySet',
  tagline: 'Everything you need. Nothing you need to figure out.',
  currencySymbol: '₹',
  currencyCode: 'INR',
};
