import React from 'react';
import { Award, Globe2, CheckCircle2, FileText } from 'lucide-react';
import { languages, achievements } from '../data/portfolioData';

interface AchievementsLanguagesProps {
  onOpenResume: () => void;
}

export const AchievementsLanguages: React.FC<AchievementsLanguagesProps> = ({ onOpenResume }) => {
  return (
    <section id="achievements" className="py-20 relative border-t border-slate-800/80 bg-slate-900/40 forensic-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Award className="h-3.5 w-3.5" />
            <span>Honors & Lingual Competency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Languages & Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Recognized academic milestones, departmental certifications, and bilingual proficiency for scientific documentation and cross-functional coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Achievements Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              Academic Honors & Milestones
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 hover:border-amber-500/40 hover:bg-slate-900 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950/60 text-amber-300 border border-amber-800/50 mb-2">
                        {ach.badge}
                      </span>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {ach.title}
                      </h4>
                      <div className="text-xs text-cyan-400 font-semibold mt-0.5">
                        {ach.organization}
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      {ach.year}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mt-3 pt-3 border-t border-slate-800/80">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-cyan-400" />
              Language Proficiency
            </h3>

            <div className="space-y-4">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 hover:border-cyan-500/40 transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400 font-bold text-sm">
                        {lang.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">
                          {lang.name}
                        </h4>
                        <span className="text-xs font-semibold text-cyan-400">
                          {lang.proficiency}
                        </span>
                      </div>
                    </div>

                    {lang.native ? (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-800/40">
                        NATIVE
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                        PROFESSIONAL
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                    {lang.levelDesc}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                    <span>Scientific reporting & courtroom deposition ready</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Resume Callout Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="h-4 w-4 text-cyan-400" />
                Comprehensive Academic CV
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Looking for detailed academic records, laboratory practical credits, and reference details? View or download the full verified curriculum vitae.
              </p>
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md shadow-cyan-500/20"
              >
                <FileText className="h-4 w-4" />
                <span>Open Full Curriculum Vitae</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
