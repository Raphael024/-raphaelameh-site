import { SERVICES } from '@/lib/constants';
import Link from 'next/link';
import { TrackedLink, TrackOnMount } from '@/components/Tracked';
const service = SERVICES.find(s => s.slug === 'ai-applications');
export const metadata = { title: service?.metaTitle, description: service?.metaDesc };
export default function ServicePage() {
  if (!service) return null;
  return (<section className="pt-32 pb-24 px-6 bg-cream"><TrackOnMount track={{ fn: 'trackServiceInterest', args: [service.slug] }} /><div className="max-w-[760px] mx-auto"><Link href="/#services" className="text-sm text-muted no-underline hover:text-navy mb-6 inline-block">← All Services</Link><p className="text-[12.5px] font-semibold text-gold tracking-[0.14em] uppercase mb-4">Service</p><h1 className="font-serif text-[clamp(28px,4vw,42px)] font-bold text-navy mb-6">{service.title}</h1><p className="text-[17px] leading-[1.8] text-muted mb-8">{service.description}</p><div className="bg-white rounded-xl p-8 border border-border mb-8"><p className="text-gold font-bold text-[11px] tracking-wide uppercase mb-2">What you walk away with</p><p className="text-[15px] leading-[1.75] text-navy font-medium">{service.deliverable}</p></div><div className="border-t border-border pt-8 text-center"><TrackedLink href="/contact" track={{ fn: 'trackCTAClick', args: ['book_call', 'services'] }} className="inline-flex text-sm font-semibold text-white bg-navy px-6 py-3 rounded-lg no-underline">Book a Free Strategy Call</TrackedLink></div></div></section>);
}
