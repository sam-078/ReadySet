import { useEffect, useState } from 'react';
import { ArrowLeft, Check, Monitor } from 'lucide-react';
import { Link } from '../components/Link';
import { ProductMockup } from '../components/ProductMockup';
import { ProductCard } from '../components/ProductCard';
import { CheckoutAction } from '../components/CheckoutAction';
import { FaqAccordion } from '../components/FaqAccordion';
import { PRODUCTS } from '../data/products';
import { formatInr, getRelatedProducts } from '../utils/catalog';
import { usePageSEO } from '../utils/routing';

interface ProductDetailPageProps {
  slug: string;
}

export function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const product = PRODUCTS.find((item) => item.slug === slug);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    setActiveSlideIndex(0);
  }, [slug]);

  usePageSEO({
    title: product ? `${product.name} — ReadySet` : 'Kit Not Found — ReadySet',
    description: product
      ? product.shortDescription
      : 'Explore ReadySet digital toolkits, planners, spreadsheets, and checklists.',
    jsonLd: product
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.fullDescription,
          category: product.categoryLabel,
          offers: {
            '@type': 'Offer',
            price: String(product.priceInr),
            priceCurrency: 'INR',
            availability: 'https://schema.org/PreOrder',
          },
        }
      : undefined,
  });

  if (!product) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-5">
        <h1 className="font-display text-3xl font-bold text-[#18181B]">Toolkit not found</h1>
        <p className="text-base text-[#52525B]">
          The product page you requested does not exist in our current catalogue.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const activeSlide = product.previewSlides[activeSlideIndex] ?? product.previewSlides[0];
  const relatedProducts = getRelatedProducts(product, PRODUCTS, 3);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-sm text-[#52525B] hover:text-[#18181B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to Shop</span>
        </Link>
      </nav>

      {/* Main Two-Column PDP Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Product Mockup & Interactive Preview Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/3] w-full rounded-xl overflow-hidden border border-zinc-200/90 bg-[#EAE6DD]">
            <ProductMockup
              kind={product.mockupKind}
              variant={activeSlide.variant}
              studioImagePath={product.studioImagePath}
              studioImageAlt={product.studioImageAlt}
            />
          </div>

          <div className="bg-white border border-zinc-200/90 rounded-xl p-4 space-y-3">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Product preview views">
              {product.previewSlides.map((slide, index) => {
                const selected = index === activeSlideIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveSlideIndex(index)}
                    className={`min-h-[36px] px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                      selected
                        ? 'bg-[#18181B] text-white'
                        : 'bg-[#F3F1EC] text-[#52525B] hover:text-[#18181B]'
                    }`}
                  >
                    {slide.label}
                  </button>
                );
              })}
            </div>
            <div className="text-xs text-[#52525B]">
              <span className="font-medium text-[#18181B]">{activeSlide.title}</span>
              <span aria-hidden="true"> — </span>
              <span>{activeSlide.caption}</span>
            </div>
          </div>
        </div>

        {/* Right: Contiguous Purchase Module */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#52525B]">
              <Link
                to={`/collections/${product.collectionSlug}`}
                className="text-[#1D4ED8] hover:underline font-medium"
              >
                {product.categoryLabel}
              </Link>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{product.includes.length} templates</span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#18181B] tracking-tight">
              {product.name}
            </h1>

            <div className="font-mono text-2xl font-semibold text-[#18181B] tabular-nums">
              {formatInr(product.priceInr)}
            </div>

            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          <div className="pt-4 border-t border-zinc-100 space-y-2.5">
            <h2 className="text-xs font-medium text-[#71717A]">What’s included</h2>
            <ul className="space-y-2">
              {product.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#18181B]">
                  <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 border-t border-zinc-100 space-y-2">
            <p className="text-xs text-[#71717A]">
              Formats: {product.formats.join(' · ')}
            </p>
          </div>

          <CheckoutAction
            itemType="product"
            itemId={product.id}
            itemName={product.name}
            label="Buy now"
          />
        </div>
      </div>

      {/* Below-the-fold Product Information Sections */}
      <div className="mt-20 space-y-16 border-t border-zinc-200/80 pt-14">
        {/* Who This Is For + What Is Included */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <section aria-labelledby="who-for-heading" className="lg:col-span-5 space-y-4">
            <h2
              id="who-for-heading"
              className="font-display text-2xl font-semibold text-[#18181B]"
            >
              Who this is for
            </h2>
            <ul className="space-y-3">
              {product.whoIsItFor.map((point) => (
                <li
                  key={point}
                  className="bg-[#F3F1EC] border border-zinc-200/70 rounded-lg p-4 text-sm text-[#18181B] leading-relaxed"
                >
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="included-details-heading" className="lg:col-span-7 space-y-4">
            <h2
              id="included-details-heading"
              className="font-display text-2xl font-semibold text-[#18181B]"
            >
              What is included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {product.includes.map((item, idx) => (
                <div
                  key={item}
                  className="bg-white border border-zinc-200/90 rounded-lg p-4 flex items-start gap-3"
                >
                  <span className="font-mono text-xs text-[#1D4ED8] font-medium pt-0.5 tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-medium text-[#18181B]">{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* How It Works & Software Requirements */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-t border-zinc-200/80 pt-14">
          <section aria-labelledby="pdp-how-heading" className="lg:col-span-7 space-y-4">
            <h2
              id="pdp-how-heading"
              className="font-display text-2xl font-semibold text-[#18181B]"
            >
              How it works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ['01', 'Purchase via external checkout', 'No account creation needed. Complete order securely through our external checkout provider once enabled.'],
                ['02', 'Download your kit', 'Receive your private download link immediately through our digital product delivery provider.'],
                ['03', 'Duplicate master files', 'Save a working copy to your Google Drive, Notion, or desktop folder so your blank originals stay intact.'],
                ['04', 'Customise and run', 'Fill in your own timelines, pricing, or content pillars and put the workflow to work immediately.'],
              ].map(([num, title, body]) => (
                <div
                  key={num}
                  className="bg-[#F3F1EC] border border-zinc-200/70 rounded-lg p-5 space-y-1.5"
                >
                  <span className="font-mono text-xs font-medium text-[#1D4ED8]">{num}</span>
                  <h3 className="font-display text-base font-semibold text-[#18181B]">{title}</h3>
                  <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="software-heading" className="lg:col-span-5 space-y-4">
            <h2
              id="software-heading"
              className="font-display text-2xl font-semibold text-[#18181B]"
            >
              Software requirements
            </h2>
            <div className="bg-white border border-zinc-200/90 rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[#18181B]">
                <Monitor className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
                <span>Compatible everyday tools</span>
              </div>
              <ul className="space-y-3 text-sm text-[#52525B]">
                {product.softwareRequirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5">
                    <span className="text-[#1D4ED8] font-mono text-xs pt-0.5">→</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Product FAQs */}
        <section aria-labelledby="pdp-faq-heading" className="border-t border-zinc-200/80 pt-14">
          <div className="max-w-3xl space-y-6">
            <h2
              id="pdp-faq-heading"
              className="font-display text-2xl font-semibold text-[#18181B]"
            >
              Frequently asked questions
            </h2>
            <FaqAccordion items={product.faqs} />
          </div>
        </section>

        {/* Related Products */}
        <section
          aria-labelledby="related-heading"
          className="border-t border-zinc-200/80 pt-14 space-y-8"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="related-heading"
              className="font-display text-2xl font-semibold text-[#18181B]"
            >
              Related toolkits
            </h2>
            <Link to="/shop" className="text-sm font-medium text-[#1D4ED8] hover:underline">
              View all kits
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
