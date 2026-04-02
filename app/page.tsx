'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="selection:bg-[#ffdbca] selection:text-[#331200] bg-[#f7f9fb] text-[#191c1e] min-h-screen">
      
      {/* Inject Fonts and Icons directly for single-file independence */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}} />

      {/* TopNavBar */}
      

      <main className="">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-8 md:px-24 overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f2f4f6] -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
          
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d5e3fd] text-[#57657b] text-[0.6875rem] font-bold tracking-wider mb-6">
                <span className="w-2 h-2 rounded-full bg-[#3b1600]"></span>
                MASTER OF PUBLIC AFFAIRS CANDIDATE @ BROWN UNIVERSITY
              </div>
              <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.1] tracking-tighter text-[#182034] mb-8">
                Bridging Data, Policy, and <span className="text-[#5c2600] italic">Humanitarian Impact.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#43474e] leading-relaxed max-w-2xl mb-10">
                Designing human-in-the-loop pipelines, strategic policy frameworks, and optimized operational logistics to uplift underserved communities.
              </p>
              
              {/* Certification Badges */}
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="bg-[#182034] text-[#ffffff] px-5 py-3 rounded-lg flex items-center gap-3 shadow-lg">
                  <span className="font-bold text-lg">PMP</span>
                  <div className="w-px h-6 bg-[#ffffff] opacity-20"></div>
                  <span className="text-[0.6875rem] tracking-widest uppercase opacity-80">Project Management</span>
                </div>
                <div className="bg-[#ffffff] text-[#182034] border-l-4 border-[#3b1600] px-5 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <span className="font-bold text-lg">LSSBB</span>
                  <div className="w-px h-6 bg-[#182034] opacity-20"></div>
                  <span className="text-[0.6875rem] tracking-widest uppercase opacity-80">Lean Six Sigma</span>
                </div>
                <div className="bg-[#ffffff] text-[#182034] border-l-4 border-[#3b1600] px-5 py-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <span className="font-bold text-lg">PSM I</span>
                  <div className="w-px h-6 bg-[#182034] opacity-20"></div>
                  <span className="text-[0.6875rem] tracking-widest uppercase opacity-80">Professional Scrum</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#182034] text-[#ffffff] px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all flex items-center gap-2">
                  Explore Projects <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-[#ffdbca] text-[#331200] px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all">
                  Contact
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img alt="Professional portrait of Areeb Uzzaman" className="w-full h-full object-cover" src="/main.png" />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#182034]/80 to-transparent text-[#ffffff]">
                  <p className="text-sm font-medium opacity-90">Current Engagement</p>
                  <p className="text-lg font-bold">Policy & Data Architecture Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-24 bg-[#f2f4f6]">
          <div className="max-w-7xl mx-auto px-8 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-[8.5rem] items-start">
              <div className="pt-4">
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#f0813a] uppercase mb-4">The Architect's Ethos</h2>
                <h3 className="text-3xl font-bold text-[#182034] leading-tight">Proactive Dedication to Social Betterment.</h3>
              </div>
              <div className="space-y-8">
                <p className="text-lg text-[#191c1e] leading-relaxed">
                  I operate at the intersection of technical precision and human empathy. My work focuses on building the invisible infrastructure—data pipelines and policy frameworks—that empowers local governments and NGOs to react faster to humanitarian crises. By optimizing operational logistics through Lean Six Sigma methodologies, I ensure that resources reach those who need them most with minimal friction and maximum accountability.
                </p>
                <button className="flex items-center gap-2 text-[#182034] font-bold group">
                  View Full Experience & Resume 
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">east</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Impact Section */}
        <section className="py-32 px-8 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#f0813a] uppercase mb-4">Strategic Impact</h2>
                <p className="text-2xl font-bold text-[#182034]">High-stakes projects driving structural change in public administration.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-[#74777f] rounded-lg text-[#182034] font-bold hover:bg-[#f2f4f6] transition-colors">
                View All Projects <span className="material-symbols-outlined">grid_view</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-[#ffffff] border-t-4 border-[#3b1600] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden">
                  <img alt="Embrace2 Clinical Trial Architecture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD463Kx3uRXfxLG3tWxWHHoddUPKXjOxNln-9ec4C8eJsndt1zmJFkSRknTUnFwYNJrvJs3ojlSWK9Z95ynqA8ZbnbsdM5Q_zq4oqEcpQ2lbnhclkyUROaF7sEJnBv2I1Mtkaz_Osmw8GAtqkVSWTHYODYmHKgsU2-5yCnfAsDSSR3rWy-0B4Dm7wczMDERHtqWwdJxRagdYgL4wIfUJwPG42nFBECTHUy43YpF5wXAyigzF71vtzJRrI-pAMJzoyJEvJDlNPYbDXG2" />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#d5e3fd] text-[#57657b] text-[0.65rem] font-bold rounded uppercase tracking-wider">Public Policy</span>
                    <span className="px-3 py-1 bg-[#dae2fd] text-[#131b2e] text-[0.65rem] font-bold rounded uppercase tracking-wider">Data Science</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#182034] mb-3">Resilient Migration Data Infrastructure</h4>
                  <p className="text-[#43474e] leading-relaxed mb-6">
                    Developing a robust framework for tracking migratory flows using edge-computing nodes to ensure data integrity in low-connectivity humanitarian corridors.
                  </p>
                  <Link className="inline-flex items-center text-sm font-bold text-[#3b1600] hover:underline" href="#">
                    CASE STUDY <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                  </Link>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-[#ffffff] border-t-4 border-[#3b1600] shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="aspect-video w-full overflow-hidden">
                  <img alt="Crisis Sentiment Mapping Engine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQmsUV79vppl_hMRe3uLmSGCzz9QvJFJxMbATykyI0abAdkkBxLJG5oIg0TfylKU6KDuZ9iBuCGSgI_E_uUWo0SEM8yPgYj12534-JPoAHiUkJvDWctGtCdkq6KMIXm6HgSQOagnfZlN4jzQT_r5zDdf4DQBvuH67MrpFFu6U4Z9tPobqvGqAyQYDKYL_g5BausCffO4MkEaOlQ5XjbGVIXWzXyYxwNludtxnSTbeUWOZHB4MJNSRzhm_kU1MFacawv_-qhHAp9Z2A" />
                </div>
                <div className="p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#d5e3fd] text-[#57657b] text-[0.65rem] font-bold rounded uppercase tracking-wider">NLP</span>
                    <span className="px-3 py-1 bg-[#dae2fd] text-[#131b2e] text-[0.65rem] font-bold rounded uppercase tracking-wider">Governance</span>
                  </div>
                  <h4 className="text-xl font-bold text-[#182034] mb-3">Crisis Sentiment Mapping Engine</h4>
                  <p className="text-[#43474e] leading-relaxed mb-6">
                    A human-in-the-loop AI system designed to analyze social media sentiment during natural disasters to guide rapid-response logistics.
                  </p>
                  <Link className="inline-flex items-center text-sm font-bold text-[#3b1600] hover:underline" href="#">
                    CASE STUDY <span className="material-symbols-outlined text-sm ml-1">arrow_outward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Endorsements Section */}
        <section className="py-32 px-8 lg:px-24 bg-[#eceef0]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#f0813a] uppercase mb-4">Endorsements</h2>
              <h3 className="text-2xl font-bold text-[#182034]">Voices from the field.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Testimonial 1 */}
              <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm border-l-4 border-[#f0813a] flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[#f0813a] text-4xl mb-4 block opacity-40">format_quote</span>
                  <p className="text-[#43474e] italic leading-relaxed text-lg mb-8">
                    "Areeb stands out as a driven, compassionate, and forward-thinking individual, marrying technical skills with a sincere dedication to social betterment."
                  </p>
                </div>
                <div>
                  <div className="w-12 h-1 bg-[#f0813a] mb-4"></div>
                  <p className="font-bold text-[#182034]">Dr. Tremayne Waller</p>
                  <p className="text-sm text-[#43474e]">Director of Graduate Student Programs, Virginia Tech College of Engineering</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm border-l-4 border-[#f0813a] flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[#f0813a] text-4xl mb-4 block opacity-40">format_quote</span>
                  <p className="text-[#43474e] italic leading-relaxed text-lg mb-8">
                    "Mr. Uzzaman is characterized by immense energy, dedication, initiative, leadership, and sincerity—all underpinned by a profound commitment to positive social impact..."
                  </p>
                </div>
                <div>
                  <div className="w-12 h-1 bg-[#f0813a] mb-4"></div>
                  <p className="font-bold text-[#182034]">Dr. Ruhul Abid, MD, PhD</p>
                  <p className="text-sm text-[#43474e]">Associate Professor, Brown University Alpert Medical School; President, HAEFA</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm border-l-4 border-[#f0813a] flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-[#f0813a] text-4xl mb-4 block opacity-40">format_quote</span>
                  <p className="text-[#43474e] italic leading-relaxed text-lg mb-8">
                    "Areeb's collaborative nature and communication skills showed that he was not just a great intern, but will be a great employee for any organization..."
                  </p>
                </div>
                <div>
                  <div className="w-12 h-1 bg-[#f0813a] mb-4"></div>
                  <p className="font-bold text-[#182034]">Jimmy Weller</p>
                  <p className="text-sm text-[#43474e]">Director, CDID, Children's Specialized Hospital</p>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-[#43474e] opacity-60 italic">Full, signed letters of recommendation and references available upon request.</p>
          </div>
        </section>

        {/* Insights & Writing Section */}
        <section className="py-32 bg-[#182034] text-[#ffffff]">
          <div className="max-w-7xl mx-auto px-8 lg:px-24">
            <div className="mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#ffdbca] uppercase mb-4">Insights & Writing</h2>
              <h3 className="text-3xl font-bold max-w-2xl">Reflections on the intersection of digital governance and social equity.</h3>
            </div>
            
            <div className="space-y-0 border-t border-white/10">
              {/* Article 1 */}
              <Link className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4" href="#">
                <div className="max-w-xl">
                  <span className="text-[0.6875rem] text-[#ffb68e] font-bold tracking-widest uppercase mb-2 block">MARCH 2024 • POLICY BRIEF</span>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#ffdbca] transition-colors">The Ethics of Algorithmic Aid: Moving Beyond Efficiency</h4>
                </div>
                <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">trending_flat</span>
              </Link>
              
              {/* Article 2 */}
              <Link className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4" href="#">
                <div className="max-w-xl">
                  <span className="text-[0.6875rem] text-[#ffb68e] font-bold tracking-widest uppercase mb-2 block">JANUARY 2024 • TECHNOLOGY</span>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#ffdbca] transition-colors">Six Sigma in the Social Sector: Trimming Waste, Feeding Hope</h4>
                </div>
                <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">trending_flat</span>
              </Link>
              
              {/* Article 3 */}
              <Link className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4" href="#">
                <div className="max-w-xl">
                  <span className="text-[0.6875rem] text-[#ffb68e] font-bold tracking-widest uppercase mb-2 block">NOVEMBER 2023 • CASE STUDY</span>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#ffdbca] transition-colors">Digital Identity as a Human Right in Refugee Contexts</h4>
                </div>
                <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">trending_flat</span>
              </Link>
            </div>
            
            <div className="mt-16 text-center">
              <button className="px-10 py-4 bg-[#ffdbca] text-[#331200] rounded-lg font-bold hover:opacity-90 transition-all">
                Read Full Archive
              </button>
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