import { useState, FormEvent } from 'react';
import { Mail, MessageSquare, Copy, Check, Send, CheckCircle2 } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';
import { DotGrid } from './DotGrid';

export function Contacts() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const directEmail = 'titusaoluoch@gmail.com';

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate sending message or preparing mailto
    setFormSubmitted(true);
    setTimeout(() => {
      // Create mailto fallback link targeting your direct email
      const mailtoLink = `mailto:${directEmail}?subject=${encodeURIComponent(
        formData.title || 'Freelance Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Hi Titus,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section id="contacts" className="py-14 md:py-20 relative">
      
      {/* Decorative dot matrix on the far left */}
      <div className="hidden xl:block absolute left-4 bottom-20 pointer-events-none opacity-40">
        <DotGrid rows={5} cols={3} color="#ABB2BF" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex items-center gap-1">
            <span className="text-2xl sm:text-3xl font-bold text-[#C778DD]">#</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
              contacts
            </h2>
          </div>
          {/* Horizontal Accent Line */}
          <div className="h-[1px] bg-[#C778DD] flex-grow max-w-xs opacity-80" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Description & Interactive Message Form */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm sm:text-base text-[#ABB2BF] leading-relaxed">
              {portfolioInfo.contacts.availability}
            </p>

            {/* Direct Message Form */}
            <div className="border border-[#ABB2BF]/60 bg-[#282C33] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#ABB2BF]/30 pb-3">
                <span className="text-white font-medium text-sm flex items-center gap-2">
                  <span className="text-[#C778DD] font-mono">&gt;</span> Quick Inquiry Dispatch
                </span>
                <span className="text-[11px] text-[#ABB2BF] font-mono">Status: Direct to inbox</span>
              </div>

              {formSubmitted ? (
                <div className="py-6 flex flex-col items-center text-center space-y-3">
                  <div className="w-10 h-10 border border-emerald-400 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-bold text-base">Inquiry Prepared!</h4>
                  <p className="text-xs sm:text-sm text-[#ABB2BF] max-w-sm">
                    Opening your default email client to send message to{' '}
                    <span className="text-[#C778DD]">{directEmail}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', title: '', message: '' });
                    }}
                    className="text-xs text-[#C778DD] hover:underline cursor-pointer pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#ABB2BF] text-xs mb-1 font-mono">
                        Name <span className="text-[#C778DD]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name / Company"
                        className="w-full bg-[#1E2228] border border-[#ABB2BF]/50 px-3 py-2 text-white placeholder-[#ABB2BF]/40 focus:outline-none focus:border-[#C778DD] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#ABB2BF] text-xs mb-1 font-mono">
                        Email <span className="text-[#C778DD]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full bg-[#1E2228] border border-[#ABB2BF]/50 px-3 py-2 text-white placeholder-[#ABB2BF]/40 focus:outline-none focus:border-[#C778DD] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#ABB2BF] text-xs mb-1 font-mono">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. Fullstack Web App, Frontend Feature, API Integration"
                      className="w-full bg-[#1E2228] border border-[#ABB2BF]/50 px-3 py-2 text-white placeholder-[#ABB2BF]/40 focus:outline-none focus:border-[#C778DD] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#ABB2BF] text-xs mb-1 font-mono">
                      Message <span className="text-[#C778DD]">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your requirements, timeline, and goals..."
                      className="w-full bg-[#1E2228] border border-[#ABB2BF]/50 px-3 py-2 text-white placeholder-[#ABB2BF]/40 focus:outline-none focus:border-[#C778DD] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-1">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 border border-[#C778DD] text-white px-5 py-2.5 font-medium hover:bg-[#C778DD]/20 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send message -&gt;</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: "Message me here" Box */}
          <div className="lg:col-span-5">
            <div className="border border-[#ABB2BF] bg-[#282C33] p-5 sm:p-6 space-y-4">
              <h3 className="text-white font-semibold text-base sm:text-lg border-b border-[#ABB2BF]/30 pb-3">
                Message me here
              </h3>

              {/* Discord row */}
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2 text-[#ABB2BF]">
                  <MessageSquare className="w-4 h-4 text-[#C778DD]" />
                  <span className="font-mono">{portfolioInfo.contacts.discord}</span>
                </div>
                <button
                  onClick={() => handleCopy(portfolioInfo.contacts.discord, 'discord')}
                  aria-label="Copy Discord handle"
                  className="p-1.5 border border-[#ABB2BF]/40 hover:border-[#C778DD] hover:text-white text-[#ABB2BF] transition-colors cursor-pointer"
                  title="Copy Discord"
                >
                  {copiedField === 'discord' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Primary Email row */}
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2 text-[#ABB2BF]">
                  <Mail className="w-4 h-4 text-[#C778DD]" />
                  <a
                    href={`mailto:${portfolioInfo.contacts.primaryEmail}`}
                    className="font-mono hover:text-white hover:underline transition-colors truncate"
                  >
                    {portfolioInfo.contacts.primaryEmail}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(portfolioInfo.contacts.primaryEmail, 'email')}
                  aria-label="Copy primary email"
                  className="p-1.5 border border-[#ABB2BF]/40 hover:border-[#C778DD] hover:text-white text-[#ABB2BF] transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Direct Gmail row */}
              <div className="flex items-center justify-between gap-3 text-sm border-t border-[#ABB2BF]/20 pt-3">
                <div className="flex items-center gap-2 text-[#ABB2BF]">
                  <Mail className="w-4 h-4 text-[#98C379]" />
                  <a
                    href={`mailto:${directEmail}`}
                    className="font-mono hover:text-white hover:underline transition-colors truncate text-xs sm:text-sm"
                  >
                    {directEmail}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(directEmail, 'gmail')}
                  aria-label="Copy Gmail address"
                  className="p-1.5 border border-[#ABB2BF]/40 hover:border-[#C778DD] hover:text-white text-[#ABB2BF] transition-colors cursor-pointer"
                  title="Copy Gmail"
                >
                  {copiedField === 'gmail' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Quick note badge */}
              <div className="pt-2 text-[11px] text-[#ABB2BF]/70 font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                <span>Available for immediate contracts & proposals</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}