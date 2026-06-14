import { INSIGHTS } from '@/lib/constants';
export const metadata = { title: 'Insights', description: 'Articles on data, analytics, ML, and AI.' };
export default function InsightsPage() {
  return (<section className="pt-32 pb-24 px-6 bg-cream"><div className="max-w-[860px] mx-auto"><h1 className="font-serif text-[clamp(28px,4vw,42px)] font-bold text-navy mb-14">Insights</h1><div className="space-y-6">{INSIGHTS.map(a=>(<article key={a.slug} className="bg-white rounded-xl p-8 border border-border"><span className="text-[11px] font-semibold text-gold tracking-wide uppercase">{a.tag}</span><h2 className="font-serif text-xl font-bold text-navy mt-2 mb-3">{a.title}</h2><p className="text-[15px] leading-[1.75] text-muted">{a.excerpt}</p></article>))}</div></div></section>);
}
