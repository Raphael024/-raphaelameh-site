'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { IconArrowRight, IconArrowUp, SERVICE_ICONS } from '@/components/Icons';
import { SITE, SERVICES, CASE_STUDIES, INSIGHTS } from '@/lib/constants';

/* ── Eyebrow ── */
function Eyebrow({ children }) {
  return (
    <p className="text-[12.5px] font-semibold text-gold tracking-[0.14em] uppercase mb-4 flex items-center gap-3">
      <span className="w-7 h-[1.5px] bg-gold inline-block" />
      {children}
    </p>
  );
}

/* ── Animated Counter ── */
function Counter({ end, suffix = '' }) {
  const [n, setN] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    if (!started) return;
    let v = 0;
    const step = Math.max(1, Math.ceil(end / 60));
    const t = setInterval(() => { v += step; if (v >= end) { setN(end); clearInterval(t); } else setN(v); }, 20);
    return () => clearInterval(t);
  }, [started, end]);
  return <span ref={el => { if (el && !started) { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); o.disconnect(); } }, { threshold: 0.5 }); o.observe(el); } }}>{n}{suffix}</span>;
}

/* ══════════════════════════════════════════
   HERO
   ══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-6 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 80% 50% at 65% 15%, rgba(184,134,11,0.06) 0%, transparent 60%), #FAF9F6` }}>
      <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: `linear-gradient(#0F1B2D 1px, transparent 1px), linear-gradient(90deg, #0F1B2D 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />
      <div className="max-w-[1120px] mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
          <div>
            <Reveal><Eyebrow>{SITE.tagline}</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif text-[clamp(32px,4.6vw,50px)] font-bold leading-[1.15] text-navy tracking-tight mb-5">
                Most organisations have data.{' '}
                <span className="gold-underline">Very few have data that works.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-[17px] leading-[1.75] text-muted max-w-[500px] mb-8">
                Broken dashboards. Untrusted data. AI projects that never reach production. I fix the foundations, build what is missing, and deliver systems that actually work — from strategy through to production.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="flex gap-3 flex-wrap mb-3">
                <Link href="/contact" className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-white bg-navy px-6 py-3 rounded-lg no-underline shadow-[0_4px_14px_rgba(15,27,45,0.14)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(15,27,45,0.18)] transition-all">
                  Book a Free 30-Minute Strategy Call <IconArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link href="/checklist" className="inline-flex items-center text-[14.5px] font-semibold text-navy px-6 py-3 rounded-lg border-[1.5px] border-border no-underline hover:border-navy transition-colors">
                  Free: AI Readiness Checklist
                </Link>
              </div>
              <p className="text-[12.5px] text-muted/70 mb-8">No pitch. No obligation. Just an honest assessment of where you are.</p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="flex gap-2 flex-wrap">
                {['Data Engineering', 'Business Intelligence', 'Machine Learning', 'AI Applications', 'Marketing Analytics'].map((t) => (
                  <span key={t} className="text-[11.5px] font-medium text-navy-light bg-navy/[0.05] px-3 py-1 rounded-full border border-border-light">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Hero image */}
          <Reveal delay={0.1}>
            <div className="relative max-w-[400px] mx-auto lg:max-w-none">
              <div className="absolute -top-1.5 -right-1.5 -bottom-1.5 -left-1.5 rounded-[18px] border border-border opacity-45" />
              <div className="w-full aspect-[3/4] rounded-[14px] bg-gradient-to-br from-navy-mid to-navy overflow-hidden relative shadow-[0_36px_72px_rgba(15,27,45,0.12)]">
                {/* Replace with: <Image src="/images/hero.jpg" alt="Raphael Ameh" fill className="object-cover" priority /> */}
                <Image src="/images/hero.jpg" alt="Raphael Ameh — Data and AI Consultant" fill className="object-cover object-top" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-[72px] h-[72px] rounded-xl bg-gold opacity-[0.07]" />
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Reveal delay={0.4}>
          <div className="mt-14 grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden shadow-sm">
            {[
              { label: 'Years in Data & AI', value: <Counter end={5} suffix="+" /> },
              { label: 'Industries Served', value: <Counter end={6} suffix="+" /> },
              { label: 'Strategy → Production', value: 'End-to-End' },
            ].map((s, i) => (
              <div key={i} className="bg-white py-6 px-5 text-center">
                <div className="font-serif text-[28px] font-bold text-navy leading-none">{typeof s.value === 'string' ? <span className="text-base">{s.value}</span> : s.value}</div>
                <div className="text-[12.5px] text-muted mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PAIN POINTS
   ══════════════════════════════════════════ */
function PainPoints() {
  const items = [
    { q: "Why don't we trust our numbers?", a: "Your dashboards contradict each other. Your team spends more time cleaning data than analysing it. The issue is not your BI tool — it is what sits underneath it. Until the foundations are fixed, every report is a guess wearing a chart." },
    { q: "Can AI actually help us — or is it just noise?", a: "It can. But not if your data is unreliable, your use case is vague, or the solution is built to demo well rather than run in production. I start with the boring work — fixing your data — because that is what makes the exciting work actually land." },
    { q: "We have data everywhere but nobody can tell me what is driving performance.", a: "You do not need more dashboards. You need a measurement strategy that connects activity to outcomes and a reporting system your team trusts enough to act on. That is a design problem, not a technology problem." },
  ];
  return (
    <section className="bg-navy py-[72px] px-6 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.05), transparent 65%)' }} />
      <div className="max-w-[1120px] mx-auto relative">
        <Reveal><p className="text-xs font-semibold text-gold tracking-[0.14em] uppercase mb-7 text-center">For organisations asking</p></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white/[0.035] rounded-xl p-7 border border-white/[0.06] hover:border-gold/20 transition-colors h-full">
                <p className="font-serif text-[17px] italic text-white leading-snug mb-4">&ldquo;{p.q}&rdquo;</p>
                <p className="text-[13.5px] leading-[1.75] text-white/[0.48]">{p.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   SERVICES
   ══════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 bg-cream">
      <div className="max-w-[1120px] mx-auto">
        <Reveal><Eyebrow>Services</Eyebrow></Reveal>
        <Reveal delay={0.06}><h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.28] text-navy mb-2.5">Consulting built around outcomes. Not tool names.</h2></Reveal>
        <Reveal delay={0.1}><p className="text-base leading-[1.75] text-muted max-w-[560px] mb-12">Every engagement starts with a business problem. The approach is always the same: understand the problem, design the right solution, build it to production standard, and measure whether it worked.</p></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 0.06}>
                <div className="bg-white rounded-xl p-7 border border-border hover:border-gold/30 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(15,27,45,0.06)] transition-all h-full flex flex-col">
                  <div className="text-navy mb-3.5">{Icon && <Icon />}</div>
                  <h3 className="font-serif text-lg font-bold text-navy mb-2.5 leading-snug">{s.title}</h3>
                  <p className="text-sm leading-[1.75] text-muted mb-4 flex-1">{s.description}</p>
                  <div className="pt-3.5 border-t border-border-light">
                    <p className="text-[13px] leading-[1.65] text-navy font-medium">
                      <span className="text-gold font-bold text-[11px] tracking-wide uppercase">You walk away with: </span>
                      {s.deliverable}
                    </p>
                  </div>
                  <div className="flex gap-1.5 flex-wrap mt-4">
                    {s.tags.map((t) => <span key={t} className="text-[11px] font-medium text-navy-light bg-warm px-2 py-0.5 rounded">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   ENGAGEMENT MODELS
   ══════════════════════════════════════════ */
function EngagementModels() {
  const models = [
    { title: 'Audit', time: '2–4 weeks', desc: 'A structured assessment of your data, analytics, or AI readiness. Written report with findings and prioritised action plan. Full value as a standalone deliverable.', best: 'Organisations that want clarity before committing budget.' },
    { title: 'Project Build', time: '6–14 weeks', desc: 'A scoped engagement to design and build a specific system. Fixed scope, clear deliverables, production-ready output with documentation and handover.', best: 'Organisations that know what they need built.' },
    { title: 'Advisory', time: 'Ongoing', desc: 'Regular data and AI guidance. Architecture decisions, strategy direction, vendor evaluation, technical roadmap. Flexible commitment.', best: 'Growing businesses that need expertise without a full-time hire.' },
  ];
  return (
    <section className="py-24 px-6 bg-warm">
      <div className="max-w-[1120px] mx-auto">
        <Reveal><Eyebrow>Engagement Models</Eyebrow></Reveal>
        <Reveal delay={0.06}><h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.28] text-navy mb-12">Three ways to work together.</h2></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {models.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <div className="bg-white rounded-xl p-7 border border-border h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl font-bold text-navy">{m.title}</h3>
                  <span className="text-[11px] font-semibold text-gold bg-gold-soft px-3 py-1 rounded-full">{m.time}</span>
                </div>
                <p className="text-sm leading-[1.75] text-muted mb-4 flex-1">{m.desc}</p>
                <p className="text-[13px] text-navy font-medium pt-3 border-t border-border-light">
                  <span className="text-gold font-bold text-[11px] tracking-wide uppercase">Best for: </span>{m.best}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.3}>
          <p className="text-center mt-8">
            <Link href="/contact" className="text-sm font-semibold text-gold no-underline hover:text-navy transition-colors inline-flex items-center gap-2">
              Not sure which fits? Book a free 30-minute strategy call and I will tell you <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PROCESS
   ══════════════════════════════════════════ */
function Process() {
  const steps = [
    { p: 'Diagnose', d: 'Understand the business problem, current systems, data quality and opportunity before recommending anything.', w: 'Most failed data projects start with someone building before they understood what was broken. This step prevents that.' },
    { p: 'Design', d: 'Create the architecture, data flows, specifications, model approach or AI blueprint.', w: 'You see and approve the plan before a single line of code is written. This eliminates the most common cause of build failures.' },
    { p: 'Build', d: 'Engineer the pipelines, dashboards, models, APIs or AI systems to production-ready standards.', w: 'Not prototypes. Not proof-of-concepts. Systems that operate in your business from day one.' },
    { p: 'Measure', d: 'Track whether the solution improves decisions, saves time, or creates measurable value.', w: 'If it does not move a number that matters, it was not worth building.' },
  ];
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-[1120px] mx-auto">
        <Reveal><Eyebrow>How I Work</Eyebrow></Reveal>
        <Reveal delay={0.06}><h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.28] text-navy mb-2.5">Audit first. Build second. Measure always.</h2></Reveal>
        <Reveal delay={0.1}><p className="text-base leading-[1.75] text-muted max-w-[560px] mb-12">Every engagement follows the same discipline — because skipping steps is the single most expensive mistake in data and AI delivery.</p></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.p} delay={i * 0.1}>
              <div>
                <div className="w-14 h-14 rounded-full bg-white border-2 border-gold/20 flex items-center justify-center font-serif text-lg font-bold text-gold mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-serif text-[19px] font-bold text-navy mb-2">{s.p}</h3>
                <p className="text-[13.5px] leading-[1.7] text-muted mb-3">{s.d}</p>
                <p className="text-[13px] leading-[1.65] text-navy font-medium italic">{s.w}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   WHO I HELP
   ══════════════════════════════════════════ */
function WhoIHelp() {
  const personas = [
    { r: 'Heads of Data & Analytics', p: 'Inherited messy pipelines, unreliable dashboards, or no data strategy. Need a partner who can fix what is broken and deliver results.' },
    { r: 'CTOs & Technical Leaders', p: "Need AI or ML capabilities but don't have the in-house team. Need someone who goes from business case to production model." },
    { r: 'Founders & Managing Directors', p: "Know data matters but not sure where to start or who to trust. Need honest guidance, not a sales pitch." },
    { r: 'Marketing & Commercial Leaders', p: "Can't prove what's working because measurement is broken. Need analytics that connects spend to revenue." },
  ];
  return (
    <section className="py-24 px-6 bg-warm">
      <div className="max-w-[1120px] mx-auto">
        <Reveal><Eyebrow>Who I Help</Eyebrow></Reveal>
        <Reveal delay={0.06}><h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.28] text-navy mb-11">I work with leaders who know data matters but need help making it work.</h2></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personas.map((p, i) => (
            <Reveal key={p.r} delay={i * 0.07}>
              <div className="flex gap-4 p-5 rounded-xl border border-border bg-white hover:border-gold/30 transition-colors h-full">
                <div className="w-10 h-10 min-w-[40px] rounded-lg bg-gold-soft flex items-center justify-center text-gold text-sm font-bold font-serif">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-navy mb-1">{p.r}</h3>
                  <p className="text-[13.5px] leading-[1.65] text-muted">{p.p}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CASE STUDIES
   ══════════════════════════════════════════ */
function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-6 bg-cream">
      <div className="max-w-[1120px] mx-auto">
        <Reveal><Eyebrow>Selected Work</Eyebrow></Reveal>
        <Reveal delay={0.06}><h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.28] text-navy mb-2.5">Built across analytics, ML, APIs and AI.</h2></Reveal>
        <Reveal delay={0.1}><p className="text-[14.5px] leading-[1.7] text-muted max-w-[600px] mb-11">All projects shown anonymously. The focus is always on the problem, the system built, and the outcome.</p></Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASE_STUDIES.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="bg-white rounded-xl p-6 border border-border hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,27,45,0.05)] transition-all h-full flex flex-col">
                <p className="text-[11px] font-medium text-gold tracking-wide mb-2.5">{p.tags}</p>
                <h3 className="font-serif text-[17px] font-bold text-navy mb-2.5 leading-snug">{p.title}</h3>
                <p className="text-[13.5px] leading-[1.7] text-muted mb-4 flex-1">{p.description}</p>
                <div className="border-t border-border-light pt-3.5">
                  <p className="text-[12px] font-semibold text-gold tracking-wide uppercase mb-1">Outcome</p>
                  <p className="text-[13px] leading-[1.6] text-navy font-medium">{p.outcome}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   INSIGHTS
   ══════════════════════════════════════════ */
function InsightsSection() {
  return (
    <section id="insights" className="py-24 px-6 bg-warm">
      <div className="max-w-[1120px] mx-auto">
        <Reveal><Eyebrow>Insights</Eyebrow></Reveal>
        <Reveal delay={0.06}><h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.28] text-navy mb-11">Thinking on data, analytics and AI.</h2></Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INSIGHTS.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <div className="bg-white rounded-xl p-6 border border-border hover:border-gold/30 hover:-translate-y-0.5 transition-all cursor-pointer h-full flex flex-col">
                <span className="text-[11px] font-semibold text-gold tracking-wide uppercase mb-3">{a.tag}</span>
                <h3 className="font-serif text-[17px] font-bold text-navy mb-2.5 leading-[1.35] flex-1">{a.title}</h3>
                <p className="text-[13.5px] leading-[1.65] text-muted mb-4">{a.excerpt}</p>
                <span className="text-[13px] font-semibold text-navy flex items-center gap-1.5">
                  Read article <IconArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   ABOUT PREVIEW
   ══════════════════════════════════════════ */
function AboutPreview() {
  return (
    <section id="about" className="py-24 px-6 bg-cream">
      <div className="max-w-[1120px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[14px] bg-gradient-to-br from-navy-mid to-navy overflow-hidden shadow-[0_28px_56px_rgba(15,27,45,0.11)]">
                {/* Replace with: <Image src="/images/about.jpg" alt="Raphael Ameh" fill className="object-cover" /> */}
                <Image src="/images/about.jpg" alt="Raphael Ameh" fill className="object-cover object-top" />
              </div>
              <div className="absolute -bottom-2.5 -right-2.5 w-20 h-20 rounded-xl border-2 border-gold/10" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div>
              <Eyebrow>About Raphael</Eyebrow>
              <h2 className="font-serif text-[clamp(26px,3.5vw,34px)] font-bold leading-[1.3] text-navy mb-6">
                Technical depth. Commercial thinking. End-to-end delivery.
              </h2>
              <div className="space-y-3.5">
                <p className="text-[15px] leading-[1.8] text-muted">I work across the full data and AI lifecycle: strategy, architecture, engineering, analytics, machine learning, generative AI and production deployment.</p>
                <p className="text-[15px] leading-[1.8] text-muted">My background spans retail, e-commerce, financial services, NGOs, media, marketing and cyber security — building and delivering in environments where the data was messy, the requirements were unclear, and the pressure to ship was real.</p>
                <p className="text-[15px] leading-[1.8] text-navy font-medium border-l-[3px] border-gold/30 pl-4 mt-1">
                  I believe most data and AI projects fail not because the technology is wrong, but because the foundations were skipped. My approach is to fix the foundations first, build to production standard always, and measure whether the work delivered value — not assume it did.
                </p>
                <p className="text-[15px] leading-[1.8] text-muted">
                  I diagnose why your reports don&apos;t match. I rebuild the pipeline underneath. I design the dashboard on top. I train the model that predicts what happens next. I build the AI tool that acts on it. One person. One engagement. Everything connected.
                </p>
              </div>
              <p className="text-sm text-muted mt-5 italic">
                Available for speaking engagements — conference talks, panels, podcasts, and workshops.{' '}
                <Link href="/contact" className="text-gold font-semibold no-underline">Get in touch →</Link>
              </p>
              <div className="flex gap-1.5 flex-wrap mt-5">
                {['Python', 'SQL', 'AWS', 'Azure', 'Redshift', 'Fabric', 'Power BI', 'Tableau', 'XGBoost', 'LLMs', 'GA4', 'R'].map((t) => (
                  <span key={t} className="text-[11.5px] font-medium text-navy-light bg-navy/[0.04] px-2.5 py-1 rounded border border-border-light">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FAQ
   ══════════════════════════════════════════ */
function FAQ() {
  const questions = [
    { q: 'How is working with you different from hiring a freelancer or an agency?', a: 'A freelancer gives you their time. An agency gives you a team you have never met. I give you one person who owns the outcome from diagnosis through to production — the same person who scoped the work is the person who builds it. No handoffs, no junior substitutions, no project manager sitting between you and the person doing the work.' },
    { q: 'What does a typical engagement cost?', a: 'Audits start in the low thousands. Project builds range from mid four figures to mid five figures depending on complexity and duration. Advisory is a monthly commitment scaled to your needs. Book a call and I will give you a realistic number for your situation within the first ten minutes.' },
    { q: 'Do you work with businesses outside the UK?', a: 'Yes. I work with organisations across the UK, Nigeria, Africa, and internationally. Most of my work is delivered remotely. If your business has a data or AI problem, geography is not a barrier.' },
    { q: 'Can you really cover data engineering, analytics, ML, and AI?', a: 'It is broad. That is the point. Most data problems do not sit neatly inside one discipline. A broken dashboard is often a data engineering problem. An AI initiative that stalls usually has a data quality root cause. I work across the full stack because that is what the work actually demands — and because having one person who understands the whole picture means fewer handoffs and faster delivery.' },
    { q: "What if I don't know what I need yet?", a: 'That is exactly what the audit is for. I assess where you are, identify what is broken or missing, and produce a prioritised recommendation. You then decide what to act on. No pressure, no obligation to continue.' },
  ];
  return (
    <section className="py-24 px-6 bg-warm">
      <div className="max-w-[760px] mx-auto">
        <Reveal><Eyebrow>Common Questions</Eyebrow></Reveal>
        <Reveal delay={0.06}><h2 className="font-serif text-[clamp(26px,3.6vw,38px)] font-bold leading-[1.28] text-navy mb-12">Straight answers to the things you are probably thinking.</h2></Reveal>
        <div className="space-y-8">
          {questions.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div>
                <h3 className="font-serif text-[17px] font-bold text-navy mb-2 leading-snug">&ldquo;{q.q}&rdquo;</h3>
                <p className="text-[14.5px] leading-[1.75] text-muted">{q.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   CTA
   ══════════════════════════════════════════ */
function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 bg-navy relative overflow-hidden">
      <div className="absolute -top-28 -right-14 w-[420px] h-[420px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.06), transparent 60%)' }} />
      <div className="max-w-[640px] mx-auto text-center relative">
        <Reveal>
          <p className="text-xs font-semibold text-gold tracking-[0.14em] uppercase mb-5">Start Here</p>
          <h2 className="font-serif text-[clamp(26px,3.8vw,40px)] font-bold leading-[1.25] text-white mb-5">Book a discovery call.</h2>
          <p className="text-[15.5px] leading-[1.7] text-white/50 max-w-[500px] mx-auto mb-2">
            Thirty minutes. You tell me what is happening. I tell you what I would do about it. If there is a fit, we scope it. If not, you leave with a clearer picture than you walked in with.
          </p>
          <p className="text-[15.5px] leading-[1.7] text-white/50 mb-9">No pitch. No obligation. No slide decks.</p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy bg-white px-7 py-3.5 rounded-lg no-underline shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(0,0,0,0.16)] transition-all">
              Book a Free 30-Minute Strategy Call <IconArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center text-[14.5px] font-medium text-white/70 px-7 py-3.5 rounded-lg border-[1.5px] border-white/15 no-underline hover:border-white/40 transition-colors">
              {SITE.email}
            </a>
          </div>
          <p className="text-[12px] text-white/30 mt-4">I will tell you honestly if I can help — and if I cannot, I will point you to someone who can.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   BACK TO TOP
   ══════════════════════════════════════════ */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const h = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-[900] w-[42px] h-[42px] rounded-xl bg-navy border-none cursor-pointer flex items-center justify-center shadow-[0_4px_14px_rgba(15,27,45,0.2)] hover:bg-gold transition-colors text-white"
      aria-label="Back to top"
    >
      <IconArrowUp className="w-[17px] h-[17px]" />
    </button>
  );
}

/* ══════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <ServicesSection />
      <EngagementModels />
      <Process />
      <WhoIHelp />
      <CaseStudiesSection />
      <InsightsSection />
      <AboutPreview />
      <FAQ />
      <CTASection />
      <BackToTop />
    </>
  );
}
