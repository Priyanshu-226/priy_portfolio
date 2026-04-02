'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] selection:bg-[#ffdbca] selection:text-[#331200] min-h-screen">
      
      {/* Inject Fonts and Icons directly for single-file independence */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body { font-family: 'Inter', sans-serif; }
      `}} />

     

      <main className="pt-24">
        {/* Section 1: Hero - Origin Narrative */}
        <section className="max-w-7xl mx-auto px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7 space-y-8">
              <span className="inline-block px-3 py-1 bg-[#ffdbca] text-[#331200] text-[0.6875rem] uppercase tracking-widest font-bold rounded-sm">
                Origin Narrative
              </span>
              <h1 className="text-[#182034] text-5xl md:text-[3.5rem] leading-[1.1] font-extrabold tracking-tighter max-w-2xl">
                Curiosity, Resilience, and Systems-Level Thinking.
              </h1>
              <div className="max-w-xl">
                <p className="text-[#43474e] leading-[1.6] text-lg font-['Inter']">
                  My journey into data architecture and public policy didn't begin in a classroom—it began with a question about my family's history. At 18, while drafting an essay on the 1947 Bengali Language Movement, I uncovered lost connections to vital political figures in the Indian subcontinent.
                </p>
              </div>
              <div className="pt-4">
                <button className="flex items-center gap-3 text-[#182034] font-bold group">
                  <span className="text-sm uppercase tracking-widest">Read the Full Narrative</span>
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
                </button>
              </div>
            </div>
            
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-[#e0e3e5] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  alt="Areeb Uzzaman speaking at a professional podium" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiToTjl1Znvh02dGOAIvRBQc74spK7594ZmLfp1eF_RzZU0Z0Q773tQXMI-eM3zdiPB774XWJLDSmVr8bwyTVnWuqQdCBFeb8Id-wJaOjcGrZoypgEwv70gGU1hrOCdE7FnQvJT-h218WX7QNUkUeT2M9SFyBaxNJnmwU6WXB_xIE4zpZRYolPqoR5HvYpiaFARZEy6ZPhrFJiHbJPnO5xkMkyu_FBh6Hg2TvD3jn3M6CHN5IcGVXH6pTtUAwRObRN5uTOb8vKd-18" 
                />
              </div>
              {/* Tonal Layering Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#ffb68e]/30 -z-10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Section 2: The 500-Year Archive Project */}
        <section className="bg-[#f2f4f6] py-32">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="aspect-[3/4] bg-[#182034] rounded-xl overflow-hidden shadow-xl border-t-4 border-[#f0813a]">
                  <img 
                    alt="Areeb researching in a grand library" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida/ADBb0ujYDmZ9sLXGSpHXiKUuSBGPkZsMPEeylaflpiFEpXJEsg6blHf57pycywCyh11A6SvMWlfC_yuIdBKzScAAlmhfJPCFGKSPA8XyLX4Mg-iUmyEy7r6LRo9Xwy-RD5L12KN25I0Aubrl-V12_8PTeUw3SFDEbl07E94ej5-O0NGFs47C8mOZI0WIIQ9nsF722lMERAOSfXU4DXP2pQh6CBrxWcRgh-vMx__auQzQZDL9j2yAOSzmSzmWwIwGfia8uioGklk9tZMXKpM" 
                  />
                </div>
              </div>
              <div className="md:col-span-7 order-1 md:order-2 pb-12">
                <div className="space-y-8 pl-0 md:pl-16">
                  <h2 className="text-[#182034] text-4xl md:text-[2.75rem] font-bold tracking-tight">Architecting the Past.</h2>
                  <p className="text-[#43474e] text-lg leading-[1.6]">
                    What started as a personal inquiry grew into the Independent Archival Research Project. Over three years, I architected a verified lineage database of over 3,100 individuals, navigating the complexities of 500 years of historical data.
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-[#f0813a] tracking-tighter">3,100+</div>
                      <div className="text-[0.6875rem] uppercase tracking-widest text-[#515f74] font-semibold">Verified Records</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-[#f0813a] tracking-tighter">500 yrs</div>
                      <div className="text-[0.6875rem] uppercase tracking-widest text-[#515f74] font-semibold">Temporal Scope</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Ethos (Off the Desk) */}
        <section className="py-32 bg-[#f7f9fb]">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-[#ffffff] p-12 md:p-20 rounded-2xl shadow-sm border-t-4 border-[#3b1600]">
              <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-7 space-y-10">
                  <div className="space-y-4">
                    <span className="text-[#f0813a] font-bold text-xs uppercase tracking-[0.2em]">Personal Discipline</span>
                    <h2 className="text-[#182034] text-3xl md:text-4xl font-bold tracking-tight">The Discipline of Continuous Improvement.</h2>
                  </div>
                  <p className="text-[#43474e] text-lg leading-[1.8]">
                    Whether I am analyzing algorithmic rent-setting policies or reconstructing genealogical nodes, my approach remains the same: sustained dedication yields results. Through a strict dedication to strength training and weightlifting, I maintain the mental fortitude required for deep analytical work.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 bg-[#d5e3fd] text-[#57657b] text-xs font-bold rounded-lg uppercase">Data Architecture</span>
                    <span className="px-4 py-2 bg-[#d5e3fd] text-[#57657b] text-xs font-bold rounded-lg uppercase">Public Policy</span>
                    <span className="px-4 py-2 bg-[#ffb68e] text-[#763300] text-xs font-bold rounded-lg uppercase">Strength Training</span>
                  </div>
                </div>
                
                <div className="md:col-span-5">
                  <div className="aspect-square bg-[#f2f4f6] rounded-full overflow-hidden border-8 border-white shadow-xl relative group">
                    <img 
                      alt="Areeb Uzzaman with a baby goat" 
                      className="w-full h-full object-cover transition-all duration-700" 
                      src="https://lh3.googleusercontent.com/aida/ADBb0uiVEmUctN3xkJzP6rJN19nHaYrB92hf6xhVUUoeD1fQjvifvBeObRMe8FY2590J7iA7--IRV9rRql66aXo2PKMP9gx2zNykC5iD04YCCipyILvFRN-H2pUg3I2axfoKjp1tc9KjWBygAIjK73vfq0uTAi8N5kv1HtiJ9AYrWyM04bLEo6VP1kApNK71EmWSVtmtWvM1rR_mjcxAFA_QYVtt0ik1tNADfPlsVnTCNeuYyQjPqK_sXTG2dSGziNwjVBtQrR6BLrKSPQY" 
                    />
                    <div className="absolute inset-0 bg-[#182034]/10 mix-blend-multiply opacity-0 transition-opacity"></div>
                  </div>
                </div>
              </div>
            </div>
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