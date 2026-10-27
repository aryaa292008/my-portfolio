import React, { useState, useEffect } from 'react';
import { Menu, X, Fingerprint, FileText, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

const navSections = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Coursework', href: '#coursework' },
  { name: 'Skills', href: '#skills' },
  { name: 'Investigation Lab', href: '#lab-toolkit' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section
      const sections = ['about', 'education', 'coursework', 'skills', 'lab-toolkit', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-cyan-500/20 bg-slate-950/90 backdrop-blur-md shadow-lg shadow-cyan-950/20 py-2.5'
          : 'border-b border-slate-800/60 bg-slate-950/60 backdrop-blur-sm py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={(e) => scrollTo(e, '#top')}
          className="group flex items-center gap-3 text-white transition hover:opacity-95"
          aria-label="Arya Choudhary Portfolio"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950 text-cyan-400 group-hover:text-cyan-300">
              <Fingerprint className="h-5 w-5" />
            </div>
            {/* Status indicator dot */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500 border-2 border-slate-950"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-slate-100 text-base leading-tight group-hover:text-cyan-300 transition-colors">
                {personalInfo.name}
              </span>
            </div>
            <span className="text-[11px] font-medium text-cyan-400/90 tracking-wide uppercase">
              B.Sc. Forensic Science • JECRC
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 bg-slate-900/80 px-2 py-1.5 rounded-full border border-slate-800 shadow-inner"
          aria-label="Main navigation"
        >
          {navSections.map((item) => {
            const isCurrent = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isCurrent
                    ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-sm shadow-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400 hover:text-white transition-all shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>View CV</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollTo(e, '#contact')}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-500/30 transition-all active:scale-95"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-medium"
            title="View CV"
          >
            <FileText className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-cyan-400" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-cyan-500/20 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1.5">
            {navSections.map((item) => {
              const isCurrent = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    isCurrent
                      ? 'bg-cyan-950/70 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{item.name}</span>
                  {isCurrent && <Sparkles className="h-3.5 w-3.5 text-cyan-400" />}
                </a>
              );
            })}
            
            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-slate-900 py-2.5 text-xs font-semibold text-cyan-300"
              >
                <FileText className="h-4 w-4" />
                <span>View Full Curriculum Vitae</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 py-2.5 text-xs font-semibold text-slate-950"
              >
                <Send className="h-4 w-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
