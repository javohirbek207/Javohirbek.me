import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/portfolioData';
import { 
  Send, 
  Github, 
  Linkedin, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setErrorMessage(t.contact.form.errorMsg);
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', contact: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#050505] border-t border-white/[0.06]">
      {/* Subtle ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[350px] bg-accent-neon/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-accent-neon mb-3">
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.contact.title}
          </h2>
          <p className="text-content-muted text-base mt-2 max-w-xl">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold text-content-subtle uppercase tracking-wider mb-2">
              {t.contact.directTitle}
            </h3>

            {/* Telegram Card */}
            <div className="p-4 rounded-xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 flex items-center justify-between transition-colors">
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-center text-accent-neon">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-content-subtle font-mono">Telegram</div>
                  <div className="text-sm font-semibold text-white group-hover:text-accent-neon transition-colors">
                    {contactInfo.telegramUsername}
                  </div>
                </div>
              </a>
              <button
                onClick={() => handleCopy(contactInfo.telegramUsername, 'telegram')}
                aria-label="Nusxalash"
                className="p-2 rounded-lg text-content-muted hover:text-white transition-colors"
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
            <div className="p-4 rounded-xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 flex items-center justify-between transition-colors">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 group truncate mr-2"
              >
                <div className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-center text-accent-neon shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-content-subtle font-mono">Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-accent-neon transition-colors truncate">
                    {contactInfo.email}
                  </div>
                </div>
              </a>
              <button
                onClick={() => handleCopy(contactInfo.email, 'email')}
                aria-label="Nusxalash"
                className="p-2 rounded-lg text-content-muted hover:text-white transition-colors shrink-0"
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
              className="p-4 rounded-xl bg-[#0d0d10] border border-white/[0.08] hover:border-accent-neon/30 flex items-center justify-between transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#141418] border border-white/10 flex items-center justify-center text-accent-neon">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-content-subtle font-mono">GitHub</div>
                  <div className="text-sm font-semibold text-white group-hover:text-accent-neon transition-colors">
                    {contactInfo.githubUsername}
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-content-subtle group-hover:text-white" />
            </a>

            {/* Location */}
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2.5 text-xs text-content-muted font-mono">
              <MapPin className="w-4 h-4 text-accent-emerald" />
              <span>{contactInfo.location}</span>
            </div>
          </div>

          {/* Right Column: Clean Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#0d0d10] border border-white/[0.08] p-6 sm:p-7">
              <h3 className="text-lg font-bold text-white mb-4">
                {t.contact.form.title}
              </h3>

              {isSubmitted ? (
                <div className="p-5 rounded-xl bg-accent-neon/10 border border-accent-neon/30 text-accent-neon flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm">{t.contact.form.successMsg}</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="text-xs font-mono text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-content-subtle mb-1.5">
                      {t.contact.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121215] border border-white/10 text-white placeholder-content-subtle text-sm focus:outline-none focus:border-accent-neon/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-content-subtle mb-1.5">
                      {t.contact.form.contactLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder={t.contact.form.contactPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121215] border border-white/10 text-white placeholder-content-subtle text-sm focus:outline-none focus:border-accent-neon/60 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-content-subtle mb-1.5">
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121215] border border-white/10 text-white placeholder-content-subtle text-sm focus:outline-none focus:border-accent-neon/60 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-accent-neon hover:bg-[#4dff96] text-black font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-glow-sm disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
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
