'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    } else if (consent === 'accepted') {
      loadGA4();
    }
  }, []);

  function loadGA4() {
    // Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
    const GA_ID = 'G-YRPHYS6N05';
    if (typeof window !== 'undefined' && !document.getElementById('ga4-script')) {
      const script = document.createElement('script');
      script.id = 'ga4-script';
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', GA_ID);
    }
  }

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
    loadGA4();
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-navy border-t border-white/10 px-6 py-4">
      <div className="max-w-[1120px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[13px] text-white/60 leading-relaxed max-w-xl">
          This website uses cookies to understand how visitors use the site. Analytics data is anonymised and never sold.{' '}
          <Link href="/privacy-policy" className="text-gold underline">
            Privacy Policy
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[13px] font-medium text-white/50 px-4 py-2 rounded border border-white/15 hover:border-white/30 transition-colors bg-transparent cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-[13px] font-semibold text-navy bg-white px-5 py-2 rounded hover:bg-warm transition-colors border-none cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
