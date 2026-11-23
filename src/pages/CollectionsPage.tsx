import { ArrowRight, Check } from 'lucide-react';
import { Link } from '../components/Link';
import { ProductCard } from '../components/ProductCard';
import { CheckoutAction } from '../components/CheckoutAction';
import { BUNDLES, COLLECTIONS, PRODUCTS } from '../data/products';
import { computeBundleMetrics, formatInr } from '../utils/catalog';
import { usePageSEO } from '../utils/routing';
import type { CollectionSlug } from '../types/store';

interface CollectionsPageProps {
  slug?: CollectionSlug;
}

export function CollectionsPage({ slug }: CollectionsPageProps) {
  const activeCollection = slug
    ? COLLECTIONS.find((c) => c.slug === slug)
    : undefined;

  usePageSEO({
    title: activeCollection
      ? `${activeCollection.name} Collection — ReadySet`
      : 'Collections — ReadySet',
    description: activeCollection
      ? activeCollection.description
      : 'Explore ReadySet digital toolkit collections for Creators, Freelancers, and Students & Event Organisers.',
  });

  const bundles = computeBundleMetrics(BUNDLES, PRODUCTS);

  if (activeCollection) {
    const collectionProducts = PRODUCTS.filter(
      (p) => p.collectionSlug === activeCollection.slug
    );
    const matchingBundle = bundles.find((b) =>
      b.productIds.some((id) => collectionProducts.some((cp) => cp.id === id))
    );

    const accentColor =
      activeCollection.accentTheme === 'cobalt'
        ? 'text-[#1D4ED8]'
        : activeCollection.accentTheme === 'lime'
        ? 'text-[#65A30D]'
        : 'text-[#EA580C]';

    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 space-y-14">
        {/* Collection Switcher */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <Link
            to="/collections"
            className="px-3.5 py-1.5 rounded-lg border border-zinc-200 bg-white text-[#52525B] hover:text-[#18181B]"
          >
            All Collections
          </Link>
          {COLLECTIONS.map((col) => {
            const isCurrent = col.slug === activeCollection.slug;
            return (
              <Link
                key={col.slug}
                to={`/collections/${col.slug}`}
                className={`px-3.5 py-1.5 rounded-lg border transition-colors ${
                  isCurrent
                    ? 'border-[#18181B] bg-[#18181B] text-white'
                    : 'border-zinc-200 bg-white text-[#52525B] hover:text-[#18181B]'
                }`}
              >
                {col.name}
              </Link>
            );
          })}
        </div>

        {/* Collection Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
            <p className={`text-xs font-medium ${accentColor}`}>
              ReadySet Collection
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18181B] tracking-tight leading-[1.08]">
              {activeCollection.name}
            </h1>
            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed">
              {activeCollection.description}
            </p>
            <ul className="space-y-2 pt-2">
              {activeCollection.audienceHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2.5 text-sm text-[#18181B]"
                >
                  <Check className="w-4 h-4 text-[#1D4ED8] shrink-0" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-200/90 bg-[#EAE6DD]">
              <img
                src={activeCollection.imagePath}
                alt={activeCollection.imageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Kits in Collection */}
        <section aria-labelledby="collection-kits-heading" className="space-y-8 border-t border-zinc-200/80 pt-12">
          <h2
            id="collection-kits-heading"
            className="font-display text-2xl font-semibold text-[#18181B]"
          >
            Toolkits in this collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {collectionProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Paired Bundle */}
        {matchingBundle && (
          <section className="border-t border-zinc-200/80 pt-12">
            <div className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <p className="text-xs font-medium text-[#1D4ED8]">Complete collection bundle</p>
                <h2 className="font-display text-2xl font-semibold text-[#18181B]">
                  {matchingBundle.name}
                </h2>
                <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                  {matchingBundle.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-[#52525B]">
                  {matchingBundle.products.map((p) => (
                    <span key={p.id}>Included: {p.name}</span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-2xl font-semibold text-[#18181B] tabular-nums">
                      {formatInr(matchingBundle.bundlePriceInr)}
                    </span>
                    {matchingBundle.hasValidSavings && (
                      <span className="font-mono text-sm text-[#71717A] line-through tabular-nums">
                        {formatInr(matchingBundle.individualTotalInr)}
                      </span>
                    )}
                  </div>
                  {matchingBundle.hasValidSavings && (
                    <span className="text-xs font-medium text-[#1D4ED8] tabular-nums">
                      Save {formatInr(matchingBundle.savingsInr)}
                    </span>
                  )}
                </div>
                <CheckoutAction
                  itemType="bundle"
                  itemId={matchingBundle.id}
                  itemName={matchingBundle.name}
                  label="Get bundle"
                />
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  // All Collections overview (/collections)
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 space-y-14">
      <header className="max-w-2xl space-y-3 pb-8 border-b border-zinc-200/80">
        <p className="text-xs font-medium text-[#1D4ED8]">Browse by workflow</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">
          Collections
        </h1>
        <p className="text-base text-[#52525B] leading-relaxed">
          Three focused collections built for creators, independent freelancers, students, and
          campus event organisers.
        </p>
      </header>

      <div className="space-y-10">
        {COLLECTIONS.map((collection, idx) => {
          const collectionProducts = PRODUCTS.filter(
            (p) => p.collectionSlug === collection.slug
          );
          const accentBadge =
            collection.accentTheme === 'cobalt'
              ? 'text-[#1D4ED8]'
              : collection.accentTheme === 'lime'
              ? 'text-[#65A30D]'
              : 'text-[#EA580C]';

          return (
            <section
              key={collection.slug}
              className="bg-white border border-zinc-200/90 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto bg-[#EAE6DD]">
                <img
                  src={collection.imagePath}
                  alt={collection.imageAlt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className={`font-mono text-xs font-medium ${accentBadge}`}>
                    0{idx + 1}. Collection · {collectionProducts.length} toolkits
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B]">
                    {collection.name}
                  </h2>
                  <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
                    {collection.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-zinc-100">
                  <div className="flex flex-wrap gap-3">
                    {collectionProducts.map((p) => (
                      <Link
                        key={p.id}
                        to={`/products/${p.slug}`}
                        className="text-xs font-medium text-[#18181B] bg-[#F3F1EC] hover:bg-zinc-200/70 px-3 py-1.5 rounded-md transition-colors"
                      >
                        {p.name} · {formatInr(p.priceInr)}
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to={`/collections/${collection.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF]"
                    >
                      <span>Open {collection.shortName} collection</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
