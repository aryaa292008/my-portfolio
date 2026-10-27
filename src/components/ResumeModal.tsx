import React from 'react';
import { X, Printer, Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';
import { personalInfo, educationList, courseworkList, technicalSkills, professionalSkills, languages } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/60 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-ping" />
            <h3 className="text-base font-semibold text-slate-100 flex items-center gap-2">
              Curriculum Vitae Preview <span className="text-xs px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-700/50">Forensic Science & Tech</span>
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-cyan-300 transition border border-slate-700"
              title="Print or Save as PDF"
            >
              <Printer className="h-4 w-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-200" id="resume-document">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-white">{personalInfo.name}</h1>
              <p className="text-sm font-semibold text-cyan-400 mt-1">{personalInfo.tagline}</p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" /> {personalInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="h-3.5 w-3.5 text-cyan-400" /> {personalInfo.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5 text-cyan-400" /> {personalInfo.formattedPhone}
                </span>
              </div>
            </div>
            <div className="text-right sm:self-start">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                JECRC University
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-sm uppercase tracking-wider font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm uppercase tracking-wider font-bold text-cyan-400 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div key={idx} className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-white text-sm sm:text-base">{edu.degree}</h3>
                    <span className="text-xs font-medium text-cyan-300">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">
                    {edu.institution}, {edu.location} {edu.grade && `• ${edu.grade}`}
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h2 className="text-sm uppercase tracking-wider font-bold text-cyan-400 mb-3">
              Relevant Forensic Coursework
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courseworkList.map((cw) => (
                <div key={cw.id} className="bg-slate-950/50 p-3 rounded-lg border border-slate-800">
                  <h4 className="font-semibold text-white text-xs">{cw.title}</h4>
                  <p className="text-[11px] text-slate-400 mt-1">{cw.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h2 className="text-sm uppercase tracking-wider font-bold text-cyan-400 mb-3">
              Forensic & Professional Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                <h3 className="text-xs font-bold text-slate-200 mb-2">Technical & Forensic Skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {technicalSkills.map((s, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-slate-800/80 text-[11px] text-slate-200 border border-slate-700">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                <h3 className="text-xs font-bold text-slate-200 mb-2">Professional & Investigative Strengths</h3>
                <div className="flex flex-wrap gap-1.5">
                  {professionalSkills.map((s, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-cyan-950/40 text-[11px] text-cyan-200 border border-cyan-800/40">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-sm uppercase tracking-wider font-bold text-cyan-400 mb-2">
                Languages
              </h2>
              <div className="space-y-2">
                {languages.map((l, idx) => (
                  <div key={idx} className="text-xs flex justify-between bg-slate-950/40 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-semibold text-white">{l.name}</span>
                    <span className="text-slate-400">{l.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-wider font-bold text-cyan-400 mb-2">
                Key Academic Milestone
              </h2>
              <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
                  <Award className="h-4 w-4" /> Senior Secondary First Division (2026)
                </div>
                <p className="text-slate-400 text-[11px]">
                  Shri Gurukul Vidhya Ashram, Rajasthan. Graduated with First Division honors in Science.
                </p>
              </div>
            </div>
          </div>

          {/* Footer note in modal */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-2">
            <span>Portfolio & Verification: {personalInfo.github}</span>
            <span>Jaipur, Rajasthan, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};
