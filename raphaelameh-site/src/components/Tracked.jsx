'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import * as dataLayer from '@/lib/dataLayer';

/* Thin client wrappers so server components (pages that export `metadata`)
   can fire dataLayer events. The `track` prop is serializable —
   { fn: 'trackCTAClick', args: ['book_call', 'services'] } — because
   functions can't be passed from a server component to a client one. */

function fire(track) {
  if (!track || typeof dataLayer[track.fn] !== 'function') return;
  dataLayer[track.fn](...(track.args || []));
}

export function TrackOnMount({ track }) {
  useEffect(() => {
    fire(track);
    // fire once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

export function TrackedLink({ track, onClick, children, ...props }) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        fire(track);
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}

export function TrackedAnchor({ track, onClick, children, ...props }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        fire(track);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

export function TrackedButton({ track, onClick, children, ...props }) {
  return (
    <button
      {...props}
      onClick={(e) => {
        fire(track);
        onClick?.(e);
      }}
    >
      {children}
    </button>
  );
}
