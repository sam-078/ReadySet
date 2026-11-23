export type ShopCategory = 'all' | 'creators' | 'freelancers' | 'students' | 'events';

export type CollectionSlug = 'creators' | 'freelancers' | 'students-events';

export type SortOption = 'featured' | 'price-asc' | 'price-desc';

export type MockupKind =
  | 'creator-starter'
  | 'creator-media-kit'
  | 'freelance-editor'
  | 'freelance-launch'
  | 'college-event'
  | 'internship-toolkit';

export interface ProductPreviewSlide {
  id: string;
  label: string;
  title: string;
  caption: string;
  variant: 'overview' | 'spreadsheet' | 'checklist' | 'studio';
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  priceInr: number;
  categoryLabel: string;
  filterCategories: Exclude<ShopCategory, 'all'>[];
  collectionSlug: CollectionSlug;
  shortDescription: string;
  fullDescription: string;
  includes: string[];
  whoIsItFor: string[];
  softwareRequirements: string[];
  formats: string[];
  mockupKind: MockupKind;
  studioImagePath: string;
  studioImageAlt: string;
  previewSlides: ProductPreviewSlide[];
  faqs: ProductFAQ[];
  featuredOrder: number;
}

export interface Collection {
  slug: CollectionSlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  accentTheme: 'cobalt' | 'lime' | 'orange';
  imagePath: string;
  imageAlt: string;
  audienceHighlights: string[];
}

export interface BundleConfig {
  id: string;
  slug: string;
  name: string;
  description: string;
  productIds: string[];
  bundlePriceInr: number;
  accentTheme: 'cobalt' | 'lime' | 'orange';
}

export interface BundleWithMetrics extends BundleConfig {
  products: Product[];
  individualTotalInr: number;
  savingsInr: number;
  savingsPercent: number;
  hasValidSavings: boolean;
}

export interface CommerceProviderConfig {
  providerName: string | null;
  checkoutConfigured: boolean;
  deliveryConfigured: boolean;
  productCheckoutUrls: Record<string, string | null>;
  bundleCheckoutUrls: Record<string, string | null>;
}

export interface NewsletterConfig {
  configured: boolean;
  providerName: string | null;
  actionUrl: string | null;
}

export interface ContactConfig {
  supportEmail: string;
  emailIsPlaceholder: boolean;
  responseWindow: string;
  supportHours: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Delivery & Files' | 'Usage & Editing' | 'Orders & Refunds';
}
