import type {
  BundleConfig,
  BundleWithMetrics,
  CommerceProviderConfig,
  Product,
  ShopCategory,
  SortOption,
} from '../types/store';

export interface FilterProductsParams {
  products: Product[];
  category: ShopCategory;
  searchQuery: string;
  sort: SortOption;
}

export function filterAndSortProducts({
  products,
  category,
  searchQuery,
  sort,
}: FilterProductsParams): Product[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const matchesCategory =
      category === 'all' || product.filterCategories.includes(category);

    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchableText = [
      product.name,
      product.shortDescription,
      product.categoryLabel,
      ...product.includes,
      ...product.formats,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });

  const sorted = [...filtered];

  if (sort === 'price-asc') {
    sorted.sort((a, b) => a.priceInr - b.priceInr || a.featuredOrder - b.featuredOrder);
  } else if (sort === 'price-desc') {
    sorted.sort((a, b) => b.priceInr - a.priceInr || a.featuredOrder - b.featuredOrder);
  } else {
    sorted.sort((a, b) => a.featuredOrder - b.featuredOrder);
  }

  return sorted;
}

export function computeBundleMetrics(
  bundles: BundleConfig[],
  products: Product[]
): BundleWithMetrics[] {
  const productById = new Map(products.map((product) => [product.id, product]));

  return bundles.map((bundle) => {
    const bundleProducts = bundle.productIds
      .map((id) => productById.get(id))
      .filter((item): item is Product => Boolean(item));

    const individualTotalInr = bundleProducts.reduce(
      (sum, item) => sum + item.priceInr,
      0
    );

    const rawSavings = individualTotalInr - bundle.bundlePriceInr;
    const hasValidSavings =
      bundleProducts.length === bundle.productIds.length &&
      individualTotalInr > 0 &&
      rawSavings > 0;

    const savingsInr = hasValidSavings ? rawSavings : 0;
    const savingsPercent = hasValidSavings
      ? Math.round((savingsInr / individualTotalInr) * 100)
      : 0;

    return {
      ...bundle,
      products: bundleProducts,
      individualTotalInr,
      savingsInr,
      savingsPercent,
      hasValidSavings,
    };
  });
}

export function getRelatedProducts(
  currentProduct: Product,
  allProducts: Product[],
  limit = 3
): Product[] {
  const others = allProducts.filter((item) => item.id !== currentProduct.id);

  others.sort((a, b) => {
    const aSameCollection = a.collectionSlug === currentProduct.collectionSlug ? 1 : 0;
    const bSameCollection = b.collectionSlug === currentProduct.collectionSlug ? 1 : 0;
    if (aSameCollection !== bSameCollection) {
      return bSameCollection - aSameCollection;
    }
    return a.featuredOrder - b.featuredOrder;
  });

  return others.slice(0, limit);
}

export interface CheckoutResolution {
  isAvailable: boolean;
  checkoutUrl: string | null;
  reason: 'ready' | 'checkout-unconfigured' | 'delivery-unconfigured' | 'missing-url';
  message: string;
}

export function resolveItemCheckout(
  itemType: 'product' | 'bundle',
  itemId: string,
  config: CommerceProviderConfig
): CheckoutResolution {
  const urlMap =
    itemType === 'product' ? config.productCheckoutUrls : config.bundleCheckoutUrls;
  const rawUrl = urlMap[itemId] ?? null;
  const trimmedUrl = rawUrl ? rawUrl.trim() : '';
  const hasValidHttpsUrl =
    trimmedUrl.startsWith('https://') && !trimmedUrl.includes('example');

  if (!config.checkoutConfigured) {
    return {
      isAvailable: false,
      checkoutUrl: null,
      reason: 'checkout-unconfigured',
      message:
        'External checkout is pending configuration. This digital toolkit is not yet open for purchase.',
    };
  }

  if (!config.deliveryConfigured) {
    return {
      isAvailable: false,
      checkoutUrl: null,
      reason: 'delivery-unconfigured',
      message:
        'Digital product delivery integration is not yet configured. Purchases are paused until file delivery is connected.',
    };
  }

  if (!hasValidHttpsUrl) {
    return {
      isAvailable: false,
      checkoutUrl: null,
      reason: 'missing-url',
      message:
        'No checkout link has been configured for this item yet. Please check back once store checkout is connected.',
    };
  }

  return {
    isAvailable: true,
    checkoutUrl: trimmedUrl,
    reason: 'ready',
    message: `Proceed to external checkout via ${config.providerName ?? 'configured payment provider'}.`,
  };
}

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}
