'use client';
import Link from 'next/link';
import Image from 'next/image';
import { IconLinkedIn } from './Icons';
import { SITE } from '@/lib/constants';
import { trackOutboundClick } from '@/lib/dataLayer';

const footerLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1420] border-t border-white/[0.04] py-8 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <span className="flex items-center gap-2">
          <Image
            src="/images/monogram-icon-light.png"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 opacity-70"
          />
          <span className="font-serif text-[14.5px] font-bold text-white/35">
            {SITE.name}<span className="text-gold">.</span>
          </span>
        </span>

        <div className="flex items-center gap-5 flex-wrap justify-center">
          {footerLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[12.5px] text-white/30 no-underline hover:text-white/60 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackOutboundClick(SITE.linkedin, 'LinkedIn')}
            className="text-white/30 hover:text-white/60 transition-colors"
          >
            <IconLinkedIn className="w-4 h-4" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 text-[12px] text-white/20">
          <span>© {new Date().getFullYear()} {SITE.name}. Data, Analytics & AI Consultant.</span>
          <span className="hidden md:inline">·</span>
          <div className="flex gap-3">
            <Link href="/privacy-policy" className="text-white/20 no-underline hover:text-white/40 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/20 no-underline hover:text-white/40 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
