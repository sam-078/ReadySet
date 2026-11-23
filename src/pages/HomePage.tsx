import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { Link } from '../components/Link';
import { ProductCard } from '../components/ProductCard';
import { CheckoutAction } from '../components/CheckoutAction';
import { NewsletterSection } from '../components/NewsletterSection';
import { BUNDLES, COLLECTIONS, PRODUCTS } from '../data/products';
import { computeBundleMetrics, formatInr } from '../utils/catalog';
import { usePageSEO } from '../utils/routing';

export function HomePage() {
  const [heroImgError, setHeroImgError] = useState(false);

  usePageSEO({
    title: 'ReadySet — Digital Toolkits, Planners & Templates',
    description:
      'Everything you need. Nothing you need to figure out. Ready-to-use templates, planners, and toolkits for creators, freelancers, students, and event organisers.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Store',
      name: 'ReadySet',
      description:
        'Ready-to-use digital templates, planners, spreadsheets, and checklists for creators, freelancers, students, and event organisers.',
      priceRange: '₹199 - ₹449',
    },
  });

  const featuredProducts = [...PRODUCTS].sort((a, b) => a.featuredOrder - b.featuredOrder);
  const bundles = computeBundleMetrics(BUNDLES, PRODUCTS);

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-sm font-medium text-[#1D4ED8]">
              ReadySet Digital Toolkits
            </p>

            <h1
              className="font-display font-bold text-[#18181B] tracking-tight leading-[1.06]"
              style={{ fontSize: 'clamp(2.25rem, 4.3vw, 3.75rem)', textWrap: 'balance' }}
            >
              You have the idea. We have the toolkit.
            </h1>

            <p className="text-base sm:text-lg text-[#52525B] leading-relaxed max-w-xl">
              Ready-to-use templates, planners and toolkits to help you create, organise and
              launch without starting from scratch.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                <span>Explore the kits</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 text-sm font-medium text-[#18181B] bg-white border border-zinc-300 hover:border-zinc-400 hover:bg-[#F3F1EC] rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                Browse collections
              </Link>
            </div>

            <div className="pt-4 border-t border-zinc-200/80 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#52525B]">
              <span>6 toolkits</span>
              <span aria-hidden="true">·</span>
              <span>Sheets, Docs &amp; PDFs</span>
              <span aria-hidden="true">·</span>
              <span>No account needed</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[300px] lg:h-full rounded-xl overflow-hidden border border-zinc-200/90 bg-[#EAE6DD]">
              {!heroImgError ? (
                <img
                  src="/src/assets/images/hero_toolkit_flatlay_1795444649492.jpg"
                  alt="Overhead studio view of ReadySet digital planner on a tablet alongside printed checklists and a cobalt blue notebook"
                  referrerPolicy="no-referrer"
                  onError={() => setHeroImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-10 text-center space-y-2">
                  <span className="font-display text-lg font-semibold text-[#18181B]">
                    ReadySet Studio Toolkits
                  </span>
                  <span className="text-sm text-[#52525B]">
                    Planners · Spreadsheets · Checklists
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Collections (3 Distinct Visual Treatments) */}
      <section
        aria-labelledby="collections-heading"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-zinc-200/80"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-[#52525B]">Curated by workflow</p>
            <h2
              id="collections-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight"
            >
              Featured collections
            </h2>
          </div>
          <Link
            to="/collections"
            className="text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>All collections</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {COLLECTIONS.map((collection, index) => {
            const treatmentClasses =
              collection.accentTheme === 'cobalt'
                ? 'bg-[#1D4ED8] text-white border-[#1D4ED8]'
                : collection.accentTheme === 'lime'
                ? 'bg-[#18181B] text-white border-[#18181B]'
                : 'bg-[#F3F1EC] text-[#18181B] border-zinc-200';

            const subtextClass =
              collection.accentTheme === 'orange' ? 'text-[#52525B]' : 'text-white/80';

            const tagAccent =
              collection.accentTheme === 'cobalt'
                ? 'text-blue-100'
                : collection.accentTheme === 'lime'
                ? 'text-[#BEF264]'
                : 'text-[#EA580C]';

            const linkClass =
              collection.accentTheme === 'orange'
                ? 'text-[#18181B] hover:text-[#EA580C]'
                : 'text-white hover:opacity-85';

            return (
              <article
                key={collection.slug}
                className={`rounded-xl border overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5 ${treatmentClasses}`}
              >
                <Link
                  to={`/collections/${collection.slug}`}
                  className="block aspect-[4/3] w-full overflow-hidden bg-zinc-200"
                >
                  <img
                    src={collection.imagePath}
                    alt={collection.imageAlt}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between gap-5">
                  <div className="space-y-2.5">
                    <div className={`font-mono text-xs font-medium ${tagAccent}`}>
                      0{index + 1}. Collection
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      <Link to={`/collections/${collection.slug}`}>{collection.name}</Link>
                    </h3>
                    <p className={`text-sm leading-relaxed ${subtextClass}`}>
                      {collection.tagline}
                    </p>
                  </div>

                  <Link
                    to={`/collections/${collection.slug}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap ${linkClass}`}
                  >
                    <span>Explore {collection.shortName}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Products (All 6 Launch Products) */}
      <section
        aria-labelledby="featured-products-heading"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-zinc-200/80"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-[#52525B]">Launch catalogue</p>
            <h2
              id="featured-products-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight"
            >
              Featured toolkits
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-sm font-medium text-[#1D4ED8] hover:text-[#1E40AF] inline-flex items-center gap-1 whitespace-nowrap"
          >
            <span>Filter &amp; search all kits</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Why ReadySet */}
      <section
        aria-labelledby="why-readyset-heading"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200/80"
      >
        <div className="max-w-2xl mb-10 space-y-2">
          <p className="text-xs font-medium text-[#1D4ED8]">Why ReadySet</p>
          <h2
            id="why-readyset-heading"
            className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight"
          >
            Practical systems built for the work you actually do.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-7 space-y-3">
            <div className="font-mono text-xs font-medium text-[#1D4ED8]">01</div>
            <h3 className="font-display text-xl font-semibold text-[#18181B]">
              Less starting from scratch
            </h3>
            <p className="text-sm text-[#52525B] leading-relaxed">
              Skip blank spreadsheets and formatting guesswork. Open a structured file, enter your
              project details, and move straight to execution.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-7 space-y-3">
            <div className="font-mono text-xs font-medium text-[#65A30D]">02</div>
            <h3 className="font-display text-xl font-semibold text-[#18181B]">
              Actually usable
            </h3>
            <p className="text-sm text-[#52525B] leading-relaxed">
              Designed around everyday tools you already open—Google Sheets, Excel, Docs, and
              clean PDFs—with zero complex setup or subscriptions.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-7 space-y-3">
            <div className="font-mono text-xs font-medium text-[#EA580C]">03</div>
            <h3 className="font-display text-xl font-semibold text-[#18181B]">
              Made for real people
            </h3>
            <p className="text-sm text-[#52525B] leading-relaxed">
              Tailored for solo creators, independent freelancers, students, and campus organising
              teams working on real deadlines.
            </p>
          </div>
        </div>
      </section>

      {/* 5. How It Works (4 Steps) */}
      <section
        aria-labelledby="how-it-works-heading"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-zinc-200/80"
      >
        <div className="mb-10 space-y-1.5">
          <p className="text-xs font-medium text-[#52525B]">Simple workflow</p>
          <h2
            id="how-it-works-heading"
            className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight"
          >
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Find your kit',
              body: 'Browse by creator, freelancer, or student workflow and preview what is inside each toolkit.',
            },
            {
              step: '02',
              title: 'Purchase it',
              body: 'Complete checkout through our configured external payment provider—no ReadySet account needed.',
            },
            {
              step: '03',
              title: 'Download it',
              body: 'Receive instant digital file access via our delivery provider along with a backup copy by email.',
            },
            {
              step: '04',
              title: 'Start using it',
              body: 'Duplicate the templates, plug in your own projects or numbers, and get moving immediately.',
            },
          ].map((item) => (
            <div
              key={item.step}
              className="bg-[#F3F1EC] border border-zinc-200/80 rounded-xl p-6 space-y-2.5"
            >
              <span className="font-mono text-xs font-medium text-[#1D4ED8]">{item.step}</span>
              <h3 className="font-display text-lg font-semibold text-[#18181B]">{item.title}</h3>
              <p className="text-sm text-[#52525B] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Curated Bundles */}
      <section
        aria-labelledby="bundles-heading"
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-zinc-200/80"
      >
        <div className="max-w-2xl mb-10 space-y-1.5">
          <p className="text-xs font-medium text-[#52525B]">Paired toolkits</p>
          <h2
            id="bundles-heading"
            className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight"
          >
            Curated bundles
          </h2>
          <p className="text-sm sm:text-base text-[#52525B]">
            Combine complementary kits for one complete workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {bundles.map((bundle) => {
            const accentLine =
              bundle.accentTheme === 'cobalt'
                ? 'text-[#1D4ED8]'
                : bundle.accentTheme === 'lime'
                ? 'text-[#65A30D]'
                : 'text-[#EA580C]';

            return (
              <article
                key={bundle.id}
                className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between gap-6"
              >
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className={`font-mono text-xs font-medium ${accentLine}`}>
                      {bundle.products.length}-Kit Bundle
                    </div>
                    <h3 className="font-display text-xl font-semibold text-[#18181B]">
                      {bundle.name}
                    </h3>
                    <p className="text-sm text-[#52525B] leading-relaxed">
                      {bundle.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 space-y-2">
                    <p className="text-xs font-medium text-[#71717A]">Included kits</p>
                    <ul className="space-y-2">
                      {bundle.products.map((product) => (
                        <li
                          key={product.id}
                          className="flex items-center justify-between gap-2 text-sm"
                        >
                          <Link
                            to={`/products/${product.slug}`}
                            className="flex items-center gap-2 text-[#18181B] hover:text-[#1D4ED8] transition-colors"
                          >
                            <Check
                              className="w-4 h-4 text-[#1D4ED8] shrink-0"
                              aria-hidden="true"
                            />
                            <span>{product.name}</span>
                          </Link>
                          <span className="font-mono text-xs text-[#71717A] tabular-nums">
                            {formatInr(product.priceInr)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200/80 space-y-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-2xl font-semibold text-[#18181B] tabular-nums">
                        {formatInr(bundle.bundlePriceInr)}
                      </span>
                      {bundle.hasValidSavings && (
                        <span className="font-mono text-sm text-[#71717A] line-through tabular-nums">
                          {formatInr(bundle.individualTotalInr)}
                        </span>
                      )}
                    </div>
                    {bundle.hasValidSavings && (
                      <span className="text-xs font-medium text-[#1D4ED8] tabular-nums">
                        Save {formatInr(bundle.savingsInr)} ({bundle.savingsPercent}%)
                      </span>
                    )}
                  </div>

                  <CheckoutAction
                    itemType="bundle"
                    itemId={bundle.id}
                    itemName={bundle.name}
                    label="Get bundle"
                    variant="secondary"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 7. Optional Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
