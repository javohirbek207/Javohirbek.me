import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/portfolioData';
import { 
  Send, 
  Github, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink,
  MapPin,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.form.errorMsg);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(
        language === 'uz'
          ? "Iltimos, to‘g‘ri elektron pochta manzilini kiriting."
          : "Please enter a valid email address."
      );
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio saytidan yangi xabar: ${formData.name.trim()}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 8000);
      } else {
        throw new Error('Yuborishda xatolik yuz berdi');
      }
    } catch (err) {
      setErrorMessage(
        language === 'uz'
          ? "Xabar yuborishda xatolik yuz berdi. Iltimos, to‘g‘ridan-to‘g‘ri Telegram yoki Email orqali yozing."
          : "Failed to send message. Please contact directly via Telegram or Email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 relative bg-[#050505] border-t border-white/[0.06]">
      {/* Subtle ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[350px] bg-accent-neon/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-accent-neon mb-2.5 sm:mb-3">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {t.contact.title}
          </h2>
          <p className="text-content-muted text-xs sm:text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
            <h3 className="text-xs font-semibold text-content-subtle uppercase tracking-wider mb-1 sm:mb-2">
              {t.contact.directTitle}
            </h3>

            {/* Telegram Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 active:border-accent-neon/40 flex items-center justify-between transition-colors">
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group min-w-0 flex-1 mr-2"
              >
                <div className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-center text-accent-neon shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-content-subtle font-mono">Telegram</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-neon transition-colors truncate">
                    {contactInfo.telegramUsername}
                  </div>
                </div>
              </a>
              <button
                onClick={() => handleCopy(contactInfo.telegramUsername, 'telegram')}
                aria-label="Copy Telegram username"
                className="w-10 h-10 rounded-lg text-content-muted hover:text-white active:bg-white/10 flex items-center justify-center transition-colors shrink-0"
                title={t.contact.copySuccess}
              >
                {copiedField === 'telegram' ? (
                  <Check className="w-4 h-4 text-accent-neon" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 active:border-accent-neon/40 flex items-center justify-between transition-colors">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 group min-w-0 flex-1 mr-2"
              >
                <div className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-center text-accent-neon shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-content-subtle font-mono">Email</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-neon transition-colors truncate">
                    {contactInfo.email}
                  </div>
                </div>
              </a>
              <button
                onClick={() => handleCopy(contactInfo.email, 'email')}
                aria-label="Copy Email address"
                className="w-10 h-10 rounded-lg text-content-muted hover:text-white active:bg-white/10 flex items-center justify-center transition-colors shrink-0"
                title={t.contact.copySuccess}
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-accent-neon" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-4 rounded-xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 active:border-accent-neon/40 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-center text-accent-neon shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-content-subtle font-mono">GitHub</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-accent-neon transition-colors truncate">
                    {contactInfo.githubUsername}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-content-subtle group-hover:text-white shrink-0" />
            </a>

            {/* Location & Domain */}
            <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs text-content-muted font-mono flex-wrap gap-2">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent-emerald" />
                <span>{contactInfo.location}</span>
              </span>
              <a
                href={contactInfo.domain}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-neon hover:underline"
              >
                javohirbek.me
              </a>
            </div>
          </div>

          {/* Right Column: Clean Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0d0d10] border border-white/[0.08] p-5 sm:p-7">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                {t.contact.form.title}
              </h3>

              {isSubmitted ? (
                <div className="p-4 sm:p-5 rounded-xl bg-accent-neon/10 border border-accent-neon/30 text-accent-neon flex items-center gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-sm">{t.contact.form.successMsg}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-content-subtle mb-1.5 font-mono">
                      {t.contact.form.nameLabel} <span className="text-accent-neon">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#121215] border border-white/10 text-white placeholder-content-subtle text-base sm:text-sm focus:outline-none focus:border-accent-neon/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-content-subtle mb-1.5 font-mono">
                      {t.contact.form.emailLabel} <span className="text-accent-neon">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#121215] border border-white/10 text-white placeholder-content-subtle text-base sm:text-sm focus:outline-none focus:border-accent-neon/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-content-subtle mb-1.5 font-mono">
                      {t.contact.form.messageLabel} <span className="text-accent-neon">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-[#121215] border border-white/10 text-white placeholder-content-subtle text-base sm:text-sm focus:outline-none focus:border-accent-neon/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full min-h-[50px] py-3.5 rounded-xl bg-accent-neon hover:bg-[#4dff96] active:scale-[0.98] text-black font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-glow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-accent-neon"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                    <span>
                      {isSubmitting ? t.contact.form.sending : t.contact.form.sendBtn}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
