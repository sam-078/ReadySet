import test from 'node:test';
import assert from 'node:assert/strict';
import { BUNDLES, PRODUCTS } from '../data/products';
import { COMMERCE_CONFIG } from '../config/commerce';
import {
  computeBundleMetrics,
  filterAndSortProducts,
  formatInr,
  getRelatedProducts,
  resolveItemCheckout,
} from './catalog';

test('filters products accurately across all categories including Students and Events overlap', () => {
  const all = filterAndSortProducts({
    products: PRODUCTS,
    category: 'all',
    searchQuery: '',
    sort: 'featured',
  });
  assert.equal(all.length, 6);

  const creators = filterAndSortProducts({
    products: PRODUCTS,
    category: 'creators',
    searchQuery: '',
    sort: 'featured',
  });
  assert.deepEqual(
    creators.map((p) => p.id),
    ['creator-starter-kit', 'creator-media-kit-pack']
  );

  const students = filterAndSortProducts({
    products: PRODUCTS,
    category: 'students',
    searchQuery: '',
    sort: 'featured',
  });
  assert.deepEqual(
    students.map((p) => p.id),
    ['college-event-organiser-kit', 'internship-application-toolkit']
  );

  const events = filterAndSortProducts({
    products: PRODUCTS,
    category: 'events',
    searchQuery: '',
    sort: 'featured',
  });
  assert.deepEqual(
    events.map((p) => p.id),
    ['college-event-organiser-kit']
  );
});

test('local search matches included items and descriptions case-insensitively', () => {
  const sponsorshipMatch = filterAndSortProducts({
    products: PRODUCTS,
    category: 'all',
    searchQuery: 'Sponsorship',
    sort: 'featured',
  });
  assert.equal(sponsorshipMatch.length, 1);
  assert.equal(sponsorshipMatch[0].id, 'college-event-organiser-kit');

  const emptyMatch = filterAndSortProducts({
    products: PRODUCTS,
    category: 'all',
    searchQuery: 'nonexistent-kit-xyz',
    sort: 'featured',
  });
  assert.equal(emptyMatch.length, 0);
});

test('sorts products by price ascending and descending deterministically', () => {
  const asc = filterAndSortProducts({
    products: PRODUCTS,
    category: 'all',
    searchQuery: '',
    sort: 'price-asc',
  });
  assert.equal(asc[0].priceInr, 199);
  assert.equal(asc[asc.length - 1].priceInr, 299);

  const desc = filterAndSortProducts({
    products: PRODUCTS,
    category: 'all',
    searchQuery: '',
    sort: 'price-desc',
  });
  assert.equal(desc[0].priceInr, 299);
  assert.equal(desc[desc.length - 1].priceInr, 199);
});

test('computes bundle savings strictly from actual product prices and hides savings if price >= total', () => {
  const computed = computeBundleMetrics(BUNDLES, PRODUCTS);
  assert.equal(computed.length, 3);

  const creatorBundle = computed.find((b) => b.id === 'creator-essentials-bundle');
  assert.ok(creatorBundle);
  assert.equal(creatorBundle.individualTotalInr, 448); // 199 + 249
  assert.equal(creatorBundle.bundlePriceInr, 349);
  assert.equal(creatorBundle.savingsInr, 99);
  assert.equal(creatorBundle.hasValidSavings, true);

  const noDiscountTest = computeBundleMetrics(
    [
      {
        id: 'test-no-savings',
        slug: 'test-no-savings',
        name: 'Test Bundle',
        description: 'Test',
        productIds: ['creator-starter-kit', 'creator-media-kit-pack'],
        bundlePriceInr: 448,
        accentTheme: 'cobalt',
      },
    ],
    PRODUCTS
  );
  assert.equal(noDiscountTest[0].hasValidSavings, false);
  assert.equal(noDiscountTest[0].savingsInr, 0);
});

test('resolves unconfigured checkout safely without simulating purchase', () => {
  const initialResolution = resolveItemCheckout(
    'product',
    'creator-starter-kit',
    COMMERCE_CONFIG
  );
  assert.equal(initialResolution.isAvailable, false);
  assert.equal(initialResolution.checkoutUrl, null);
  assert.equal(initialResolution.reason, 'checkout-unconfigured');

  const missingDelivery = resolveItemCheckout('product', 'creator-starter-kit', {
    ...COMMERCE_CONFIG,
    checkoutConfigured: true,
    deliveryConfigured: false,
    productCheckoutUrls: {
      'creator-starter-kit': 'https://checkout.example.com/kit-1',
    },
  });
  assert.equal(missingDelivery.isAvailable, false);
  assert.equal(missingDelivery.reason, 'delivery-unconfigured');

  const ready = resolveItemCheckout('product', 'creator-starter-kit', {
    providerName: 'Lemon Squeezy',
    checkoutConfigured: true,
    deliveryConfigured: true,
    productCheckoutUrls: {
      'creator-starter-kit': 'https://pay.readyset.store/creator-starter-kit',
    },
    bundleCheckoutUrls: {},
  });
  assert.equal(ready.isAvailable, true);
  assert.equal(ready.checkoutUrl, 'https://pay.readyset.store/creator-starter-kit');
});

test('selects related products prioritizing same collection and excluding current product', () => {
  const starterKit = PRODUCTS[0];
  const related = getRelatedProducts(starterKit, PRODUCTS, 3);
  assert.equal(related.length, 3);
  assert.ok(!related.some((item) => item.id === starterKit.id));
  assert.equal(related[0].collectionSlug, 'creators');
});

test('formats INR currency consistently', () => {
  assert.equal(formatInr(199), '₹199');
  assert.equal(formatInr(1299), '₹1,299');
});
