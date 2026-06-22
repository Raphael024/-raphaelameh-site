'use client';
import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/dataLayer';

const MILESTONES = [25, 50, 75, 90];

/** Fires a scroll_depth event once per milestone (25/50/75/90%) per page load. */
export default function ScrollTracker() {
  useEffect(() => {
    const fired = new Set();

    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;

      for (const m of MILESTONES) {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          trackScrollDepth(m);
        }
      }
      if (fired.size === MILESTONES.length) {
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}
