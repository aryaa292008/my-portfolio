import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Internship Opportunity',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    // Compose mailto
    const mailSubject = encodeURIComponent(`[${formData.inquiryType}] ${formData.subject || 'Portfolio Inquiry'} from ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}\n\n---\nSent via Arya Choudhary Forensic Portfolio`
    );

    window.open(`mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-slate-800/80 bg-slate-950 forensic-grid-bg">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start md:items-center md:text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3 py-1 text-xs font-semibold text-cyan-300">
            <Send className="h-3.5 w-3.5" />
            <span>Direct Communication Channel</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Interested in discussing an internship, laboratory project, forensic research collaboration, or academic opportunity? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" /> Direct Contact Channels
            </h3>

            {/* Email Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 hover:border-cyan-500/40 transition group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-950 border border-cyan-800/50 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Primary Email
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors block break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Response time: Within 24 hours</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Compose Email &rarr;
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 hover:border-cyan-500/40 transition group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-950 border border-teal-800/50 text-teal-400 group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Phone & WhatsApp
                    </div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.formattedPhone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800 transition"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Voice / SMS</span>
                <a
                  href={`https://wa.me/91${personalInfo.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline font-semibold"
                >
                  Open WhatsApp &rarr;
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Location & Base
                  </div>
                  <div className="text-sm font-bold text-white">
                    Jaipur, Rajasthan, India
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Affiliation: JECRC University Campus
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-cyan-500/40 hover:bg-slate-900 transition group"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="h-4 w-4 text-slate-400 group-hover:text-white" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white">GitHub</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-cyan-500/40 hover:bg-slate-900 transition group"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="h-4 w-4 text-blue-400" />
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-white">LinkedIn</span>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-cyan-500/30 bg-slate-900/90 p-6 sm:p-8 shadow-2xl relative">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
                <MessageSquare className="h-4 w-4 text-cyan-400" /> Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the form below to initiate an inquiry or trigger a formatted email draft directly.
              </p>

              {submitted && (
                <div className="mb-6 rounded-xl bg-emerald-950/60 border border-emerald-800/60 p-4 text-xs text-emerald-300 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold text-emerald-200 mb-0.5">Message Ready!</strong>
                    Your mail client has been opened with your prefilled inquiry. You can also write directly to <span className="underline font-mono">{personalInfo.email}</span>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inquiry Type Radio / Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Inquiry Category
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'Internship Opportunity',
                      'Research Project',
                      'Lab Visit / Training',
                      'General Message'
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`p-2 rounded-xl text-[11px] font-semibold text-center border transition ${
                          formData.inquiryType === type
                            ? 'border-cyan-400 bg-cyan-950/60 text-cyan-300'
                            : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    placeholder="Brief summary of topic..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Message / Inquiry Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the opportunity, laboratory requirements, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-teal-400 hover:shadow-cyan-500/30 transition-all active:scale-[0.99]"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message via Email Client</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
