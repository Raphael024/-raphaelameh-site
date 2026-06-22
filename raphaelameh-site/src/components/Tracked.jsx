'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/analytics';

/* Thin client wrappers so server components (pages that export `metadata`)
   can still fire GA events on click — or, for PageView, on mount. */

export function PageView({ event, params }) {
  useEffect(() => {
    trackEvent(event, params);
    // fire once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export function TrackedLink({ event, params, onClick, children, ...props }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, params);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}

export function TrackedAnchor({ event, params, onClick, children, ...props }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent(event, params);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

export function TrackedButton({ event, params, onClick, children, ...props }) {
  return (
    <button
      {...props}
      onClick={(e) => {
        trackEvent(event, params);
        onClick?.(e);
      }}
    >
      {children}
    </button>
  );
}
