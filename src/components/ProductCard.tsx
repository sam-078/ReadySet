import { ArrowUpRight } from 'lucide-react';
import { Link } from './Link';
import { ProductMockup } from './ProductMockup';
import { formatInr } from '../utils/catalog';
import type { Product } from '../types/store';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col bg-white border border-zinc-200/90 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-zinc-300">
      <Link
        to={`/products/${product.slug}`}
        aria-label={`View ${product.name}`}
        className="block aspect-[4/3] w-full overflow-hidden bg-[#EAE6DD]"
      >
        <ProductMockup
          kind={product.mockupKind}
          variant={product.previewSlides[0]?.variant ?? 'overview'}
          studioImagePath={product.studioImagePath}
          studioImageAlt={product.studioImageAlt}
          compact
        />
      </Link>

      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#52525B]">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{product.includes.length} items</span>
          </div>

          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-[#18181B] leading-snug">
              <Link
                to={`/products/${product.slug}`}
                className="hover:text-[#1D4ED8] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] rounded-xs"
              >
                {product.name}
              </Link>
            </h3>
            <span className="font-mono text-base font-medium text-[#18181B] tabular-nums shrink-0">
              {formatInr(product.priceInr)}
            </span>
          </div>

          <p className="text-sm text-[#52525B] leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between gap-3">
          <span className="text-xs text-[#71717A] truncate">
            {product.formats[0]}
          </span>
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#18181B] bg-[#F3F1EC] hover:bg-[#1D4ED8] hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            View kit
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
