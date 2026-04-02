'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function Experience() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] selection:bg-[#ffdbca] selection:text-[#331200] min-h-screen">
      
      {/* Inject Fonts and Icons directly for single-file independence */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}} />



      <main className="max-w-7xl mx-auto px-8 py-20">
        {/* Hero Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[#f0813a] font-bold tracking-widest text-[0.6875rem] uppercase mb-4">CURRICULUM VITAE</p>
            <h1 className="text-[#182034] text-[3.5rem] font-extrabold tracking-tighter leading-tight mb-6">Professional Trajectory</h1>
            <p className="text-[#43474e] text-lg leading-relaxed max-w-xl">
              An overview of my contributions across strategic operations, institutional research, and clinical engineering within the global health and higher education sectors.
            </p>
          </div>
          <div className="pb-2">
            <Link className="inline-flex items-center gap-3 bg-[#182034] text-[#ffffff] px-8 py-4 rounded-md font-semibold hover:opacity-90 transition-all active:scale-95 shadow-[0_10px_40px_rgba(24,32,52,0.1)]" href="#">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>download</span>
              Download Full Resume (PDF)
            </Link>
          </div>
        </header>

        {/* Timeline Section */}
        <section className="space-y-20 relative">
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#c4c6cf] opacity-20 hidden md:block"></div>
          
          {/* Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start group">
            <div className="md:text-right md:pr-16 order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-[#ffdbca] text-[#331200] text-sm font-bold rounded mb-4">
                2023 – 2025
              </div>
              <h3 className="text-2xl font-bold text-[#182034] mb-2">Health and Education for All (HAEFA)</h3>
              <p className="text-[#f0813a] font-semibold italic mb-6">Project Lead & Strategic Operations</p>
              <div className="space-y-4 md:flex md:flex-col md:items-end">
                <ul className="text-[#43474e] space-y-3 leading-relaxed max-w-lg">
                  <li className="flex gap-3 md:flex-row-reverse">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">check_circle</span>
                    Directed digital transformations and modernization of operational workflows for global health initiatives.
                  </li>
                  <li className="flex gap-3 md:flex-row-reverse">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">check_circle</span>
                    Secured official Meta nonprofit verification, significantly expanding digital outreach and fundraising capacity.
                  </li>
                  <li className="flex gap-3 md:flex-row-reverse">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">check_circle</span>
                    Produced "Ignited Tears" documentary, highlighting humanitarian efforts in resource-limited settings.
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden bg-[#f2f4f6] shadow-sm hover:shadow-md transition-shadow">
                <img alt="HAEFA Projects" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt0cVEtQzZMcz-AFwjS-UtTGr3w2OnqfrpgGoqinsqQcNl5tO3Ap1Rg5GouHT_89sBkAr3gdcOgc_Mz2mhk2GTM3eX_4-CYf7ROGnfuSolwROVLJOTO_dmKQM4cNEJ7HtaegbiJd-IMArg5zC4Sd9UqmVHqW-V-xLdFEYB8bHg9TSuaXOkrSmaVG91KklI_FqFnkmpWOEodlHjIN4tlwkziBExmwh2id7cFWmKpzz0vrWf11WEsbgfcyoYChksozjYM9Pzo7K_bW6L" />
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start group">
            <div className="md:pl-16 md:border-l md:border-[#c4c6cf]/30">
              <div className="inline-block px-3 py-1 bg-[#d5e3fd] text-[#57657b] text-sm font-bold rounded mb-4">
                2025
              </div>
              <h3 className="text-2xl font-bold text-[#182034] mb-2">Brown University</h3>
              <p className="text-[#f0813a] font-semibold italic mb-6">Research Strategy Intern | Office of Research Strategy & Development</p>
              <div className="space-y-4">
                <ul className="text-[#43474e] space-y-3 leading-relaxed max-w-lg">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">verified</span>
                    Overhauled institutional funding pipeline to streamline multi-disciplinary grant applications.
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">verified</span>
                    Benchmarked 20 international foundations to identify strategic growth opportunities for research funding.
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">verified</span>
                    Established a Comprehensive Proposal Library to serve as a high-value resource for faculty and investigators.
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#ffffff] p-8 rounded-xl border-t-4 border-[#3b1600] shadow-[0_10px_40px_rgba(24,32,52,0.04)]">
              <h4 className="text-[#182034] font-bold mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                <span className="material-symbols-outlined text-sm">analytics</span> Strategic Focus
              </h4>
              <p className="text-[#43474e] italic mb-6">"Bridging the gap between academic innovation and fiscal sustainability through data-driven strategy."</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#e0e3e5] px-3 py-1 text-[0.6875rem] font-bold uppercase rounded">Benchmarking</span>
                <span className="bg-[#e0e3e5] px-3 py-1 text-[0.6875rem] font-bold uppercase rounded">Grant Strategy</span>
                <span className="bg-[#e0e3e5] px-3 py-1 text-[0.6875rem] font-bold uppercase rounded">Institutional Growth</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start group">
            <div className="md:text-right md:pr-16 order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-[#ffb68e] text-[#763300] text-sm font-bold rounded mb-4">
                2025
              </div>
              <h3 className="text-2xl font-bold text-[#182034] mb-2">Children's Specialized Hospital</h3>
              <p className="text-[#f0813a] font-semibold italic mb-6">CDID Intern</p>
              <div className="space-y-4 md:flex md:flex-col md:items-end">
                <ul className="text-[#43474e] space-y-3 leading-relaxed max-w-lg">
                  <li className="flex gap-3 md:flex-row-reverse">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">emergency</span>
                    Engineered clinical trial proposal for Embrace2 wearable, focusing on pediatric neuro-monitoring.
                  </li>
                  <li className="flex gap-3 md:flex-row-reverse">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">emergency</span>
                    Authored comprehensive white paper on AI integration in pediatric rehabilitation frameworks.
                  </li>
                  <li className="flex gap-3 md:flex-row-reverse">
                    <span className="material-symbols-outlined text-[#182034] text-sm mt-1">emergency</span>
                    Developed research protocols for investigating efficacy of next-gen digital health interventions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden bg-[#f2f4f6] shadow-sm hover:shadow-md transition-shadow">
                <img alt="Clinical Research" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8YH6yfgWfuvuQJEgqPZadzK2i04NSdwJqzkWhXlSPKRSWoXGu8ppv_rc7T221vLNlpOnwNS5ArxVE2Z-ovz0qRMTBZO9LPF0IpCNObpTvOUjSe_kcoIPn-SJSWJsEONn41vwYMzkDIHgJQMnamf2980vG6Tw7nGd1gpNAEcJiT_faJKpkXurFFPGOK-eJvdPMhSAcuIcK8ulweC97vDMe90gkAwK1lWfBE4oz1X9FGBQ1ut6zpgkvklsnA0qEngx_ePaxWzKci3dy" />
              </div>
            </div>
          </div>
        </section>

        {/* Endorsements Section */}
        <section className="mt-32">
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-[#f0813a] font-bold tracking-widest text-[0.6875rem] uppercase mb-4">PROFESSIONAL ENDORSEMENTS</p>
            <h2 className="text-3xl font-extrabold text-[#182034] tracking-tighter">What Leaders Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[#f2f4f6] p-8 rounded-xl border-l-2 border-[#f0813a] relative">
              <span className="material-symbols-outlined text-[#f0813a]/30 absolute top-4 right-6 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="text-[#43474e] italic leading-relaxed mb-8 relative z-10">
                "Areeb stands out as a driven, compassionate, and forward-thinking individual, marrying technical skills with a sincere dedication to social betterment."
              </p>
              <div>
                <p className="text-[#182034] font-bold text-sm">Dr. Tremayne Waller</p>
                <p className="text-[#43474e] text-xs mt-1">Director of Graduate Student Programs, Virginia Tech College of Engineering</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-[#f2f4f6] p-8 rounded-xl border-l-2 border-[#f0813a] relative">
              <span className="material-symbols-outlined text-[#f0813a]/30 absolute top-4 right-6 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="text-[#43474e] italic leading-relaxed mb-8 relative z-10">
                "Mr. Uzzaman is characterized by immense energy, dedication, initiative, leadership, and sincerity—all underpinned by a profound commitment to positive social impact..."
              </p>
              <div>
                <p className="text-[#182034] font-bold text-sm">Dr. Ruhul Abid, MD, PhD</p>
                <p className="text-[#43474e] text-xs mt-1 leading-tight">Associate Professor, Brown University Alpert Medical School; President, HAEFA</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-[#f2f4f6] p-8 rounded-xl border-l-2 border-[#f0813a] relative">
              <span className="material-symbols-outlined text-[#f0813a]/30 absolute top-4 right-6 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
              <p className="text-[#43474e] italic leading-relaxed mb-8 relative z-10">
                "Areeb's collaborative nature and communication skills showed that he was not just a great intern, but will be a great employee for any organization..."
              </p>
              <div>
                <p className="text-[#182034] font-bold text-sm">Jimmy Weller</p>
                <p className="text-[#43474e] text-xs mt-1">Director, CDID, Children's Specialized Hospital</p>
              </div>
            </div>
          </div>
          <p className="text-center text-[#43474e] text-[0.6875rem] font-medium mt-8 opacity-60">
            Full, signed letters of recommendation and references available upon request.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mt-32 pt-24 border-t border-[#c4c6cf]/10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold text-[#182034] tracking-tighter mb-6">Comprehensive Background</h2>
          <p className="text-[#43474e] max-w-xl mb-10 leading-relaxed">
            For a complete list of publications, certifications, and technical proficiencies, please access the full professional documentation.
          </p>
          <Link className="inline-flex items-center gap-3 bg-[#ffdbca] text-[#331200] px-10 py-5 rounded-md font-bold hover:bg-[#ffb68e] transition-all active:scale-95 shadow-sm" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
            Download Full Resume (PDF)
          </Link>
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