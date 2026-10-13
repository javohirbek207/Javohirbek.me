import { Project, SkillCategory } from '../types';

export const contactInfo = {
  name: "Javohirbek Maxmudov",
  github: "https://github.com/javohirbek207",
  githubUsername: "javohirbek207",
  email: "javohirbekandjam@gmail.com",
  telegram: "https://t.me/Javohirbek_Maxmutov",
  telegramUsername: "@Javohirbek_Maxmutov",
  domain: "https://javohirbek.me",
  location: "Toshkent, O‘zbekiston"
};

export const portfolioContent = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko‘nikmalar",
      projects: "Loyihalar",
      contact: "Bog‘lanish",
      cta: "Aloqaga chiqish"
    },
    hero: {
      badge: "Javohirbek Maxmudov",
      status: "Yangi imkoniyatlar uchun ochiq",
      headline: "Developer & Aspiring Data Analyst",
      subheadline: "Veb-dasturlash va ma’lumotlar tahlili",
      description: "Men ma’lumotlarni tahlil qilish va zamonaviy, qulay veb-ilovalar ishlab chiqishga qiziqaman. Python, SQL, JavaScript va React yordamida amaliy muammolarga toza va samarali yechimlar yarataman.",
      primaryCta: "Loyihalarimni ko‘rish",
      secondaryCta: "Men bilan bog‘lanish",
      skillsLabel: "Asosiy yo‘nalishlar:",
      visual: {
        statusText: "Tizim barqaror ishlamoqda",
        terminalTitle: "javohirbek@terminal: ~",
        currentFocus: "Web Development & Data Intelligence",
        metrics: [
          { label: "Asosiy stack", value: "Python • JS • React • SQL" },
          { label: "Maqsad", value: "Murakkab jarayonlarni soddalashtirish" }
        ]
      }
    },
    about: {
      badge: "Tanishuv",
      title: "Men haqimda",
      subtitle: "Qiziqishlar, maqsadlar va amaliy yo‘nalishlarim",
      paragraph1: "Men Javohirbek Maxmudovman. Dasturlash va ma’lumotlar tahlili yo‘nalishlarida o‘z bilim va amaliy tajribamni muntazam rivojlantirib borayotgan yosh mutaxassisman.",
      paragraph2: "Veb-dasturlashda JavaScript, React va Node.js yordamida foydalanuvchilar uchun qulay va tezkor interfeyslar hamda REST API larni yaratishga e’tibor qarataman. Shu bilan birga, Python, SQL va Excel orqali ma’lumotlarni saralash, tahlil qilish va vizuallashtirish bo‘yicha amaliy ko‘nikmalarga egaman.",
      paragraph3: "Mening asosiy maqsadim — texnologiyalar va ma’lumotlar yordamida real hayotdagi muammolarga ishonchli, tushunarli va samarali yechimlar ishlab chiqish.",
      cards: [
        {
          title: "Veb-dasturlash",
          desc: "React, Node.js va zamonaviy kutubxonalar yordamida foydalanuvchiga qulay, responsiv veb-loyihalar yaratish."
        },
        {
          title: "Ma’lumotlar tahlili",
          desc: "Python (pandas), SQL va Excel orqali ma’lumotlarni tozalash, tahliliy xulosalar va hisobotlar tayyorlash."
        },
        {
          title: "Ma’lumotlar bazasi",
          desc: "PostgreSQL va relyatsion SQL so‘rovlari yordamida tuzilgan ma’lumotlar bazalarini boshqarish va integratsiya qilish."
        }
      ]
    },
    skills: {
      badge: "Texnologiyalar",
      title: "Ko‘nikmalarim",
      subtitle: "Amaliyotda qo‘llanilib kelinayotgan va o‘rganilgan aniq texnologiyalar to‘plami (sun’iy foizlarsiz)",
      note: "Har bir texnologiya real amaliy mashg‘ulotlar va loyihalarda qo‘llanilgan."
    },
    projects: {
      badge: "Portfolio",
      title: "Tanlangan Loyihalar",
      subtitle: "Veb-dasturlash, AI va ma’lumotlar bilan ishlash bo‘yicha amaliy ishlarim",
      filterAll: "Barchasi",
      viewGithub: "GitHub",
      viewDemo: "Jonli ko‘rish",
      demoUnavailable: "Demo tez kunda"
    },
    contact: {
      badge: "Aloqa",
      title: "Birgalikda nimadir yarataylik.",
      subtitle: "Data Analytics, dasturlash yoki qiziqarli IT loyihalari bo‘yicha hamkorlik qilish uchun men bilan bog‘laning.",
      directTitle: "To‘g‘ridan-to‘g‘ri aloqa kanallari",
      copySuccess: "Nusxalandi!",
      form: {
        title: "Xabar qoldirish",
        nameLabel: "Ismingiz",
        namePlaceholder: "Ismingizni kiriting",
        emailLabel: "Elektron pochta",
        emailPlaceholder: "example@gmail.com",
        messageLabel: "Xabaringiz",
        messagePlaceholder: "Loyiha yoki savolingiz haqida yozing...",
        sendBtn: "Xabarni yuborish",
        sending: "Yuborilmoqda...",
        successMsg: "Rahmat! Xabaringiz qabul qilindi, tez orada aloqaga chiqaman.",
        errorMsg: "Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring."
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
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "Get in touch"
    },
    hero: {
      badge: "Javohirbek Maxmudov",
      status: "Open to new opportunities",
      headline: "Developer & Aspiring Data Analyst",
      subheadline: "Web Development & Data Intelligence",
      description: "I am passionate about analyzing data and building modern, user-friendly web applications. Crafting clean, practical solutions using Python, SQL, JavaScript, and React.",
      primaryCta: "View My Projects",
      secondaryCta: "Contact Me",
      skillsLabel: "Core Focus:",
      visual: {
        statusText: "All systems operational",
        terminalTitle: "javohirbek@terminal: ~",
        currentFocus: "Web Development & Data Intelligence",
        metrics: [
          { label: "Core Stack", value: "Python • JS • React • SQL" },
          { label: "Mission", value: "Transforming complexity into clarity" }
        ]
      }
    },
    about: {
      badge: "Overview",
      title: "About Me",
      subtitle: "My interests, vision, and technical focus areas",
      paragraph1: "I am Javohirbek Maxmudov. An ambitious technologist continually honing my skills in software development and data analytics.",
      paragraph2: "In web development, I focus on building responsive user interfaces and RESTful backends using JavaScript, React, and Node.js. Concurrently, I work with Python, SQL, and Excel for structured data processing, exploratory analysis, and clear reporting.",
      paragraph3: "My objective is to build reliable, maintainable software and turn data into practical solutions that solve real-world problems.",
      cards: [
        {
          title: "Web Development",
          desc: "Developing responsive and performant web applications using React, modern CSS, and Node.js."
        },
        {
          title: "Data Analytics",
          desc: "Cleaning datasets, running exploratory data analysis, and crafting reports using Python (pandas), SQL, and Excel."
        },
        {
          title: "Databases",
          desc: "Designing and querying structured databases with PostgreSQL and SQL for web and analytical workflows."
        }
      ]
    },
    skills: {
      badge: "Technical Stack",
      title: "Skills & Capabilities",
      subtitle: "A practical set of technologies applied across real projects (no arbitrary percentages)",
      note: "Every capability listed represents genuine hands-on practice."
    },
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      subtitle: "Hands-on projects across web development, AI, and automation",
      filterAll: "All",
      viewGithub: "GitHub",
      viewDemo: "Live Demo",
      demoUnavailable: "Demo coming soon"
    },
    contact: {
      badge: "Contact",
      title: "Let's build something together.",
      subtitle: "Reach out to collaborate on web development, data analytics, or exciting IT opportunities.",
      directTitle: "Direct Channels",
      copySuccess: "Copied!",
      form: {
        title: "Send a Message",
        nameLabel: "Your Name",
        namePlaceholder: "Enter your name",
        emailLabel: "Email Address",
        emailPlaceholder: "example@gmail.com",
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project or inquiry...",
        sendBtn: "Send Message",
        sending: "Sending...",
        successMsg: "Thank you! Your message has been received. I will get back to you soon.",
        errorMsg: "Please provide valid information in all fields."
      }
    },
    footer: {
      rights: "All rights reserved.",
      status: "Available for projects & roles"
    }
  }
};

export const skillsCategories: SkillCategory[] = [
  {
    id: "programming",
    name: "Programming",
    description: "Asosiy dasturlash tillari",
    skills: [
      { name: "Python", description: "Ma’lumotlar bilan ishlash, skriptlar va algoritmik yechimlar" },
      { name: "JavaScript", description: "ES6+, asinxron mantiq, DOM va zamonaviy veb-ishlanmalar" },
      { name: "TypeScript", description: "Statik tiplar va xavfsiz kod tuzilmasi" }
    ]
  },
  {
    id: "frontend",
    name: "Frontend",
    description: "Veb foydalanuvchi interfeyslari",
    skills: [
      { name: "HTML", description: "Semantik va qulay veb-sahifa strukturasi" },
      { name: "CSS", description: "Flexbox, Grid, responsiv dizayn va Tailwind CSS" },
      { name: "React", description: "Komponentlar, hooklar (useState, useEffect) va interaktiv UI" }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    description: "Server va API arxitekturasi",
    skills: [
      { name: "Node.js", description: "Server tomonidagi JavaScript ijro muhiti" },
      { name: "Express.js", description: "RESTful API marshrutlash va middlewarelar" }
    ]
  },
  {
    id: "database",
    name: "Database",
    description: "Ma’lumotlar bazasi va so‘rovlar",
    skills: [
      { name: "PostgreSQL", description: "Relyatsion ma’lumotlar bazasini boshqarish tizimi" },
      { name: "SQL", description: "SELECT, JOIN, GROUP BY, filtrlash va agregatsiya so‘rovlari" }
    ]
  },
  {
    id: "analytics",
    name: "Data Analytics",
    description: "Ma’lumotlarni tahlil qilish va modellashtirish",
    skills: [
      { name: "Excel", description: "Formulalar, VLOOKUP/XLOOKUP, Pivot jadvallari va diagrammalar" },
      { name: "Python", description: "Ma’lumotlarni tozalash va tahliliy hisob-kitoblar" },
      { name: "pandas", description: "DataFrame tuzilmalari, guruhlash va ma’lumotlar manipulyatsiyasi" },
      { name: "scikit-learn", description: "Klassik mashinali o‘rganish va ma’lumotlarni modellashtirish asoslari" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "focusai",
    title: "FocusAI",
    category: "AI & Ta’lim",
    categoryKey: "ai",
    tagline: "Talabalar uchun o‘qish jarayonini rejalashtirish va natijalarni tahlil qilish loyihasi",
    description: "Talabalar uchun o‘qish jarayonini rejalashtirish, dars yuklamasini optimal taqsimlash va akademik natijalarni tahlil qilishga yo‘naltirilgan sun’iy intellekt asosidagi loyiha.",
    technologies: ["Python", "Pandas", "Scikit-learn"],
    githubUrl: "https://github.com/javohirbek207",
    demoUrl: undefined,
    isDemoAvailable: false
  },
  {
    id: "caretrack",
    title: "CareTrack Clinic MRMS",
    category: "Full-Stack Web",
    categoryKey: "fullstack",
    tagline: "Klinikalar uchun tibbiy yozuvlar va qabullarni boshqarish tizimi",
    description: "Bemorlar ro‘yxati, shifokorlar qabul jadvali, tibbiy yozuvlar va to‘lovlarni boshqarishga mo‘ljallangan Medical Record Management System veb-tizimi.",
    technologies: ["JavaScript", "Node.js", "Express.js", "PostgreSQL"],
    githubUrl: "https://github.com/javohirbek207",
    demoUrl: undefined,
    isDemoAvailable: false
  },
  {
    id: "telegram-bot",
    title: "Telegram Bot",
    category: "Backend & Bot",
    categoryKey: "bot",
    tagline: "Node.js orqali xabarlarni qayta ishlash va avtomatlashtirish boti",
    description: "Foydalanuvchi buyruqlarini asinxron qayta ishlash, qulay interaktiv klaviaturalar va tashqi API integratsiyasiga ega amaliy Telegram bot loyihasi.",
    technologies: ["JavaScript", "Node.js", "Telegram Bot API"],
    githubUrl: "https://github.com/javohirbek207",
    demoUrl: undefined,
    isDemoAvailable: false
  }
];
