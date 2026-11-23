import { useEffect, useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { filterAndSortProducts } from '../utils/catalog';
import { usePageSEO } from '../utils/routing';
import type { ShopCategory, SortOption } from '../types/store';

interface ShopPageProps {
  initialCategory?: ShopCategory;
}

const CATEGORIES: { value: ShopCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'creators', label: 'Creators' },
  { value: 'freelancers', label: 'Freelancers' },
  { value: 'students', label: 'Students' },
  { value: 'events', label: 'Events' },
];

export function ShopPage({ initialCategory }: ShopPageProps) {
  const [category, setCategory] = useState<ShopCategory>(initialCategory ?? 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sort, setSort] = useState<SortOption>('featured');

  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  usePageSEO({
    title: 'Shop Toolkits — ReadySet',
    description:
      'Browse and filter ReadySet digital toolkits, content planners, freelance templates, event spreadsheets, and student trackers.',
  });

  const filteredProducts = useMemo(
    () =>
      filterAndSortProducts({
        products: PRODUCTS,
        category,
        searchQuery,
        sort,
      }),
    [category, searchQuery, sort]
  );

  const resetFilters = () => {
    setCategory('all');
    setSearchQuery('');
    setSort('featured');
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
      <header className="pb-8 border-b border-zinc-200/80">
        <div className="max-w-2xl space-y-3">
          <p className="text-xs font-medium text-[#1D4ED8]">Digital toolkit catalogue</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">
            Shop ReadySet kits
          </h1>
          <p className="text-base text-[#52525B] leading-relaxed">
            Ready-to-use spreadsheets, planners, checklists, and editable documents. Pick a kit,
            download it once connected, and start immediately.
          </p>
        </div>
      </header>

      {/* Filter, Search, and Sort Toolbar */}
      <div className="py-6 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Category Filter Tabs */}
          <div
            role="group"
            aria-label="Filter toolkits by category"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F3F1EC] border border-zinc-200/80 rounded-lg w-fit"
          >
            {CATEGORIES.map((item) => {
              const active = category === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setCategory(item.value)}
                  aria-pressed={active}
                  className={`min-h-[36px] px-3.5 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${
                    active
                      ? 'bg-white text-[#18181B] shadow-xs'
                      : 'text-[#52525B] hover:text-[#18181B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Search and Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search
                className="w-4 h-4 text-[#71717A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <label htmlFor="shop-search" className="sr-only">
                Search kits and templates
              </label>
              <input
                id="shop-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search kits or templates..."
                className="w-full min-h-[40px] pl-9 pr-9 py-2 text-sm bg-white border border-zinc-300 rounded-lg text-[#18181B] placeholder:text-[#71717A] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#71717A] hover:text-[#18181B] cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="shop-sort" className="text-xs text-[#52525B] whitespace-nowrap">
                Sort by
              </label>
              <select
                id="shop-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="min-h-[40px] px-3 py-2 text-sm bg-white border border-zinc-300 rounded-lg text-[#18181B] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-[#71717A]">
          <p className="tabular-nums">
            Showing {filteredProducts.length} of {PRODUCTS.length} kits
          </p>
          {(category !== 'all' || searchQuery !== '' || sort !== 'featured') && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-[#1D4ED8] hover:underline font-medium cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <div
          data-testid="shop-product-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-zinc-200 rounded-xl p-10 text-center space-y-4 my-6">
          <h2 className="font-display text-xl font-semibold text-[#18181B]">
            No kits match your search
          </h2>
          <p className="text-sm text-[#52525B] max-w-md mx-auto">
            Try clearing your search term or switching back to all categories to view the full
            launch collection.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors cursor-pointer"
          >
            Show all kits
          </button>
        </div>
      )}
    </div>
  );
}
