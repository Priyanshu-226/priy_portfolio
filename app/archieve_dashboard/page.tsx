'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function ArchiveDashboard() {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] antialiased flex min-h-screen">
      
      {/* Inject Fonts and Icons directly for single-file independence */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
        }
        body { font-family: 'Inter', sans-serif; }
      `}} />

      {/* SideNavBar */}
      <aside className="bg-slate-100 dark:bg-slate-950 h-screen w-64 fixed left-0 top-0 border-r-0 flex flex-col p-6 space-y-8 z-50">
        <div>
          <div className="text-lg font-black uppercase tracking-widest text-slate-900 dark:text-white mb-1">Private Archive</div>
          <div className="font-['Inter'] text-xs tracking-wide uppercase text-slate-500">Restricted Access</div>
        </div>
       
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold tracking-widest uppercase text-slate-900 dark:text-slate-100 bg-slate-200 dark:bg-slate-800 rounded-md hover:bg-slate-300 transition-colors">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 flex-1 min-h-screen bg-[#f7f9fb] flex flex-col">
        {/* TopAppBar Updated from Shared Component */}
        <header className="bg-[#f7f9fb]/80 dark:bg-[#182034]/80 backdrop-blur-md fixed top-0 w-full z-40 border-b border-[#f2f4f6]/10 shadow-sm dark:shadow-none left-0 pl-64">
          <div className="flex items-center justify-between px-8 py-4 max-w-[1440px] mx-auto">
            <div className="text-xl font-bold tracking-tighter text-[#182034] dark:text-[#f7f9fb]">Areeb Uzzaman</div>
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex gap-6 font-['Inter'] font-medium text-sm tracking-wide">
                <Link className="text-slate-500 dark:text-slate-400 hover:text-[#182034] dark:hover:text-white transition-colors" href="/">Home</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-[#182034] dark:hover:text-white transition-colors" href="#">About</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-[#182034] dark:hover:text-white transition-colors" href="#">Projects</Link>
                <Link className="text-[#182034] dark:text-white border-b-2 border-[#182034] dark:border-white pb-1" href="#">Insights</Link>
                <Link className="text-slate-500 dark:text-slate-400 hover:text-[#182034] dark:hover:text-white transition-colors" href="#">Experience</Link>
              </nav>
              <div className="flex items-center gap-4">
                <button className="material-symbols-outlined text-[#182034] dark:text-[#f7f9fb] hover:bg-[#f2f4f6] dark:hover:bg-[#2e354a] p-2 rounded-md transition-all active:scale-95 duration-200">
                  language
                </button>
                <button className="px-6 py-2 bg-[#182034] dark:bg-[#f7f9fb] text-[#f7f9fb] dark:text-[#182034] text-sm font-medium rounded-md hover:opacity-90 active:scale-95 duration-200 transition-all">
                  Archive Login
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="p-12 pt-28 space-y-12 max-w-7xl mx-auto w-full">
          {/* Hero Announcement Section: Asymmetric Layout */}
          <section className="grid grid-cols-12 gap-8 items-center bg-[#182034] text-[#ffffff] p-12 rounded-xl relative overflow-hidden">
            <div className="col-span-12 md:col-span-7 z-10">
              <span className="inline-block px-3 py-1 bg-[#ffdbca] text-[#331200] text-[0.6875rem] font-bold tracking-widest uppercase mb-6 rounded-sm">Featured Volume</span>
              <h1 className="text-4xl md:text-5xl font-['Inter'] font-extrabold tracking-tighter mb-6 leading-tight">
                Read the Comprehensive 500-Year History Volume
              </h1>
              <p className="text-[#979eb7] text-lg leading-relaxed mb-8 max-w-xl">
                A synthesized scholarly exploration of a 3,100+ individual verified lineage database, curated from fragmentary primary sources and archaic dialects.
              </p>
              <Link className="inline-flex items-center gap-2 bg-[#f7f9fb] text-[#182034] px-6 py-3 rounded-md font-bold text-sm tracking-tight hover:bg-[#dae2fd] transition-colors" href="#">
                Open Digital Archive
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none">
              <div className="h-full w-full bg-gradient-to-l from-[#2e354a] to-transparent"></div>
            </div>
            {/* Decorative Image */}
            <div className="col-span-12 md:col-span-5 relative h-64 md:h-full min-h-[300px]">
              <img 
                alt="Close-up of a high-end leather-bound historical book with gold leaf lettering resting on a dark walnut library table" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEuotq0gfSI6Ge_estgsxVlWWCN6NzCHvGXHxSWWNYcLaY7_P8_fDL3xiuGl12rJh-EyMLnyPVLeFey4atCZwF9Tziduac6Im8rIzRpiOQWYYzmD9ouLgQ4Fw-lO92kZ-073g9Uz-nA7qhnbtQCZY8pyOHj4B-vW2p4p7eHMhTQwP11lj7Er3MRqsFuml4O2P-1-3MIbPJ_XcJvVMr8PDHp_sxfYgMGGz94xWBZg1h3uwJT-gU5UpNcnycdWVb8rsBmzOHIyvo8yVs" 
              />
            </div>
          </section>

          {/* Database Interface */}
          <section className="space-y-8">
            <div className="flex justify-between items-end border-b border-[#c4c6cf] pb-6">
              <div>
                <h2 className="text-2xl font-['Inter'] font-bold text-[#182034]">Lineage Database</h2>
                <p className="text-[#43474e] text-sm mt-1">Search through 4,200 digitized historical records.</p>
              </div>
              <div className="flex gap-4">
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#74777f]">search</span>
                  <input 
                    className="pl-10 pr-4 py-2 bg-[#e0e3e5] border-none border-b-2 border-[#74777f] focus:border-[#182034] focus:ring-0 text-sm w-64 transition-all" 
                    placeholder="Search records..." 
                    type="text" 
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-[#c4c6cf] text-sm font-medium rounded-md hover:bg-[#f2f4f6] transition-colors">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  Filter
                </button>
              </div>
            </div>

            {/* Tonal Layering Table (No Borders) */}
            <div className="bg-[#ffffff] rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f2f4f6] text-[#43474e] text-[0.6875rem] font-bold tracking-widest uppercase">
                    <th className="px-8 py-4">Document Title</th>
                    <th className="px-8 py-4">Era/Date</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Classification</th>
                    <th className="px-8 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-medium">
                  {/* Row 1 */}
                  <tr className="hover:bg-[#f2f4f6] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-[#182034] font-bold">Rare Urdu Shijra Manuscript</span>
                        <span className="text-[#43474e] text-xs font-normal">Original Manuscript</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-[#43474e]">16th Century</td>
                    <td className="px-8 py-6">
                      <span className="px-2 py-1 bg-[#d5e3fd] text-[#57657b] text-[0.6rem] rounded-sm font-bold uppercase">Deciphered</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-2 py-1 bg-[#d5e3fd] text-[#3a485c] text-[0.6rem] rounded-sm font-bold uppercase">Primary Source</span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="text-[#182034] hover:underline text-xs font-bold uppercase tracking-tight">View Entry</button>
                    </td>
                  </tr>
                  
                  {/* Row 2 */}
                  <tr className="hover:bg-[#f2f4f6] transition-colors group">
                    <td className="px-8 py-6 border-t border-[#f2f4f6]">
                      <div className="flex flex-col">
                        <span className="text-[#182034] font-bold">National Library of Kolkata Manuscripts</span>
                        <span className="text-[#43474e] text-xs font-normal">Institutional Archives</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-[#43474e] border-t border-[#f2f4f6]">Various</td>
                    <td className="px-8 py-6 border-t border-[#f2f4f6]">
                      <span className="px-2 py-1 bg-[#d5e3fd] text-[#57657b] text-[0.6rem] rounded-sm font-bold uppercase">Digitized</span>
                    </td>
                    <td className="px-8 py-6 border-t border-[#f2f4f6]">
                      <span className="px-2 py-1 bg-[#ffb68e] text-[#763300] text-[0.6rem] rounded-sm font-bold uppercase">Restricted</span>
                    </td>
                    <td className="px-8 py-6 text-right border-t border-[#f2f4f6]">
                      <button className="text-[#182034] hover:underline text-xs font-bold uppercase tracking-tight">Request Access</button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-[#f2f4f6] transition-colors group">
                    <td className="px-8 py-6 border-t border-[#f2f4f6]">
                      <div className="flex flex-col">
                        <span className="text-[#182034] font-bold">Bengali & Persian Dialect Transcripts</span>
                        <span className="text-[#43474e] text-xs font-normal">Transliterated Records</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-[#43474e] border-t border-[#f2f4f6]">1500s–1900s</td>
                    <td className="px-8 py-6 border-t border-[#f2f4f6]">
                      <span className="px-2 py-1 bg-[#d5e3fd] text-[#57657b] text-[0.6rem] rounded-sm font-bold uppercase">Translated</span>
                    </td>
                    <td className="px-8 py-6 border-t border-[#f2f4f6]">
                      <span className="px-2 py-1 bg-[#d5e3fd] text-[#3a485c] text-[0.6rem] rounded-sm font-bold uppercase">Standard</span>
                    </td>
                    <td className="px-8 py-6 text-right border-t border-[#f2f4f6]">
                      <button className="text-[#182034] hover:underline text-xs font-bold uppercase tracking-tight">View Entry</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Access / Insights Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#f2f4f6] rounded-xl space-y-4">
              <span className="material-symbols-outlined text-[#182034]">verified_user</span>
              <h3 className="text-lg font-bold text-[#182034]">Secure Transmission</h3>
              <p className="text-sm text-[#43474e] leading-relaxed">Access is restricted. Digital repository of 60+ ancestral literary works is safeguarded for authorized family members.</p>
            </div>
            <div className="p-8 bg-[#f2f4f6] rounded-xl space-y-4">
              <span className="material-symbols-outlined text-[#182034]">history_edu</span>
              <h3 className="text-lg font-bold text-[#182034]">Recent Translations</h3>
              <p className="text-sm text-[#43474e] leading-relaxed">Managed a global workflow with 13 vetted linguists to decipher archaic dialects and resolve complex linguistic discrepancies.</p>
            </div>
            <div className="p-8 bg-[#ffdbca] rounded-xl space-y-4">
              <span className="material-symbols-outlined text-[#331200]">emergency</span>
              <h3 className="text-lg font-bold text-[#331200]">Critical Conservation</h3>
              <p className="text-sm text-[#763300] leading-relaxed">Successfully negotiated restricted access with the Ministry of Culture & Tourism of India to digitize at-risk historical assets.</p>
            </div>
          </section>
        </div>

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