'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="page-shell selection:bg-[#ffdbca] selection:text-[#331200] bg-[var(--background)] text-[var(--foreground)] min-h-screen">
      
      {/* Inject Fonts and Icons directly for single-file independence */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }

        /* Custom animations for smooth entry and interactions */
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fade-in-up {
          opacity: 0;
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-down {
          opacity: 0;
          animation: fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-left {
          opacity: 0;
          animation: fade-in-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-right {
          opacity: 0;
          animation: fade-in-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          opacity: 0;
          animation: scale-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Stagger animations */
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        
        /* Hover scale effect */
        .hover-scale-up {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-scale-up:hover {
          transform: scale(1.02);
        }
        
        /* Smooth underline animation */
        .smooth-underline {
          position: relative;
          text-decoration: none;
        }
        .smooth-underline::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .smooth-underline:hover::after {
          width: 100%;
        }
        
        /* Enhanced button hover effects */
        .button-enhanced-hover {
          position: relative;
          overflow: hidden;
        }
        .button-enhanced-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          transition: left 0.5s ease;
        }
        .button-enhanced-hover:hover::before {
          left: 100%;
        }
      `}} />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-8 md:px-24 overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--surface)] -skew-x-12 translate-x-32 z-0 hidden lg:block transition-transform duration-1000 ease-out hover:translate-x-28"></div>
          
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d5e3fd] text-[#57657b] text-[0.6875rem] font-bold tracking-wider mb-6 hover:bg-[#c4d7fc] transition-colors duration-300 cursor-default animate-scale-in">
                <span className="w-2 h-2 rounded-full bg-[#3b1600] animate-pulse"></span>
                MASTER OF PUBLIC AFFAIRS CANDIDATE @ BROWN UNIVERSITY
              </div>
              <h1 className="animate-fade-in-up stagger-1 text-4xl md:text-[3.5rem] font-extrabold leading-[1.1] tracking-tighter text-[var(--text-main)] mb-8">
                Bridging Data, Policy, and <span className="text-[#5c2600] italic relative inline-block after:content-[''] after:absolute after:w-full after:h-[8px] after:bg-[#ffdbca]/60 after:bottom-2 after:left-0 after:-z-10 hover:after:h-[16px] hover:after:bg-[#ffdbca]/80 after:transition-all after:duration-500 after:will-change-transform transform transition-all duration-300 hover:scale-105 hover:text-[#7a3600] origin-left">Humanitarian Impact.</span>
              </h1>
              <p className="animate-fade-in-up stagger-2 text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mb-10 transition-all duration-500 hover:text-[var(--text-main)] hover:translate-x-2">
                Designing human-in-the-loop pipelines, strategic policy frameworks, and optimized operational logistics to uplift underserved communities.
              </p>
              
              {/* Certification Badges */}
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="badge-glass text-[var(--text-main)] px-5 py-3 rounded-lg flex items-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-default animate-fade-in-left stagger-1">
                  <span className="font-bold text-lg">PMP</span>
                  <div className="w-px h-6 bg-[var(--surface-elevated)] opacity-20"></div>
                  <span className="text-[0.6875rem] tracking-widest uppercase opacity-80">Project Management</span>
                </div>
                <div className="badge-glass text-[var(--text-main)] border-s-4 border-[#3b1600] px-5 py-3 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-default animate-fade-in-left stagger-2 hover:border-[#f0813a]">
                  <span className="font-bold text-lg">LSSBB</span>
                  <div className="w-px h-6 bg-[#182034] opacity-20"></div>
                  <span className="text-[0.6875rem] tracking-widest uppercase opacity-80">Lean Six Sigma</span>
                </div>
                <div className="badge-glass text-[var(--text-main)] border-s-4 border-[#3b1600] px-5 py-3 rounded-lg flex items-center gap-3 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-default animate-fade-in-left stagger-3 hover:border-[#f0813a]">
                  <span className="font-bold text-lg">PSM I</span>
                  <div className="w-px h-6 bg-[#182034] opacity-20"></div>
                  <span className="text-[0.6875rem] tracking-widest uppercase opacity-80">Professional Scrum</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="group btn-primary px-8 py-5 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center gap-2 active:scale-95 overflow-hidden relative button-enhanced-hover animate-fade-in-left stagger-4 magnetic">
                  <span className="relative z-10">Explore Projects</span> 
                  <span className="material-symbols-outlined relative z-10 group-hover:translate-x-2 transition-transform duration-500">arrow_forward</span>
                </button>
                <button className="btn-secondary px-8 py-5 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 active:scale-95 animate-fade-in-left stagger-5 button-enhanced-hover magnetic">
                  Contact
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative animate-fade-in-up stagger-3">
              <div className="group relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-[#182034]/30 transition-all duration-700 hover:shadow-3xl hover:-translate-y-3 hover:scale-[1.02]">
                <Image
                  alt="Professional portrait of Areeb Uzzaman"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  src="/main.png"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#182034]/40 group-hover:to-[#182034]/60 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#182034]/95 via-[#182034]/70 to-transparent text-[#ffffff] transform transition-all duration-700">
                  <p className="text-sm font-medium opacity-75 mb-1 transform transition-all duration-700 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">Current Engagement</p>
                  <p className="text-lg font-bold transform transition-all duration-700 translate-y-2 group-hover:translate-y-0">Policy & Data Architecture Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-24 bg-[var(--surface)] transition-all duration-700 hover:bg-[#f8f9fa] dark:hover:bg-[var(--surface-elevated)] relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-white/35 to-transparent dark:from-[#1f2d46]/40"></div>
          
          <div className="max-w-7xl mx-auto px-8 lg:px-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-[8.5rem] items-start">
              <div className="pt-4 animate-fade-in-left">
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#f0813a] uppercase mb-4 transition-all duration-500 hover:text-[#ff9e5a] hover:tracking-widest">The Architect's Ethos</h2>
                <h3 className="text-3xl font-bold text-[var(--text-main)] leading-tight transition-colors duration-500 hover:text-[#5c2600] dark:hover:text-[#ffccad]">Proactive Dedication to Social Betterment.</h3>
              </div>
              <div className="space-y-8 animate-fade-in-right">
                <p className="text-lg text-[var(--foreground)] leading-relaxed hover:text-[var(--text-main)] transition-all duration-500 hover:translate-x-2">
                  I operate at the intersection of technical precision and human empathy. My work focuses on building the invisible infrastructure—data pipelines and policy frameworks—that empowers local governments and NGOs to react faster to humanitarian crises. By optimizing operational logistics through Lean Six Sigma methodologies, I ensure that resources reach those who need them most with minimal friction and maximum accountability.
                </p>
                <button className="flex items-center gap-2 text-[var(--text-main)] font-bold group relative pb-1 smooth-underline transition-all duration-500 hover:text-[#f0813a] hover:translate-x-1">
                  View Full Experience & Resume 
                  <span className="material-symbols-outlined group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-500 ease-out">east</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Impact Section */}
        <section className="py-32 px-8 lg:px-24 relative overflow-hidden">
          {/* Background animated elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#ffdbca] opacity-[0.05] rounded-full blur-3xl animate-float pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex justify-between items-end mb-16 animate-fade-in-down">
              <div className="max-w-xl">
                <h2 className="text-sm font-bold tracking-[0.2em] text-[#f0813a] uppercase mb-4 transition-all duration-500 hover:text-[#ff9e5a]">Strategic Impact</h2>
                <p className="text-2xl font-bold text-[var(--text-main)] transition-all duration-500 hover:text-[#5c2600]">High-stakes projects driving structural change in public administration.</p>
              </div>
              <button className="hidden md:flex items-center gap-2 px-6 py-3 border border-[var(--border-strong)] rounded-lg text-[var(--text-main)] font-bold hover:bg-[#182034] hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-[#182034]/20 active:scale-95 group hover-scale-up group-hover:border-[#182034]">
                View All Projects <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-500">grid_view</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group relative overflow-hidden rounded-xl bg-[var(--surface-elevated)] border-t-4 border-[#3b1600] shadow-md hover:shadow-2xl hover:shadow-[#3b1600]/20 hover:-translate-y-3 transition-all duration-700 ease-out cursor-pointer flex flex-col h-full hover-scale-up animate-fade-in-left stagger-1">
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#182034]/0 group-hover:bg-[#182034]/20 transition-all duration-700 z-10"></div>
                  <Image alt="Resilient Migration Data Infrastructure" className="w-full h-full object-cover transform group-hover:scale-[1.08] transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD463Kx3uRXfxLG3tWxWHHoddUPKXjOxNln-9ec4C8eJsndt1zmJFkSRknTUnFwYNJrvJs3ojlSWK9Z95ynqA8ZbnbsdM5Q_zq4oqEcpQ2lbnhclkyUROaF7sEJnBv2I1Mtkaz_Osmw8GAtqkVSWTHYODYmHKgsU2-5yCnfAsDSSR3rWy-0B4Dm7wczMDERHtqWwdJxRagdYgL4wIfUJwPG42nFBECTHUy43YpF5wXAyigzF71vtzJRrI-pAMJzoyJEvJDlNPYbDXG2" fill sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-[#d5e3fd] text-[#57657b] text-[0.65rem] font-bold rounded uppercase tracking-wider group-hover:bg-[#c4d7fc] group-hover:text-[#3b4d5c] transition-all duration-500">Public Policy</span>
                    <span className="px-3 py-1 bg-[#dae2fd] text-[#131b2e] text-[0.65rem] font-bold rounded uppercase tracking-wider group-hover:bg-[#c8d4fc] transition-all duration-500">Data Science</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[#3b1600] transition-all duration-500 group-hover:translate-x-1">Resilient Migration Data Infrastructure</h4>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-grow group-hover:text-[var(--text-main)] transition-all duration-500">
                    Developing a robust framework for tracking migratory flows using edge-computing nodes to ensure data integrity in low-connectivity humanitarian corridors.
                  </p>
                  <div className="inline-flex items-center text-sm font-bold text-[#3b1600] group-hover:text-[#f0813a] transition-all duration-500 mt-auto">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out">CASE STUDY</span> 
                    <span className="material-symbols-outlined text-sm ms-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">arrow_outward</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative overflow-hidden rounded-xl bg-[var(--surface-elevated)] border-t-4 border-[#3b1600] shadow-md hover:shadow-2xl hover:shadow-[#3b1600]/20 hover:-translate-y-3 transition-all duration-700 ease-out cursor-pointer flex flex-col h-full hover-scale-up animate-fade-in-right stagger-2">
                <div className="aspect-video w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#182034]/0 group-hover:bg-[#182034]/20 transition-all duration-700 z-10"></div>
                  <Image alt="Crisis Sentiment Mapping Engine" className="w-full h-full object-cover transform group-hover:scale-[1.08] transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQmsUV79vppl_hMRe3uLmSGCzz9QvJFJxMbATykyI0abAdkkBxLJG5oIg0TfylKU6KDuZ9iBuCGSgI_E_uUWo0SEM8yPgYj12534-JPoAHiUkJvDWctGtCdkq6KMIXm6HgSQOagnfZlN4jzQT_r5zDdf4DQBvuH67MrpFFu6U4Z9tPobqvGqAyQYDKYL_g5BausCffO4MkEaOlQ5XjbGVIXWzXyYxwNludtxnSTbeUWOZHB4MJNSRzhm_kU1MFacawv_-qhHAp9Z2A" fill sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-[#d5e3fd] text-[#57657b] text-[0.65rem] font-bold rounded uppercase tracking-wider group-hover:bg-[#c4d7fc] group-hover:text-[#3b4d5c] transition-all duration-500">NLP</span>
                    <span className="px-3 py-1 bg-[#dae2fd] text-[#131b2e] text-[0.65rem] font-bold rounded uppercase tracking-wider group-hover:bg-[#c8d4fc] transition-all duration-500">Governance</span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-main)] mb-3 group-hover:text-[#3b1600] transition-all duration-500 group-hover:translate-x-1">Crisis Sentiment Mapping Engine</h4>
                  <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-grow group-hover:text-[var(--text-main)] transition-all duration-500">
                    A human-in-the-loop AI system designed to analyze social media sentiment during natural disasters to guide rapid-response logistics.
                  </p>
                  <div className="inline-flex items-center text-sm font-bold text-[#3b1600] group-hover:text-[#f0813a] transition-all duration-500 mt-auto">
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-bottom-right after:scale-x-0 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out">CASE STUDY</span> 
                    <span className="material-symbols-outlined text-sm ms-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">arrow_outward</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Writing Section */}
        <section className="py-32 bg-[#182034] text-[#ffffff] relative overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[#ffdbca] opacity-[0.03] blur-[120px] rounded-full pointer-events-none animate-float"></div>

          <div className="max-w-7xl mx-auto px-8 lg:px-24 relative z-10">
            <div className="mb-16 animate-fade-in-down">
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#ffdbca] uppercase mb-4 transition-all duration-500 hover:text-[#ffe5d8] hover:tracking-widest">Insights & Writing</h2>
              <h3 className="text-3xl font-bold max-w-2xl transition-all duration-500 hover:text-[#ffdbca]">Reflections on the intersection of digital governance and social equity.</h3>
            </div>
            
            <div className="space-y-0 border-t border-white/10">
              {/* Article 1 */}
              <Link className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 hover:bg-white/[0.05] transition-all duration-500 px-4 -mx-4 hover:px-8 rounded-lg hover:-translate-y-1 animate-fade-in-left stagger-1" href="#">
                <div className="max-w-xl transition-all duration-500 group-hover:translate-x-3">
                  <span className="text-[0.6875rem] text-[#ffb68e] font-bold tracking-widest uppercase mb-2 block transition-all duration-500 group-hover:text-[#ffdbca] group-hover:tracking-[0.15em]">MARCH 2024 • POLICY BRIEF</span>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#ffdbca] transition-all duration-500">The Ethics of Algorithmic Aid: Moving Beyond Efficiency</h4>
                </div>
                <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-8 group-hover:translate-x-0 text-[#ffdbca]">trending_flat</span>
              </Link>
              
              {/* Article 2 */}
              <Link className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 hover:bg-white/[0.05] transition-all duration-500 px-4 -mx-4 hover:px-8 rounded-lg hover:-translate-y-1 animate-fade-in-left stagger-2" href="#">
                <div className="max-w-xl transition-all duration-500 group-hover:translate-x-3">
                  <span className="text-[0.6875rem] text-[#ffb68e] font-bold tracking-widest uppercase mb-2 block transition-all duration-500 group-hover:text-[#ffdbca] group-hover:tracking-[0.15em]">JANUARY 2024 • TECHNOLOGY</span>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#ffdbca] transition-all duration-500">Six Sigma in the Social Sector: Trimming Waste, Feeding Hope</h4>
                </div>
                <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-8 group-hover:translate-x-0 text-[#ffdbca]">trending_flat</span>
              </Link>
              
              {/* Article 3 */}
              <Link className="group flex flex-col md:flex-row justify-between items-start md:items-center py-10 border-b border-white/10 hover:bg-white/[0.05] transition-all duration-500 px-4 -mx-4 hover:px-8 rounded-lg hover:-translate-y-1 animate-fade-in-left stagger-3" href="#">
                <div className="max-w-xl transition-all duration-500 group-hover:translate-x-3">
                  <span className="text-[0.6875rem] text-[#ffb68e] font-bold tracking-widest uppercase mb-2 block transition-all duration-500 group-hover:text-[#ffdbca] group-hover:tracking-[0.15em]">NOVEMBER 2023 • CASE STUDY</span>
                  <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#ffdbca] transition-all duration-500">Digital Identity as a Human Right in Refugee Contexts</h4>
                </div>
                <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-8 group-hover:translate-x-0 text-[#ffdbca]">trending_flat</span>
              </Link>
            </div>
            
            <div className="mt-16 text-center animate-fade-in-up stagger-4">
              <button className="px-10 py-4 bg-[#ffdbca] text-[#331200] rounded-lg font-bold hover:bg-[#ffe5d8] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ffdbca]/30 transition-all duration-500 active:scale-95 border border-[#ffb68e] hover:border-[#f0813a] button-enhanced-hover">
                Read Full Archive
              </button>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}