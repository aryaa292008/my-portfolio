import React from 'react';
import { Fingerprint, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

const currentYear = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 py-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-10 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400">
                <Fingerprint className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              B.Sc. in Forensic Science and Technology student at <strong>JECRC University</strong>, Jaipur. Dedicated to scientific truth, evidence preservation, and modern investigative methodology.
            </p>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-cyan-300/90 font-mono">
              "Every contact leaves a trace." — Edmond Locard
            </div>
          </div>

          {/* Quick Section Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition">About & Objective</a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition">Education & Academic History</a>
              </li>
              <li>
                <a href="#coursework" className="hover:text-cyan-400 transition">Coursework & Modules</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition">Key Forensic Skills</a>
              </li>
              <li>
                <a href="#lab-toolkit" className="hover:text-cyan-400 transition">Investigation Lab Demo</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-cyan-400 transition">Achievements & Languages</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition">Contact Information</a>
              </li>
            </ul>
          </div>

          {/* Direct Channels (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Direct Contact
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition truncate">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-cyan-400 transition">
                  {personalInfo.formattedPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition"
                title="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {currentYear} Arya Choudhary. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              B.Sc. Forensic Science & Technology • JECRC University
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition text-slate-300 text-xs"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
