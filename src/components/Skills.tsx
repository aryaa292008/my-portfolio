import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  ShieldCheck, 
  Fingerprint, 
  FlaskConical, 
  FileText, 
  Binary, 
  Brain, 
  Eye, 
  MessageSquare, 
  Users, 
  Laptop, 
  CheckCircle2, 
  FileSearch
} from 'lucide-react';
import { technicalSkills, professionalSkills } from '../data/portfolioData';
import type { SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Technical' | 'Professional'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const allSkills: SkillItem[] = [...technicalSkills, ...professionalSkills];

  const filteredSkills = allSkills.filter((skill) => {
    const matchesTab = 
      activeTab === 'All' ||
      (activeTab === 'Technical' && skill.category === 'Technical & Subject') ||
      (activeTab === 'Professional' && skill.category === 'Professional');

    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.level.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="h-5 w-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
      case 'Fingerprint':
        return <Fingerprint className="h-5 w-5 text-teal-400" />;
      case 'FlaskConical':
        return <FlaskConical className="h-5 w-5 text-amber-400" />;
      case 'FileSearch':
        return <FileSearch className="h-5 w-5 text-rose-400" />;
      case 'Binary':
        return <Binary className="h-5 w-5 text-blue-400" />;
      case 'FileText':
        return <FileText className="h-5 w-5 text-cyan-400" />;
      case 'Laptop':
        return <Laptop className="h-5 w-5 text-indigo-400" />;
      case 'Brain':
        return <Brain className="h-5 w-5 text-purple-400" />;
      case 'Eye':
        return <Eye className="h-5 w-5 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-amber-400" />;
      case 'MessageSquare':
        return <MessageSquare className="h-5 w-5 text-teal-400" />;
      case 'Users':
        return <Users className="h-5 w-5 text-emerald-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-cyan-400" />;
    }
  };

  const getBadgeClass = (level: string) => {
    switch (level) {
      case 'Core Competency':
        return 'bg-cyan-950/70 text-cyan-300 border-cyan-700/50';
      case 'Proficient':
        return 'bg-teal-950/70 text-teal-300 border-teal-700/50';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80 bg-slate-900/40 forensic-grid-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Forensic & Analytical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Key Skills & Competencies
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Methodological disciplines, laboratory techniques, and professional investigative competencies tailored for forensic science casework.
          </p>
        </div>

        {/* Tab & Search Controller */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('All')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'All'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              All Skills ({allSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('Technical')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'Technical'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Technical & Forensic ({technicalSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('Professional')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'Professional'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Professional Strengths ({professionalSkills.length})
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full border ${getBadgeClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono text-[10px] text-slate-400">{skill.category}</span>
                <span className="flex items-center gap-1 text-cyan-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  <CheckCircle2 className="h-3 w-3" /> Ready
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
