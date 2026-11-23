import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import type { AppRoute } from '../utils/routing';

interface NavbarProps {
  currentRoute: AppRoute;
}

const NAV_LINKS = [
  { label: 'Shop', to: '/shop', match: 'shop' },
  { label: 'Creators', to: '/collections/creators', match: 'creators' },
  { label: 'Freelancers', to: '/collections/freelancers', match: 'freelancers' },
  { label: 'Students', to: '/collections/students-events', match: 'students-events' },
  { label: 'About', to: '/about', match: 'about' },
] as const;

export function Navbar({ currentRoute }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLinkActive = (match: string) => {
    if (match === 'shop') return currentRoute.page === 'shop';
    if (match === 'about') return currentRoute.page === 'about';
    if (currentRoute.page === 'collections') {
      return currentRoute.slug === match;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-zinc-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="font-display text-xl font-bold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] rounded-sm"
        >
          ReadySet
        </Link>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52525B]"
        >
          {NAV_LINKS.map((item) => {
            const active = isLinkActive(item.match);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={`whitespace-nowrap shrink-0 py-1 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1D4ED8] rounded-sm ${
                  active
                    ? 'text-[#18181B] underline decoration-[#1D4ED8] decoration-2 underline-offset-8'
                    : 'hover:text-[#18181B] hover:underline hover:decoration-zinc-300 hover:underline-offset-8'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Single prominent primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            Shop Kits
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-zinc-200 bg-white text-[#18181B] hover:bg-[#F3F1EC] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-zinc-200 bg-[#FAF9F6] px-4 py-4 space-y-1"
        >
          {NAV_LINKS.map((item) => {
            const active = isLinkActive(item.match);
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center min-h-[44px] px-3 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-[#F3F1EC] text-[#1D4ED8]'
                    : 'text-[#18181B] hover:bg-[#F3F1EC]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center min-h-[44px] w-full px-4 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors"
            >
              Shop Kits
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
