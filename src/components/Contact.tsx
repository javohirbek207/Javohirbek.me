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
  AlertCircle,
  ArrowUpRight
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
    setTimeout(() => setCopiedField(null), 2000);
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
          _subject: `Portfolio message from: ${formData.name.trim()}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 7000);
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
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2">
            {t.contact.tag}
          </span>
          <h2 className="font-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl text-zinc-950 tracking-tight mb-2">
            {t.contact.title}
          </h2>
          <p className="text-zinc-500 text-sm">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              {language === 'uz' ? 'To‘g‘ridan-to‘g‘ri aloqa' : 'Direct Channels'}
            </h3>

            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl border border-zinc-200/80 hover:border-zinc-400 transition-colors flex items-center justify-between">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 min-w-0 flex-1 mr-2 group"
                >
                  <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">Email</span>
                    <span className="text-sm font-medium text-zinc-950 truncate block group-hover:underline">
                      {contactInfo.email}
                    </span>
                  </div>
                </a>
                <button
                  onClick={() => handleCopy(contactInfo.email, 'email')}
                  aria-label="Copy email"
                  className="w-8 h-8 rounded-full border border-zinc-200 hover:border-zinc-950 flex items-center justify-center text-zinc-500 hover:text-zinc-950 transition-colors shrink-0"
                  title={t.contact.copySuccess}
                >
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-zinc-200/80 hover:border-zinc-400 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Github className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">GitHub</span>
                    <span className="text-sm font-medium text-zinc-950 truncate block group-hover:underline">
                      {contactInfo.githubUsername}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-colors" />
              </a>

              {/* Telegram */}
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-zinc-200/80 hover:border-zinc-400 transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Send className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-colors" />
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-zinc-400 block">Telegram</span>
                    <span className="text-sm font-medium text-zinc-950 truncate block group-hover:underline">
                      {contactInfo.telegramUsername}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 shrink-0 transition-colors" />
              </a>
            </div>

            {/* Location & Website */}
            <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{language === 'uz' ? contactInfo.location : contactInfo.locationEn}</span>
              </span>
              <a
                href={contactInfo.domain}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-950 hover:underline"
              >
                javohirbek.me
              </a>
            </div>
          </div>

          {/* Right Column: Functional Message Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-zinc-200/80 p-5 sm:p-7 bg-zinc-50/50">
              <h3 className="font-sans font-bold text-lg sm:text-xl text-zinc-950 mb-6">
                {t.contact.form.title}
              </h3>

              {isSubmitted ? (
                <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-sm font-medium">{t.contact.form.successMsg}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-900 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase text-zinc-500 mb-1.5">
                      {t.contact.form.nameLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-950 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase text-zinc-500 mb-1.5">
                      {t.contact.form.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-950 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase text-zinc-500 mb-1.5">
                      {t.contact.form.messageLabel} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-zinc-950 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-dark w-full py-3.5 text-sm font-medium tracking-tight flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 active:scale-[0.98]"
                  >
                    <span>
                      {isSubmitting ? t.contact.form.sending : t.contact.form.sendBtn}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
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
