import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-slate-800/80 bg-slate-900/30 forensic-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Formative scientific education combining university-level criminalistics and practical laboratory methods with a first-division science secondary school foundation.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300"
            >
              {/* Highlight badge on top */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="flex h-3 w-3 rounded-full bg-cyan-400"></span>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                    {edu.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="pt-4 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center gap-3">
                    <span>{edu.degree}</span>
                    {edu.grade && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                        <Award className="h-3.5 w-3.5" />
                        {edu.grade}
                      </span>
                    )}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-cyan-400 font-semibold mt-1.5">
                    <span>{edu.institution}</span>
                    <span className="text-slate-600">•</span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400" /> {edu.location}
                    </span>
                  </div>
                </div>

                {/* Key Focus Points */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-cyan-400" /> Key Academic & Practical Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 rounded-xl bg-slate-950/60 p-3 border border-slate-800/80 text-xs text-slate-300 leading-relaxed"
                      >
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
