import { SITE } from '@/lib/constants';
import { TrackedAnchor } from '@/components/Tracked';
export const metadata = { title: 'Book a Discovery Call', description: 'Book a free 30-minute strategy call.' };
export default function ContactPage() {
  return (<section className="pt-32 pb-24 px-6 bg-cream min-h-screen"><div className="max-w-[640px] mx-auto text-center"><p className="text-[12.5px] font-semibold text-gold tracking-[0.14em] uppercase mb-4">Start Here</p><h1 className="font-serif text-[clamp(28px,4vw,42px)] font-bold leading-[1.25] text-navy mb-6">Book a free 30-minute strategy call.</h1><p className="text-base leading-[1.75] text-muted mb-12 max-w-[500px] mx-auto">Thirty minutes. You tell me what is happening. I tell you what I would do about it.</p><div className="border-2 border-dashed border-border rounded-2xl p-16 mb-8"><p className="text-muted text-sm">Cal.com or Calendly embed goes here</p></div><p className="text-muted text-sm">Prefer email? <TrackedAnchor href={`mailto:${SITE.email}`} track={{ fn: 'trackCTAClick', args: ['email', 'contact'] }} className="text-gold font-semibold no-underline">{SITE.email}</TrackedAnchor></p></div></section>);
}
