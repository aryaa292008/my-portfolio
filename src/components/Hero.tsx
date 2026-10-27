import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  FileText, 
  Fingerprint, 
  ArrowDown, 
  Compass
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 overflow-hidden forensic-grid-bg">
      {/* Dynamic ambient forensic glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Forensic Tech Crosshair Coordinates */}
      <div className="hidden md:block absolute top-12 left-8 text-[10px] font-mono text-cyan-500/40 select-none tracking-widest">
        CRIME SCENE INVESTIGATION // UNIT-01 // COORD: 26.9124° N, 75.7873° E
      </div>
      <div className="hidden md:block absolute top-12 right-8 text-[10px] font-mono text-cyan-500/40 select-none tracking-widest">
        CHAIN OF CUSTODY VERIFICATION: SECURE [LOGGED]
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-500/30 bg-slate-900/90 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>B.Sc. Forensic Science & Technology • JECRC University</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-cyan-400 max-w-2xl leading-snug">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Location & Intro */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-950/70 border border-cyan-800/50 text-cyan-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Jaipur, Rajasthan, India</span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-300/80">Available for Forensic Internships & Research</span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Dedicated student at <strong className="text-white font-semibold">JECRC University</strong> applying rigorous scientific inquiry to justice. Specializing in crime scene analysis, evidence preservation, physical pattern identification, serological/chemical analysis, and digital forensics fundamentals.
              </p>
            </div>

            {/* Direct Contact Buttons (Requirement 1) */}
            <div className="space-y-2 pt-2">
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400">
                Direct Contact & Profiles
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl">
                {/* Email Pill */}
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 hover:border-cyan-500/50 transition group shadow-sm">
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="flex items-center gap-2.5 text-xs font-medium text-slate-200 group-hover:text-cyan-300 truncate"
                    title={`Send email to ${personalInfo.email}`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-950/60 text-cyan-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400">Email Address</div>
                      <div className="truncate font-semibold">{personalInfo.email}</div>
                    </div>
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone Pill */}
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 hover:border-cyan-500/50 transition group shadow-sm">
                  <a 
                    href={`tel:${personalInfo.phone}`} 
                    className="flex items-center gap-2.5 text-xs font-medium text-slate-200 group-hover:text-cyan-300 truncate"
                    title={`Call ${personalInfo.phone}`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-950/60 text-teal-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] text-slate-400">Phone Contact</div>
                      <div className="truncate font-semibold">{personalInfo.formattedPhone}</div>
                    </div>
                  </a>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* GitHub Pill */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 hover:border-cyan-500/50 transition group shadow-sm"
                >
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200 group-hover:text-cyan-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-200 group-hover:text-white">
                      <GithubIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">GitHub Repository</div>
                      <div className="font-semibold">aryaa292008/my-portfolio</div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-cyan-400" />
                </a>

                {/* LinkedIn Pill */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 hover:border-cyan-500/50 transition group shadow-sm"
                >
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-200 group-hover:text-cyan-300">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-950/60 text-blue-400">
                      <LinkedinIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400">LinkedIn Profile</div>
                      <div className="font-semibold">in/aryaa292008</div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-cyan-400" />
                </a>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#coursework"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Compass className="h-4 w-4" />
                <span>Explore Coursework</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400 hover:text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <FileText className="h-4 w-4" />
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:border-slate-700 transition"
              >
                <span>Get in Touch</span>
                <ArrowDown className="h-4 w-4 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Forensic Investigator ID Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              {/* Backing Neon Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 to-teal-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Forensic ID Badge Card */}
              <div className="relative rounded-2xl border border-cyan-500/30 bg-slate-900/90 backdrop-blur-xl p-6 shadow-2xl space-y-6 text-slate-200">
                {/* Header of Badge */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-950 border border-cyan-700/50 text-cyan-400">
                      <Fingerprint className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-widest uppercase font-mono text-cyan-400">
                        CRIMINALISTICS IDENTIFICATION
                      </div>
                      <div className="text-sm font-bold text-white tracking-wide">
                        FORENSIC SCIENCE CADRE
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                    VERIFIED
                  </span>
                </div>

                {/* Candidate Particulars */}
                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-medium">Candidate Name</span>
                    <span className="font-bold text-white">{personalInfo.name}</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-medium">Academic Affiliation</span>
                    <span className="font-semibold text-cyan-300">JECRC University</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-medium">Program</span>
                    <span className="font-medium text-slate-200 text-right">B.Sc. Forensic Science & Tech</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-medium">Expected Graduation</span>
                    <span className="font-mono font-semibold text-white">2030</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-400 font-medium">Senior Secondary</span>
                    <span className="font-semibold text-amber-300">1st Division (2026)</span>
                  </div>

                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-400 font-medium">Core Specialties</span>
                    <span className="text-slate-300 text-right font-medium">
                      Serology • Toxicology • Latent Prints
                    </span>
                  </div>
                </div>

                {/* Barcode / Tech footer decoration */}
                <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
                  <div className="h-6 w-full flex items-center justify-between gap-1 opacity-60">
                    <div className="h-full w-1 bg-cyan-400"></div>
                    <div className="h-full w-2 bg-slate-600"></div>
                    <div className="h-full w-0.5 bg-cyan-400"></div>
                    <div className="h-full w-3 bg-slate-600"></div>
                    <div className="h-full w-1.5 bg-cyan-300"></div>
                    <div className="h-full w-0.5 bg-slate-500"></div>
                    <div className="h-full w-2 bg-cyan-400"></div>
                    <div className="h-full w-1 bg-slate-600"></div>
                    <div className="h-full w-3 bg-cyan-300"></div>
                    <div className="h-full w-0.5 bg-slate-600"></div>
                    <div className="h-full w-2 bg-cyan-400"></div>
                    <div className="h-full w-1.5 bg-slate-500"></div>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>DOC-ID: AC-FST-2026</span>
                    <span>CHAIN_OF_CUSTODY_VALID</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
