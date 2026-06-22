'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconLinkedIn } from './Icons';
import { SITE } from '@/lib/constants';
import { trackCTAClick, trackOutboundClick } from '@/lib/dataLayer';

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/92 backdrop-blur-sm border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-6 flex justify-between items-center h-[66px]">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
        >
          <Image
            src="/images/monogram-icon.png"
            alt=""
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
            priority
          />
          <span className="font-serif text-[17.5px] font-bold text-navy">
            {SITE.name}<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[13.5px] font-medium text-muted no-underline hover:text-navy transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundClick(SITE.linkedin, 'LinkedIn')}
            className="text-muted hover:text-navy transition-colors"
          >
            <IconLinkedIn className="w-[17px] h-[17px]" />
          </a>
          <div className="w-px h-[18px] bg-border" />
          <Link
            href="/contact"
            onClick={() => trackCTAClick('book_call', 'nav')}
            className="text-[13.5px] font-semibold text-white bg-navy px-5 py-2 rounded-md no-underline hover:bg-navy-mid transition-colors"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden bg-transparent border-none cursor-pointer p-1.5 text-navy"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-border px-6 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-[#1A1A1A] no-underline py-2.5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => { trackCTAClick('book_call', 'nav'); setOpen(false); }}
            className="mt-2 text-sm font-semibold text-white bg-navy py-3 rounded-md no-underline text-center"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
