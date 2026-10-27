import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Coursework } from './components/Coursework';
import { Skills } from './components/Skills';
import { ForensicLabShowcase } from './components/ForensicLabShowcase';
import { AchievementsLanguages } from './components/AchievementsLanguages';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#070c16] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Top Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* About & Career Objective */}
        <About />

        {/* Education */}
        <Education />

        {/* Relevant Coursework */}
        <Coursework />

        {/* Key Skills */}
        <Skills />

        {/* Forensic Laboratory & Investigation Interactive Showcase */}
        <ForensicLabShowcase />

        {/* Achievements & Languages */}
        <AchievementsLanguages onOpenResume={() => setResumeOpen(true)} />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
};

export default App;
