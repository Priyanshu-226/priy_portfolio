'use client';

import Script from 'next/script';
import Link from 'next/link';

export default function ArchiveLogin() {
  return (
    <div className="bg-[#f7f9fb] font-['Inter'] text-[#191c1e] antialiased min-h-screen">
      
      {/* Inject Fonts, Icons, and Custom Utilities directly for single-file independence */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}} />

     

      <main className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden pt-24">
        {/* Background Half-color */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#f2f4f6] -z-10"></div>
        
        <div className="w-full max-w-md mt-16 px-6">
          <div className="text-center mb-12">
            <h1 className="font-['Inter'] text-[#182034] text-xl font-black uppercase tracking-widest mb-2">Private Archive</h1>
            <p className="text-[#43474e] text-sm font-medium tracking-tight">Access restricted to authorized lineage members</p>
          </div>
          
          <div className="bg-[#ffffff] shadow-[0_10px_40px_-10px_rgba(24,32,52,0.06)] rounded-xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#3b1600] rounded-t-xl"></div>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="block text-[0.6875rem] font-['Inter'] font-bold uppercase tracking-wider text-[#43474e]" htmlFor="email">
                  Email Address
                </label>
                <input 
                  className="w-full bg-[#e0e3e5] border-0 border-b border-[#74777f] px-0 py-3 text-sm focus:ring-0 focus:border-[#182034] transition-all placeholder:text-[#c4c6cf]" 
                  id="email" 
                  name="email" 
                  placeholder="lineage@archive.net" 
                  type="email"
                />
              </div>
              
              <div className="space-y-1">
                <label className="block text-[0.6875rem] font-['Inter'] font-bold uppercase tracking-wider text-[#43474e]" htmlFor="password">
                  Password
                </label>
                <input 
                  className="w-full bg-[#e0e3e5] border-0 border-b border-[#74777f] px-0 py-3 text-sm focus:ring-0 focus:border-[#182034] transition-all placeholder:text-[#c4c6cf]" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
              
              <div className="pt-4">
                <button 
                  className="w-full bg-[#182034] text-[#ffffff] py-4 px-6 rounded-md font-['Inter'] text-sm font-bold tracking-tight hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group" 
                  type="submit"
                >
                  Login
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </form>
            
            <div className="mt-10 pt-8 border-t border-[#c4c6cf]/10 flex flex-col items-center gap-4">
              <Link className="text-[0.6875rem] font-['Inter'] font-bold uppercase tracking-widest text-[#f0813a] hover:text-[#3b1600] transition-colors" href="#">
                Request Access
              </Link>
              <div className="flex items-center gap-2 opacity-40">
                <span className="h-px w-8 bg-[#74777f]"></span>
                <span className="material-symbols-outlined text-[10px]">shield</span>
                <span className="h-px w-8 bg-[#74777f]"></span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ffb68e] animate-pulse"></div>
              <span className="text-[0.6875rem] font-['Inter'] uppercase tracking-widest text-[#43474e]">Server Status: Online</span>
            </div>
          </div>
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