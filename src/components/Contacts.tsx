import { useState, FormEvent } from 'react';
import { Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { portfolioInfo } from '../data/portfolioData';
import { DotGrid } from './DotGrid';
import emailjs from '@emailjs/browser';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const EMAILJS_SERVICE_ID = 'service_lq0t2qy';
const EMAILJS_TEMPLATE_ID = 'template_at2i0j6';
const EMAILJS_PUBLIC_KEY = '7KLtJG1OSLVhUZxjp';

export function Contacts() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const directEmail = 'titusaoluoch@gmail.com';
  const phoneNumber = '+254112470926';
  const whatsappNumber = '254112470926';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          title: formData.title || 'Portfolio Inquiry',
          message: formData.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );
      setFormSubmitted(true);
    } catch (error) {
      console.error('EmailJS error:', error);
    } finally {
      setIsSending(false);
    }
  };

  const contactMethods = [
    {
      name: 'Phone',
      href: `tel:${phoneNumber}`,
      icon: Phone,
      color: 'text-[#C778DD]',
      isExternal: false,
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/${whatsappNumber}`,
      icon: WhatsAppIcon,
      color: 'text-[#98C379]',
      isExternal: true,
    },
    {
      name: 'Email',
      href: `mailto:${directEmail}`,
      icon: Mail,
      color: 'text-[#C778DD]',
      isExternal: false,
    },
  ];

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

        {/* Description */}
        <p className="text-sm sm:text-base text-[#ABB2BF] leading-relaxed mb-8">
          {portfolioInfo.contacts.availability}
        </p>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

           {/* Left Column: Interactive Message Form */}
           <div className="lg:col-span-7">
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
                   <h4 className="text-white font-bold text-base">Message Sent!</h4>
                   <p className="text-xs sm:text-sm text-[#ABB2BF] max-w-sm">
                     Your inquiry has been sent to{' '}
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
                         name="name"
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
                         name="email"
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
                       name="title"
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
                       name="message"
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
                       disabled={isSending}
                       className="inline-flex items-center gap-2 border border-[#C778DD] text-white px-5 py-2.5 font-medium hover:bg-[#C778DD]/20 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                       {isSending ? (
                         <Loader2 className="w-3.5 h-3.5 animate-spin" />
                       ) : (
                         <Send className="w-3.5 h-3.5" />
                       )}
                       <span>{isSending ? 'Sending...' : 'Send message ->'}</span>
                     </button>
                   </div>
                 </form>
               )}
             </div>
           </div>

           {/* Right Column: "Instant Direct Message/Call" Box */}
           <div className="lg:col-span-5">
             <div className="border border-[#ABB2BF] bg-[#282C33] p-5 sm:p-6 space-y-4">
               <h3 className="text-white font-semibold text-base sm:text-lg border-b border-[#ABB2BF]/30 pb-3">
                 Instant Direct Message/Call
               </h3>

               {contactMethods.map((method) => {
                 const Icon = method.icon;
                 return (
                   <a
                     key={method.name}
                     href={method.href}
                     {...(method.isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                     className="flex items-center gap-3 text-sm text-[#ABB2BF] hover:text-white transition-colors group"
                   >
                     <Icon className={`w-4 h-4 ${method.color}`} />
                     <span className="font-mono">{method.name}</span>
                   </a>
                 );
               })}

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
