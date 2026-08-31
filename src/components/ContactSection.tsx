import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Facebook, 
  GraduationCap,
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Project Discussion',
    message: ''
  });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setIsSubmitting(true);

    try {
      // Send real email via FormSubmit API to parshuram8792@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/parshuram8792@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: `[Portfolio Contact] ${formState.subject}`,
          message: formState.message,
          _captcha: 'false'
        })
      });

      // Also generate mailto fallback
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formState.subject} - from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.subject}\n\nMessage:\n${formState.message}`
      )}`;

      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (error) {
      // Fallback in case of network restriction: open default mail client
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formState.subject} - from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.subject}\n\nMessage:\n${formState.message}`
      )}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-28 sm:py-32 relative overflow-hidden bg-[#EEF4FF] transition-colors duration-500"
    >
      {/* Background Soft Blue Pastel Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#DBE8FF] to-[#E5E0FF] rounded-full blur-[140px] opacity-75 pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#E8F0FE] rounded-full blur-[120px] opacity-60 pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/90 border border-[#4F7CFF]/20 text-[#4F7CFF] text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[#1D1D1F] tracking-tight max-w-3xl leading-tight">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="text-[#4F7CFF]">Amazing Together</span> 🚀
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Have a project idea, a development role, an AI/ML opportunity, or want to discuss engineering? Feel free to reach out directly.
          </p>
        </div>

        {/* Social Connect Action Buttons Strip (LinkedIn, Instagram, Facebook, GitHub/Email) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          
          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/parashuram-prajapati-97659a32a/"
            target="_blank"
            rel="noreferrer"
            id="contact-btn-linkedin"
            className="p-5 rounded-[28px] bg-white/85 backdrop-blur-xl border border-white/90 hover:border-[#4F7CFF]/50 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#E8F2FF] text-[#4F7CFF] flex items-center justify-center shadow-2xs font-bold">
                <Linkedin className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-[#4F7CFF] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F7CFF] block">
                LinkedIn
              </span>
              <span className="text-sm font-bold text-[#1D1D1F] block mt-0.5 truncate">
                Connect on LinkedIn
              </span>
            </div>
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/its_me_parshuram_18"
            target="_blank"
            rel="noreferrer"
            id="contact-btn-instagram"
            className="p-5 rounded-[28px] bg-white/85 backdrop-blur-xl border border-white/90 hover:border-[#E1306C]/50 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FDF0F6] text-[#E1306C] flex items-center justify-center shadow-2xs font-bold">
                <Instagram className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-[#E1306C] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E1306C] block">
                Instagram
              </span>
              <span className="text-sm font-bold text-[#1D1D1F] block mt-0.5">
                @its_me_parshuram_18
              </span>
            </div>
          </a>

          {/* Facebook Button */}
          <a
            href="https://www.facebook.com/share/15SJ5GW2Da/"
            target="_blank"
            rel="noreferrer"
            id="contact-btn-facebook"
            className="p-5 rounded-[28px] bg-white/85 backdrop-blur-xl border border-white/90 hover:border-[#1877F2]/50 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#E8F2FF] text-[#1877F2] flex items-center justify-center shadow-2xs font-bold">
                <Facebook className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-[#1877F2] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1877F2] block">
                Facebook
              </span>
              <span className="text-sm font-bold text-[#1D1D1F] block mt-0.5">
                Parshuram Prajapati
              </span>
            </div>
          </a>

          {/* Direct Email Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            id="contact-btn-email"
            className="p-5 rounded-[28px] bg-white/85 backdrop-blur-xl border border-white/90 hover:border-[#8B6DFF]/50 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#EEE9FF] text-[#8B6DFF] flex items-center justify-center shadow-2xs font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-[#8B6DFF] group-hover:translate-x-1 transition-transform" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B6DFF] block">
                Direct Email
              </span>
              <span className="text-sm font-bold text-[#1D1D1F] block mt-0.5 truncate">
                parshuram8792@gmail.com
              </span>
            </div>
          </a>

        </div>

        {/* Main Contact Area: Message Form + Direct Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white/85 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 border border-white/90 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-[#1D1D1F] mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out this quick form and I will get back to you within 24 hours.
            </p>

            {isSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-emerald-900">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {formState.name}! I've received your note regarding "{formState.subject}" and will respond to {formState.email} promptly.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormState({ name: '', email: '', subject: 'Project Discussion', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Topic Presets */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">What is this regarding?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "💡 Web Development Project", 
                      "🤖 AI & Machine Learning", 
                      "💼 Internship / Job Opportunity", 
                      "🤝 Hackathon Collaboration"
                    ].map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setFormState({ ...formState, subject: topic })}
                        className={`text-[11px] px-3 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                          formState.subject === topic
                            ? 'bg-[#4F7CFF] text-white shadow-2xs'
                            : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/15 text-xs text-[#1D1D1F] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/15 text-xs text-[#1D1D1F] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, goals, or what you'd like to collaborate on..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:border-[#4F7CFF] focus:ring-2 focus:ring-[#4F7CFF]/15 text-xs text-[#1D1D1F] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-submit-btn"
                  className="w-full py-4 rounded-2xl bg-[#4F7CFF] hover:bg-[#3d6bf0] text-white text-xs font-bold shadow-lg shadow-[#4F7CFF]/20 hover:shadow-xl hover:shadow-[#4F7CFF]/30 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Parshuram'}</span>
                </button>
              </form>
            )}

          </div>

          {/* Right Column: Direct Info Card & College Details (5 cols) */}
          <div className="lg:col-span-5 bg-white/85 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 border border-white/90 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-heading font-bold text-xl text-[#1D1D1F] mb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email with copy */}
                <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#EEE9FF] text-[#8B6DFF] flex items-center justify-center font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Official Email</span>
                      <span className="text-xs font-bold text-[#1D1D1F]">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-500 text-xs border border-slate-200 cursor-pointer transition-colors"
                    title="Copy Email"
                  >
                    {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* College & Education */}
                <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center justify-between shadow-2xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#E8F2FF] text-[#4F7CFF] flex items-center justify-center font-bold">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">College</span>
                      <span className="text-xs font-bold text-[#1D1D1F]">BLDEA College of Engineering</span>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white border border-slate-100 space-y-2 shadow-2xs">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <MapPin className="w-4 h-4 text-rose-500" />
                    <span>Vijayapur, Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Clock className="w-4 h-4 text-[#4F7CFF]" />
                    <span>Response Time: Typically within a few hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tag */}
            <div className="mt-8 pt-4 border-t border-slate-100">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#E8F2FF] to-[#EEE9FF] border border-[#4F7CFF]/20 flex items-center justify-between">
                <span className="text-xs font-bold text-[#1D1D1F]">
                  Open for new opportunities
                </span>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="text-xs font-bold text-[#4F7CFF] hover:underline"
                >
                  Email Me Directly ↗
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
