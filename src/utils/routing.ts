import { useEffect, useState } from 'react';
import type { CollectionSlug, ShopCategory } from '../types/store';

export type AppRoute =
  | { page: 'home' }
  | { page: 'shop'; initialCategory?: ShopCategory }
  | { page: 'product'; slug: string }
  | { page: 'collections'; slug?: CollectionSlug }
  | { page: 'about' }
  | { page: 'faq' }
  | { page: 'contact' }
  | { page: 'privacy' }
  | { page: 'terms' }
  | { page: 'refund-policy' }
  | { page: 'not-found'; path: string };

export function parseRoute(pathname: string, search = ''): AppRoute {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const params = new URLSearchParams(search);

  if (cleanPath === '/') {
    return { page: 'home' };
  }

  if (cleanPath === '/shop') {
    const cat = params.get('category');
    const validCategories: ShopCategory[] = [
      'all',
      'creators',
      'freelancers',
      'students',
      'events',
    ];
    const initialCategory =
      cat && validCategories.includes(cat as ShopCategory)
        ? (cat as ShopCategory)
        : undefined;
    return { page: 'shop', initialCategory };
  }

  if (cleanPath.startsWith('/products/')) {
    const slug = cleanPath.slice('/products/'.length);
    if (slug && !slug.includes('/')) {
      return { page: 'product', slug };
    }
  }

  if (cleanPath === '/collections') {
    return { page: 'collections' };
  }

  if (cleanPath.startsWith('/collections/')) {
    const slug = cleanPath.slice('/collections/'.length);
    if (
      slug === 'creators' ||
      slug === 'freelancers' ||
      slug === 'students-events'
    ) {
      return { page: 'collections', slug };
    }
  }

  if (cleanPath === '/about') {
    return { page: 'about' };
  }

  if (cleanPath === '/faq') {
    return { page: 'faq' };
  }

  if (cleanPath === '/contact') {
    return { page: 'contact' };
  }

  if (cleanPath === '/privacy') {
    return { page: 'privacy' };
  }

  if (cleanPath === '/terms') {
    return { page: 'terms' };
  }

  if (cleanPath === '/refund-policy') {
    return { page: 'refund-policy' };
  }

  return { page: 'not-found', path: cleanPath };
}

export function navigateTo(path: string): void {
  if (typeof window === 'undefined') return;
  const current = window.location.pathname + window.location.search;
  if (current !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

export function useAppRoute(): AppRoute {
  const [route, setRoute] = useState<AppRoute>(() =>
    typeof window !== 'undefined'
      ? parseRoute(window.location.pathname, window.location.search)
      : { page: 'home' }
  );

  useEffect(() => {
    const handlePop = () => {
      setRoute(parseRoute(window.location.pathname, window.location.search));
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  return route;
}

export interface PageSEOConfig {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
}

export function usePageSEO({ title, description, jsonLd }: PageSEOConfig): void {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    const canonicalUrl = window.location.origin + window.location.pathname;
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    const existingScript = document.getElementById('readyset-jsonld');
    if (jsonLd) {
      let scriptEl = existingScript as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = 'readyset-jsonld';
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, jsonLd]);
}
