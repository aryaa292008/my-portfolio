import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Fingerprint, 
  FlaskConical, 
  Binary, 
  Search, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { personalInfo, investigativePillars } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Target className="h-3.5 w-3.5" />
            <span>Profile & Professional Orientation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            About & Career Objective
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Committed to scientific objectivity, rigorous evidence preservation, and modern investigative methodologies to aid the justice system.
          </p>
        </div>

        {/* Career Objective Hero Card */}
        <div className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 p-6 sm:p-10 shadow-xl mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Fingerprint className="h-40 w-40 text-cyan-400" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider font-bold">
                <ShieldCheck className="h-4 w-4" /> Professional Statement
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                "Every contact leaves a trace." — Applying rigorous laboratory rigor and field methodology to solve complex forensic challenges.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-cyan-200/90 leading-relaxed">
                <strong className="text-cyan-300">Career Objective: </strong>
                {personalInfo.careerObjective}
              </div>
            </div>

            {/* Quick Metrics / Highlights Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 text-center">
                <div className="text-2xl font-black text-cyan-400">2030</div>
                <div className="text-[11px] text-slate-400 font-medium mt-1">Expected B.Sc. Graduation</div>
                <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">JECRC University</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-amber-500/20 text-center">
                <div className="text-2xl font-black text-amber-400">1st Div</div>
                <div className="text-[11px] text-slate-400 font-medium mt-1">Senior Secondary (XII)</div>
                <div className="text-[10px] text-amber-300 font-semibold mt-0.5">Class of 2026</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-teal-500/20 text-center">
                <div className="text-2xl font-black text-teal-400">6+</div>
                <div className="text-[11px] text-slate-400 font-medium mt-1">Core Forensic Domains</div>
                <div className="text-[10px] text-teal-300 font-semibold mt-0.5">Physical & Lab</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-cyan-500/20 text-center">
                <div className="text-2xl font-black text-cyan-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium mt-1">Chain of Custody</div>
                <div className="text-[10px] text-cyan-300 font-semibold mt-0.5">Protocol Adherence</div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Investigative Pillars */}
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              Core Investigative Pillars
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Methodological principles integrated into academic and practical casework training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {investigativePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-500/50 hover:bg-slate-900/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 group-hover:scale-110 transition-transform">
                    {idx === 0 && <Search className="h-5 w-5" />}
                    {idx === 1 && <FlaskConical className="h-5 w-5" />}
                    {idx === 2 && <Fingerprint className="h-5 w-5" />}
                    {idx === 3 && <Binary className="h-5 w-5" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-400/80 mt-0.5">
                      {pillar.tagline}
                    </p>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Standard Lab Practice</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
