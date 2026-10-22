import { Project, SkillCategory } from '../types';

export const contactInfo = {
  name: "Javohirbek Maxmutov",
  github: "https://github.com/javohirbek207",
  githubUsername: "javohirbek207",
  email: "javohirbekandjam@gmail.com",
  telegram: "https://t.me/Javohirbek_Maxmutov",
  telegramUsername: "@Javohirbek_Maxmutov",
  domain: "https://javohirbek.me",
  location: "Toshkent, O‘zbekiston",
  locationEn: "Tashkent, Uzbekistan"
};

export const portfolioContent = {
  uz: {
    nav: {
      logo: "Javohirbek Maxmutov.",
      projects: "Loyihalar",
      about: "Men haqimda",
      skills: "Ko‘nikmalar",
      contact: "Bog‘lanish",
      talkBtn: "Bog‘lanish"
    },
    hero: {
      intro: "👋 Salom, men Javohirbek Maxmutovman",
      headlineLine1: "Creator",
      headlineLine2: "& Data Analyst",
      description: "Raqamli mahsulotlar va interaktiv veb-tajribalar yarataman hamda ma’lumotlarni amaliy natijalarga aylantiraman.",
      btnPrimary: "Loyihalarni ko‘rish",
      btnSecondary: "Bog‘lanish",
      btnDeveloper: "Loyihalarni ko‘rish",
      btnAnalyst: "Bog‘lanish",
      location: "based in Tashkent, Uzbekistan.",
      techSummary: "Python • SQL • React • Node.js"
    },
    about: {
      tag: "Men haqimda",
      title: "Veb-dasturlash va ma’lumotlar tahlili",
      description: "Men Javohirbek Maxmutovman. React, TypeScript va Node.js yordamida tezkor veb-ilovalar ishlab chiqaman hamda Python, SQL va Excel orqali katta ma’lumotlarni tahlil qilib, amaliy natijalarga erishaman.",
      details: [
        { label: "Yo‘nalish", value: "Full-Stack Development & Data Analytics" },
        { label: "Stack", value: "Python, SQL, React, Node.js, PostgreSQL" },
        { label: "Joylashuv", value: "Toshkent, O‘zbekiston" },
        { label: "Holat", value: "Yangi loyihalar uchun ochiq" }
      ]
    },
    skills: {
      tag: "Ko‘nikmalar",
      title: "Texnologiyalar",
      subtitle: "Amaliyotda qo‘llanilib kelinayotgan asosiy vositalar."
    },
    projects: {
      tag: "Portfolio",
      title: "Tanlangan Ishlar",
      subtitle: "Amaliyotda yaratilgan va tasdiqlangan loyihalar.",
      viewDemo: "Jonli ko‘rish",
      viewGithub: "GitHub"
    },
    contact: {
      tag: "Aloqa",
      title: "Birgalikda ishlaymiz.",
      subtitle: "Loyiha yoki hamkorlik uchun to‘g‘ridan-to‘g‘ri yozing.",
      copySuccess: "Nusxalandi!",
      form: {
        title: "Xabar yuborish",
        nameLabel: "Ismingiz",
        namePlaceholder: "Ismingiz",
        emailLabel: "Email",
        emailPlaceholder: "email@misol.uz",
        messageLabel: "Xabar",
        messagePlaceholder: "Loyiha haqida qisqacha yozing...",
        sendBtn: "Yuborish",
        sending: "Yuborilmoqda...",
        successMsg: "Rahmat! Xabaringiz yetib bordi.",
        errorMsg: "Iltimos, maydonlarni to‘ldiring."
      }
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      status: "Yangi loyihalar uchun ochiq"
    }
  },
  en: {
    nav: {
      logo: "Javohirbek Maxmutov.",
      projects: "Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      talkBtn: "Let's talk"
    },
    hero: {
      intro: "👋 Hello, I'm Javohirbek Maxmutov",
      headlineLine1: "Creator",
      headlineLine2: "& Data Analyst",
      description: "I build thoughtful digital experiences and turn complex data into meaningful insights.",
      btnPrimary: "Explore My Work",
      btnSecondary: "Get in Touch",
      btnDeveloper: "Explore My Work",
      btnAnalyst: "Get in Touch",
      location: "based in Tashkent, Uzbekistan.",
      techSummary: "Python • SQL • React • Node.js"
    },
    about: {
      tag: "About",
      title: "Web Engineering & Data Analytics",
      description: "I am Javohirbek Maxmutov. I build performant web applications using React, TypeScript, and Node.js, and analyze structured datasets using Python, SQL, and Excel to produce clear, actionable insights.",
      details: [
        { label: "Focus", value: "Full-Stack Development & Data Analytics" },
        { label: "Core Stack", value: "Python, SQL, React, Node.js, PostgreSQL" },
        { label: "Location", value: "Tashkent, Uzbekistan" },
        { label: "Availability", value: "Available for new projects" }
      ]
    },
    skills: {
      tag: "Skills",
      title: "Tech Stack",
      subtitle: "Essential tools applied across genuine projects."
    },
    projects: {
      tag: "Portfolio",
      title: "Selected Works",
      subtitle: "Verified hands-on applications and systems.",
      viewDemo: "Live Demo",
      viewGithub: "GitHub"
    },
    contact: {
      tag: "Contact",
      title: "Let's build together.",
      subtitle: "Reach out directly for collaborations or inquiries.",
      copySuccess: "Copied!",
      form: {
        title: "Send a message",
        nameLabel: "Your Name",
        namePlaceholder: "Your Name",
        emailLabel: "Email Address",
        emailPlaceholder: "name@example.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project or inquiry...",
        sendBtn: "Send Message",
        sending: "Sending...",
        successMsg: "Thank you! Your message has been sent.",
        errorMsg: "Please fill out all fields."
      }
    },
    footer: {
      rights: "All rights reserved.",
      status: "Available for projects"
    }
  }
};

export const skillsCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Dasturlash / Languages",
    skills: [
      { name: "Python", description: "Data wrangling, automation, scripts" },
      { name: "JavaScript / TypeScript", description: "Modern ES6+, async logic, strict typing" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend & Web",
    skills: [
      { name: "React", description: "Responsive UI, state, hooks" },
      { name: "Tailwind CSS", description: "Clean, responsive styling" }
    ]
  },
  {
    id: "backend",
    name: "Backend & Database",
    skills: [
      { name: "Node.js & Express", description: "RESTful APIs, routing" },
      { name: "SQL & PostgreSQL", description: "Queries, schemas, JOINs, indexing" }
    ]
  },
  {
    id: "analytics",
    name: "Data Analytics",
    skills: [
      { name: "Excel & Pivot", description: "Formulas, lookup models, data cleaning" },
      { name: "Pandas & EDA", description: "Data aggregation, manipulation, insights" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "focusai",
    title: "FocusAI",
    category: "AI & Ta’lim",
    categoryKey: "ai",
    tagline: "Talabalar uchun o‘qish jarayonini rejalashtirish va natijalarni tahlil qilish tizimi",
    description: "Sun’iy intellekt yordamida o‘quv yuklamasini optimal taqsimlash va akademik natijalarni tahlil qilish platformasi.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/javohirbek207",
    demoUrl: "https://prophetic-focus-ai-flow.base44.app/",
    isDemoAvailable: true
  },
  {
    id: "caretrack",
    title: "CareTrack Clinic MRMS",
    category: "Full-Stack Web",
    categoryKey: "fullstack",
    tagline: "Klinikalar uchun tibbiy yozuvlar va qabullarni boshqarish tizimi",
    description: "Bemorlar ro‘yxati, qabullar jadvali va shifokorlar ishini boshqaruvchi veb-tizim.",
    technologies: ["JavaScript", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/javohirbek207",
    demoUrl: undefined,
    isDemoAvailable: false
  },
  {
    id: "telegram-bot",
    title: "Telegram Bot",
    category: "Backend & Automation",
    categoryKey: "bot",
    tagline: "Avtomatlashtirilgan asinxron Telegram boti",
    description: "Foydalanuvchi buyruqlarini qayta ishlash, interaktiv tugmalar va tashqi API integratsiyasiga ega amaliy bot.",
    technologies: ["Node.js", "Telegram Bot API"],
    githubUrl: "https://github.com/javohirbek207",
    demoUrl: undefined,
    isDemoAvailable: false
  }
];
