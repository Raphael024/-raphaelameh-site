import { SERVICES } from '@/lib/constants';
import Link from 'next/link';
export const metadata = { title: 'Services', description: 'Data & AI consulting services.' };
export default function ServicesPage() {
  return (<section className="pt-32 pb-24 px-6 bg-cream"><div className="max-w-[1120px] mx-auto"><h1 className="font-serif text-[clamp(28px,4vw,42px)] font-bold text-navy mb-14">Services</h1><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{SERVICES.map(s=>(<Link key={s.slug} href={`/services/${s.slug}`} className="bg-white rounded-xl p-7 border border-border hover:border-gold/30 transition-all no-underline flex flex-col"><h2 className="font-serif text-lg font-bold text-navy mb-2">{s.title}</h2><p className="text-sm leading-[1.75] text-muted flex-1 mb-4">{s.shortDesc}</p><span className="text-sm font-semibold text-gold">Learn more →</span></Link>))}</div></div></section>);
}
