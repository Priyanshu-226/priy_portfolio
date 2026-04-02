'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function Insights() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen">
      
      {/* Inject Fonts and Icons directly for single-file independence */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .asymmetric-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 8.5rem;
        }
        
        @media (max-width: 768px) {
          .asymmetric-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}} />

    

      <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
        {/* Editorial Header Section */}
        <header className="mb-24">
          <div className="asymmetric-grid items-end">
            <div>
              <span className="text-[#f0813a] text-[0.6875rem] font-bold uppercase tracking-[0.05em] mb-4 block">Archive & Analysis</span>
              <h1 className="text-[#182034] text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.02em]">Insights & Writing</h1>
            </div>
            <div className="pb-2">
              <p className="text-[#515f74] text-lg leading-relaxed max-w-xl">
                Observations on technology, policy, and human welfare. A collection of frameworks, critiques, and proposals at the intersection of computational logic and social equity.
              </p>
            </div>
          </div>
        </header>

        {/* Featured Insights: Tonal Layering */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article Card 1 */}
            <article className="group bg-[#ffffff] flex flex-col h-full border-t-4 border-[#3b1600] p-8 transition-all hover:bg-[#f2f4f6]">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#d5e3fd] text-[#57657b] px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider rounded">Housing Policy</span>
                <time className="text-slate-500 text-xs font-medium">October 24, 2025</time>
              </div>
              <h2 className="text-[#182034] text-xl font-bold leading-snug mb-4 group-hover:text-[#3b1600] transition-colors">The Impact of Algorithmic Rent-Setting on Housing Equity</h2>
              <p className="text-[#43474e] text-sm leading-relaxed mb-8 flex-grow">
                An examination of how automated valuation models and yield-management software are inadvertently institutionalizing pricing disparities in urban rental markets.
              </p>
              <Link className="inline-flex items-center text-[#182034] text-sm font-bold group-hover:gap-2 transition-all" href="#">
                Read Analysis <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </article>

            {/* Article Card 2 */}
            <article className="group bg-[#ffffff] flex flex-col h-full border-t-4 border-[#f0813a] p-8 transition-all hover:bg-[#f2f4f6]">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#ffb68e] text-[#763300] px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider rounded">Public Health</span>
                <time className="text-slate-500 text-xs font-medium">September 12, 2025</time>
              </div>
              <h2 className="text-[#182034] text-xl font-bold leading-snug mb-4 group-hover:text-[#f0813a] transition-colors">Frameworks for Combating Health Misinformation in Local Communities</h2>
              <p className="text-[#43474e] text-sm leading-relaxed mb-8 flex-grow">
                Proposing a localized, trust-first digital infrastructure to bridge the gap between scientific consensus and community-level healthcare delivery.
              </p>
              <Link className="inline-flex items-center text-[#182034] text-sm font-bold group-hover:gap-2 transition-all" href="#">
                Read Analysis <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </article>

            {/* Article Card 3 */}
            <article className="group bg-[#ffffff] flex flex-col h-full border-t-4 border-[#182034] p-8 transition-all hover:bg-[#f2f4f6]">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-[#d5e3fd] text-[#57657b] px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-wider rounded">AI Governance</span>
                <time className="text-slate-500 text-xs font-medium">August 05, 2025</time>
              </div>
              <h2 className="text-[#182034] text-xl font-bold leading-snug mb-4 group-hover:text-[#2e354a] transition-colors">Human-in-the-Loop Pipelines for Educational Data</h2>
              <p className="text-[#43474e] text-sm leading-relaxed mb-8 flex-grow">
                Evaluating the ethical imperatives of maintaining pedagogical oversight in automated grading and personalized learning systems for primary education.
              </p>
              <Link className="inline-flex items-center text-[#182034] text-sm font-bold group-hover:gap-2 transition-all" href="#">
                Read Analysis <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
              </Link>
            </article>
          </div>
        </section>

        {/* Newsletter / Subscribe Section: Glassmorphism + Tonal Shift */}
        <section className="bg-[#f2f4f6] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-30">
            <img alt="Areeb Uzzaman" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uihthbNiOtDY3BzVd_vF3L0dmKQ0YpW-Cg3zTtv3ohwrw3S8tAjPEmdSFF_pX2FiNUKtIr5s9zb_Y-N19XVfjnuUq2n6dP_u6rc1RDtavo9YPnPDFjkteii_NJHq5My_UXH_PWK8LXZweFx5ebG6RcfclzqveuLeZHNHpjDCx3HiBNgF-8GZEgBpvea8nBmvCg3_woiQkx1PUo7ZP1MMIcVOZJ40-RAVzJnVSGqpj6GO6w_hxoquyjqDt9pA3iwh4sE4q2yi3JcXgw" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-[#182034] text-2xl font-bold mb-4">Direct Policy Dispatches</h3>
            <p className="text-[#43474e] mb-8 text-lg">Stay informed on the latest research and policy critiques. No noise, just analysis.</p>
            <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-grow bg-[#ffffff] border-b-2 border-[#74777f] focus:border-[#182034] border-t-0 border-x-0 px-4 py-3 outline-none transition-colors" 
                placeholder="professional@organization.com" 
                type="email" 
              />
              <button className="bg-[#182034] text-[#ffffff] px-8 py-3 font-bold hover:bg-[#2e354a] transition-colors" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Archive List: Content defined by tonal shift, no lines */}
        <section className="mt-24">
          <h4 className="text-[#182034] text-sm font-bold uppercase tracking-widest mb-12 flex items-center gap-4">
            Prior Publications
            <div className="h-[1px] flex-grow bg-[#e6e8ea]"></div>
          </h4>
          <div className="space-y-4">
            <Link className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#ffffff] hover:bg-[#eceef0] transition-all" href="#">
              <div className="flex flex-col">
                <span className="text-xs text-[#f0813a] font-bold mb-1">Ethical Tech</span>
                <h5 className="text-lg font-bold text-[#182034]">The Myth of Neutral Algorithms in Social Welfare</h5>
              </div>
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <span className="text-slate-400 text-sm">Journal of Tech & Policy</span>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-[#182034] group-hover:translate-x-1 transition-all">arrow_outward</span>
              </div>
            </Link>
            
            <Link className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#ffffff] hover:bg-[#eceef0] transition-all" href="#">
              <div className="flex flex-col">
                <span className="text-xs text-[#f0813a] font-bold mb-1">Data Sovereignty</span>
                <h5 className="text-lg font-bold text-[#182034]">Decentralized Identities for Stateless Populations</h5>
              </div>
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <span className="text-slate-400 text-sm">Humanitarian Data Review</span>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-[#182034] group-hover:translate-x-1 transition-all">arrow_outward</span>
              </div>
            </Link>
            
            <Link className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-[#ffffff] hover:bg-[#eceef0] transition-all" href="#">
              <div className="flex flex-col">
                <span className="text-xs text-[#f0813a] font-bold mb-1">Smart Cities</span>
                <h5 className="text-lg font-bold text-[#182034]">Privacy Paradoxes in the Modern Surveillance State</h5>
              </div>
              <div className="flex items-center gap-8 mt-4 md:mt-0">
                <span className="text-slate-400 text-sm">Urban Governance Quarterly</span>
                <span className="material-symbols-outlined text-slate-300 group-hover:text-[#182034] group-hover:translate-x-1 transition-all">arrow_outward</span>
              </div>
            </Link>
          </div>
        </section>
      </main>

     
      {/* Google Translate Integration */}
      <div id="google_translate_element" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}></div>
      <Script
        id="google-translate-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,bn,de,ur,ar,hi,fa',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `,
        }}
      />
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}