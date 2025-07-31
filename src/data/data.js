const data = {
  en: {
    // Hero kısmı en
    heroSection: {
      greeting: "Hi! 👋",
      intro: "I’m Remzi. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
      profileImage: "/images/gecici.png",
      socials: [
        {
          logo: "/images/linkedin.png",
          alt_text: "linkedin",
          link: "https://linkedin.com/in/example",
        },
        {
          logo: "/images/github.png",
          alt_text: "github",
          link: "https://github.com/remzikoksal",
        },
      ],
      ctaHTML:
        "Currently <span class='text-yellow-500'>Freelancing for UX, UI, & Web Design</span> Project.<br/>Invite me to join your team → <a href='mailto:remzikksal@gmail.com' class='text-yellow-500 underline'>remzikksal@gmail.com</a>",
    },

    //yetenekler kısmı en 
   skillsSection: {
  title: "Skills",
  items: [
    { name: "JAVASCRIPT", icon: "/images/js1.png" },
    { name: "REACT", icon: "/images/react1.png" },
    { name: "REDUX", icon: "/images/redux.png" },
    { name: "NODE", icon: "/images/node.png" },
    { name: "VS CODE", icon: "/images/vscode1.png" },
    { name: "FIGMA", icon: "/images/figma1.png" },
  ]
},

//bilgiler kısmı en
basicInfo: {
  title: "Profile",
  title2: "Basic Information",
  labels: {
    birthdate: "Birth Date",
    city: "City",
    education: "Education",
    role: "Preferred Role"
  },
  birthday: "25.01.2002",
  city: "Istanbul",
  education: "Istinye University, Graphics and Animation Design",
  role: "Frontend Developer"
},
    about: {
      title: "About Me",
      description1: "I am a software developer driven by a passion for technology that constantly pushes me to learn new things.",
      description2: "My goal is to deliver effective and aesthetic solutions that maximize the user experience."
    },

    // projeler kısmı en
    projects: [
  {
    title: "E-Commerce Website from Scratch",
    description: "An e-commerce application developed from the ground up, integrated with APIs.",
    screenImage: "/images/e-ticaret.png",
    laptopImage: "/images/laptop.png",
    bgColor: "bg-[#DDEEFE]",
     bgColor1: "bg-[#2D3235]",
    tags: ["React", "Axios", "CSS", "Redux", "Tailwind","Figma"],
    github: "https://github.com/remzikoksal/e-ticaret.git",
    app: "https://e-ticaret-nvzy.vercel.app"
  },
  {
    title: "Pizza Ordering App with Form",
    description: "An interactive pizza ordering application that showcases different recipes.",
    screenImage: "/images/pizza.png",
    laptopImage: "/images/laptop.png",
    bgColor: "bg-[#DDF5E6]",
      bgColor1: "bg-[#495351]",
    tags: ["css","html","Figma"],
    github: "https://github.com/remzikoksal/fsweb-s8-challenge-pizza",
    app: "https://fsweb-s8-challenge-pizza-im9f.vercel.app"
  }
],
// Footer kısmı en
  footer: {
    title: {
      en: "Let's work together on your next product.",
      
    },
    highlight: {
      en: "work together",
      
    },
    links: [
      { name: "Github", url: "https://github.com", color: "text-blue-600" },
      { name: "Linkedin", url: "https://linkedin.com", color: "text-cyan-700" },
      { name: "Email", url: "mailto:example@mail.com", color: "text-red-600" }
    ]
  }


  },



// Türkçe veriler


  tr: {
    //Hero kısmı
    heroSection: {
      greeting: "Merhaba! 👋",
      intro: "Ben Remzi. Full-stack geliştiriciyim. Güçlü ve ölçeklenebilir frontend ürünleri geliştirebilirim. Hadi tanışalım!",
      profileImage: "/images/gecici.png",
      socials: [
         {
          logo: "/images/linkedin.png",
          alt_text: "linkedin",
          link: "https://linkedin.com/in/example",
        },
        {
          logo: "/images/github.png",
          alt_text: "github",
          link: "https://github.com/remzikoksal",
        },
      ],
      ctaHTML:
        "Şu anda <span class='text-yellow-500'>UX, UI & Web Design</span> freelance projelerde çalışıyorum.<br/>Beni ekibinize davet edin → <a href='mailto:remzikksal@gmail.com' class='text-yellow-500 underline'>remzikksal@gmail.com</a>",
    },
    //yetenekler kısmı
     skillsSection: {
  title: "Yetenekler",
  items: [
    { name: "JAVASCRIPT", icon: "/images/js1.png" },
    { name: "REACT", icon: "/images/react1.png" },
    { name: "REDUX", icon: "/images/redux.png" },
    { name: "NODE", icon: "/images/node.png" },
    { name: "VS CODE", icon: "/images/vscode1.png" },
    { name: "FIGMA", icon: "/images/figma1.png" },
  ]
},


//bilgiler kısmı
  basicInfo: {
  title: "Profil",
  title2: "Temel Bilgiler",
  labels: {
    birthdate: "Doğum Tarihi",
    city: "Şehir",
    education: "Eğitim",
    role: "Rol"
  },
 birthday: "25.01.2002",
  city: "İstanbul",
  education: "İstinye University, Graphics and Animation Design",
  role: "Frontend Developer"
},
    about: {
      title: "Hakkımda",
      description1: "Ben bir yazılım geliştiricisiyim ve teknolojiye olan tutkum beni her zaman yeni şeyler öğrenmeye itiyor.",
      description2: "Hedefim, kullanıcı deneyimini en üst düzeye çıkarmak için etkili ve estetik çözümler sunmaktır."
    },

    // projeler kısmı  
    projects: [
  {
    title: "Sıfırdan E-Ticaret Sitesi",
    description: "Sıfırdan başlanan ve API ile entegre çalışan bir e-ticaret uygulaması.",
    screenImage: "/images/e-ticaret.png",
    laptopImage: "/images/laptop.png",
    bgColor: "bg-[#DDEEFE]",
     bgColor1: "bg-[#2D3235]",
    tags: ["React", "Axios", "CSS", "Redux", "Tailwind","Figma"],
    github: "https://github.com/remzikoksal/e-ticaret.git",
    app: "https://e-ticaret-nvzy.vercel.app"
  },
  {
    title: "Form ile Pizza Siparişi verilebilen Uygulama",
    description: "Farklı tarifleri gösteren interaktif pizza siparişi uygulaması.",
    screenImage: "/images/pizza.png",
    laptopImage: "/images/laptop.png",
    bgColor: "bg-[#DDF5E6]",
      bgColor1: "bg-[#495351]",
    tags: ["css","html","Figma"],
    github: "https://github.com/remzikoksal/fsweb-s8-challenge-pizza",
    app: "https://fsweb-s8-challenge-pizza-im9f.vercel.app"
  }
],
    // Footer kısmı
      footer: {
    title: {
      
      tr: "Bir sonraki projeniz üzerinde birlikte çalışalım."
    },
    highlight: {
     
      tr: "birlikte çalışalım"
    },
    links: [
      { name: "Github", url: "https://github.com", color: "text-blue-600" },
      { name: "Linkedin", url: "https://linkedin.com", color: "text-cyan-700" },
      { name: "Email", url: "mailto:example@mail.com", color: "text-red-600" }
    ]
  }



  },
};

export default data;
