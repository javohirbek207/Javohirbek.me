import { Project } from '../types';

export const portfolioContent = {
  uz: {
    nav: {
      home: "Asosiy",
      projects: "Portfolio",
      contact: "Bog‘lanish",
      cta: "Aloqaga chiqish"
    },
    hero: {
      badge: "Javohirbek Maxmutov",
      status: "Yangi loyihalar va ish uchun ochiq",
      headline: "Data Analyst & Web Developer",
      subheadline: "Ma’lumotlar tahlili va amaliy veb-yechimlar",
      description: "Python, SQL va Excel vositalari orqali ma’lumotlarni tahlil qilaman hamda JavaScript, React va Node.js yordamida qulay va zamonaviy veb-loyihalar ishlab chiqaman.",
      primaryCta: "Portfolio ko‘rish",
      secondaryCta: "Bog‘lanish",
      skillsLabel: "Asosiy stack:",
      card: {
        title: "Yo‘nalishlarim",
        subtitle: "Toshkent, O‘zbekiston",
        focuses: [
          {
            title: "Data Analytics",
            desc: "Python (Pandas), SQL va Excel orqali tahlil hamda hisobotlar"
          },
          {
            title: "Web Development",
            desc: "React, JavaScript va Node.js orqali zamonaviy ilovalar"
          },
          {
            title: "Avtomatlashtirish",
            desc: "Skriptlar, API integratsiyasi va Telegram botlar"
          }
        ]
      }
    },
    projects: {
      badge: "Portfolio",
      title: "Tanlangan loyihalar",
      subtitle: "Amaliyotda yaratilgan va real natijaga qaratilgan ishlar",
      filterAll: "Barchasi",
      viewGithub: "GitHub",
      viewDemo: "Jonli ko‘rish",
      demoUnavailable: "Demo tez kunda"
    },
    contact: {
      badge: "Aloqa",
      title: "Bog‘lanish",
      subtitle: "Loyiha, hamkorlik yoki takliflar bo‘yicha istalgan vaqtda yozishingiz mumkin.",
      directTitle: "To‘g‘ridan-to‘g‘ri aloqa",
      copySuccess: "Nusxalandi!",
      form: {
        title: "Xabar qoldirish",
        nameLabel: "Ismingiz",
        namePlaceholder: "Ismingizni kiriting",
        contactLabel: "Email yoki Telegram",
        contactPlaceholder: "example@gmail.com yoki @username",
        messageLabel: "Xabaringiz",
        messagePlaceholder: "Loyiha yoki savolingiz haqida qisqacha yozing...",
        sendBtn: "Xabarni yuborish",
        sending: "Yuborilmoqda...",
        successMsg: "Rahmat! Xabaringiz qabul qilindi, tez orada aloqaga chiqaman.",
        errorMsg: "Iltimos, barcha maydonlarni to‘ldiring."
      }
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      status: "Yangi loyihalar uchun ochiq"
    }
  },
  en: {
    nav: {
      home: "Home",
      projects: "Portfolio",
      contact: "Contact",
      cta: "Get in touch"
    },
    hero: {
      badge: "Javohirbek Maxmutov",
      status: "Available for new projects & opportunities",
      headline: "Data Analyst & Web Developer",
      subheadline: "Data Analytics & Practical Web Solutions",
      description: "I analyze data using Python, SQL, and Excel, and build modern, responsive web applications with JavaScript, React, and Node.js.",
      primaryCta: "View Portfolio",
      secondaryCta: "Contact Me",
      skillsLabel: "Core Stack:",
      card: {
        title: "Core Focus",
        subtitle: "Tashkent, Uzbekistan",
        focuses: [
          {
            title: "Data Analytics",
            desc: "Data cleaning, statistical reports using Python, SQL, and Excel"
          },
          {
            title: "Web Development",
            desc: "Modern web applications built with React, JS, and Node.js"
          },
          {
            title: "Automation",
            desc: "Practical scripts, API integration, and Telegram bots"
          }
        ]
      }
    },
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      subtitle: "Hands-on projects focused on real-world practical utility",
      filterAll: "All",
      viewGithub: "GitHub",
      viewDemo: "Live Demo",
      demoUnavailable: "Demo coming soon"
    },
    contact: {
      badge: "Contact",
      title: "Get in Touch",
      subtitle: "Feel free to reach out for projects, collaborations, or inquiries.",
      directTitle: "Direct Channels",
      copySuccess: "Copied!",
      form: {
        title: "Send a Message",
        nameLabel: "Your Name",
        namePlaceholder: "Your name",
        contactLabel: "Email or Telegram",
        contactPlaceholder: "example@gmail.com or @username",
        messageLabel: "Message",
        messagePlaceholder: "Briefly tell me about your project or inquiry...",
        sendBtn: "Send Message",
        sending: "Sending...",
        successMsg: "Thank you! Your message has been received. I'll get back to you soon.",
        errorMsg: "Please fill in all fields."
      }
    },
    footer: {
      rights: "All rights reserved.",
      status: "Available for projects"
    }
  }
};

export const projectsData: Project[] = [
  {
    id: "focusai",
    title: "FocusAI",
    category: "AI & Ta’lim",
    categoryKey: "ai",
    tagline: "Talabalar uchun o‘quv jarayonini rejalashtirish va natijalarni tahlil qilish",
    description: "Talabalar o‘quv yuklamasini taqsimlash, dars va mashg‘ulotlar samaradorligini baholash hamda akademik natijalarni tahlil qilishga mo‘ljallangan loyiha.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/javohirmaxmudov",
    demoUrl: undefined,
    isDemoAvailable: false
  },
  {
    id: "caretrack",
    title: "CareTrack Clinic MRMS",
    category: "Full-Stack Web",
    categoryKey: "fullstack",
    tagline: "Klinikalar uchun bemorlar va qabullarni boshqarish tizimi",
    description: "Bemorlar ro‘yxati, shifokorlar qabul jadvali, tibbiy ko‘rik yozuvlari va to‘lovlarni boshqarishga mo‘ljallangan klinik boshqaruv veb-tizimi.",
    technologies: ["JavaScript", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/javohirmaxmudov",
    demoUrl: undefined,
    isDemoAvailable: false
  },
  {
    id: "data-analysis",
    title: "Data Analysis Projects",
    category: "Data Analytics",
    categoryKey: "analytics",
    tagline: "Python va Excel yordamida statistik tahlil va biznes xulosalari",
    description: "Xom jadvallarni tozalash, o‘rtacha/dispersiya ko‘rsatkichlarini hisoblash, Pivot jadvallar va sotuv dinamikasini vizual ifodalash bo‘yicha tahliliy ishlar.",
    technologies: ["Python", "Pandas", "Excel", "SQL"],
    githubUrl: "https://github.com/javohirmaxmudov",
    demoUrl: undefined,
    isDemoAvailable: false
  },
  {
    id: "telegram-bot",
    title: "Telegram Bot",
    category: "Telegram & Bot",
    categoryKey: "bot",
    tagline: "Node.js orqali xabarlarni qayta ishlash va avtomatlashtirilgan xizmatlar",
    description: "Foydalanuvchi buyruqlarini tezkor qayta ishlash, qulay interaktiv klaviaturalar va tashqi API integratsiyasiga ega avtomatlashtirish boti.",
    technologies: ["JavaScript", "Node.js", "Telegram Bot API"],
    githubUrl: "https://github.com/javohirmaxmudov",
    demoUrl: undefined,
    isDemoAvailable: false
  }
];

export const contactInfo = {
  name: "Javohirbek Maxmutov",
  github: "https://github.com/javohirmaxmudov",
  githubUsername: "javohirmaxmudov",
  email: "javohirmaxmudov.dev@gmail.com",
  telegram: "https://t.me/javohir_maxmudov",
  telegramUsername: "@javohir_maxmudov",
  linkedin: "https://linkedin.com/in/javohir-maxmudov",
  linkedinUsername: "javohir-maxmudov",
  location: "Toshkent, O‘zbekiston"
};
