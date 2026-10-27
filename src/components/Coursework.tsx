import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  X, 
  ChevronRight, 
  FlaskConical, 
  Fingerprint, 
  ShieldAlert, 
  Scale, 
  Binary, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { courseworkList } from '../data/portfolioData';
import type { Coursework as CourseworkType } from '../data/portfolioData';

export const Coursework: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<CourseworkType | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Laboratory & Biology', 'Physical Evidence', 'Legal & Criminology', 'Digital & Cyber'];

  const filteredCourses = courseworkList.filter((course) => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      course.practicalSkills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'intro-forensic-science':
        return <ShieldAlert className="h-6 w-6 text-cyan-400" />;
      case 'forensic-biology-serology':
        return <FlaskConical className="h-6 w-6 text-rose-400" />;
      case 'forensic-chemistry-toxicology':
        return <FlaskConical className="h-6 w-6 text-amber-400" />;
      case 'fingerprints-questioned-documents':
        return <Fingerprint className="h-6 w-6 text-teal-400" />;
      case 'criminology-criminal-law':
        return <Scale className="h-6 w-6 text-indigo-400" />;
      case 'cyber-crime-digital-forensics':
        return <Binary className="h-6 w-6 text-cyan-400" />;
      default:
        return <BookOpen className="h-6 w-6 text-cyan-400" />;
    }
  };

  return (
    <section id="coursework" className="py-20 relative border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Academic Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Relevant Coursework & Laboratory Modules
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Specialized curriculum at JECRC University spanning core physical evidence analysis, forensic serology, toxicology screening, legal statutes, and digital investigation.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search topics, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Coursework Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900/70 p-6 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                    {getCourseIcon(course.id)}
                  </div>
                  <span className="text-[10px] uppercase font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-950 text-cyan-300 border border-slate-800">
                    {course.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {course.shortDesc}
                  </p>
                </div>

                {/* Topics Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                    <Sparkles className="h-3 w-3 text-cyan-400" /> Key Topics:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 2).map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] bg-slate-950/80 text-slate-300 border border-slate-800/80 truncate max-w-full"
                      >
                        {topic}
                      </span>
                    ))}
                    {course.topics.length > 2 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-950 text-cyan-400">
                        +{course.topics.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Hint */}
              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>View Full Syllabus & Lab Skills</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Course Details */}
        {selectedCourse && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedCourse(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-slate-900 border border-cyan-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-cyan-500/40">
                  {getCourseIcon(selectedCourse.id)}
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    {selectedCourse.category} • JECRC University
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {selectedCourse.title}
                  </h3>
                </div>
              </div>

              {/* Course Overview */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Course Overview & Significance
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                  {selectedCourse.fullDesc}
                </p>
              </div>

              {/* Topics Grid */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Theoretical Syllabus & Key Concepts
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCourse.topics.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Skills */}
              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400">
                  Practical Laboratory & Casework Skills
                </h4>
                <div className="space-y-1.5">
                  {selectedCourse.practicalSkills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 bg-cyan-950/30 p-2.5 rounded-lg border border-cyan-900/40">
                      <Sparkles className="h-3.5 w-3.5 text-cyan-300 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer */}
              <div className="pt-2 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition"
                >
                  Close Module
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
