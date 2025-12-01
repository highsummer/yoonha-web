export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  url: string;
  venue: string;
  date: string;
  imageUrl?: string;
  authors: string[];
}

export const cvData = {

  profile: {
    name: "Yoonha Hwang",
    tagline: "From infrastructure to frontend, an enthusiastic all-rounder.",
    email: "yoonha.highsummer@gmail.com",
    phone: "",
    github: "github.com/highsummer",
    location: "Pohang, Gyeongsangbuk-do, Republic of Korea",
    initials: "YH"
  },
  about: `Enthusiastic all-rounder developer with experience ranging from infrastructure to frontend. 
  Proven track record in building teams, developing SaaS platforms, and optimizing data engineering pipelines. 
  Skilled in AWS, React, TypeScript, Python, and more.`,
  news: [
    {
      id: "1",
      date: "2025-02",
      title: "Started Master's Degree",
      description: "Began Master's in Computer Science and Engineering at POSTECH."
    }
  ] as NewsItem[],
  publications: [
    {
      id: "1",
      title: "Variable Shared Template for Consistent Non-rigid ICP",
      venue: "ACM Transactions on Graphics",
      date: "2025-08",
      url: "https://dl.acm.org/doi/10.1145/3731428",
      imageUrl: "/pub/variable-shared-template.jpg",
      authors: ["Yucheol Jung", "Hyomin Kim", "Hyejeong Yoon", "Yoonha Hwang", "Seungyong Lee"]
    }
  ] as Publication[],
  experience: [
    {
      id: "1",
      role: "Senior Software Engineer, ChainLight",
      company: "Theori",
      period: "2023-02 ~ 2024-06",
      details: [
        "Developed ChainLight Website using NextJS and implemented SSR.",
        "Designed and developed DART from frontend to infrastructure.",
        "Developed an RBAC system with detailed permission control and a custom parser.",
        "Tech Stack: AWS, React, TypeScript, NextJS, PostgreSQL."
      ]
    },
    {
      id: "2",
      role: "Lead, Dev",
      company: "PACE",
      period: "2021-06 ~ 2023-02",
      details: [
        "Built and managed the Dev team from scratch.",
        "Designed and developed an on-demand MSA SaaS platform (AWS, Kubernetes, Docker, Node.js).",
        "Built a WebGL-based framework to visualize complex 3D structures in the web environment (Rust, WASM)."
      ]
    },
    {
      id: "3",
      role: "Tech Lead, Data Engineering",
      company: "Bagelcode",
      period: "2018-08 ~ 2021-06",
      details: [
        "Reduced infrastructure costs by 80% through log subsampling and architecture migration.",
        "Developed a real-time feedback system for custom user segments using Go and Kubernetes.",
        "Led the development of a code-based schema management system using Python.",
        "Built a user churn prediction model using Keras/XGBoost and served it via Airflow."
      ]
    },
    {
      id: "4",
      role: "Internship",
      company: "VoyagerX",
      period: "2018-02 ~ 2018-08",
      details: [
        "Optimized deep learning models using pruning and distillation (30% parameter reduction).",
        "Augmented photo-based datasets using Blender scripting."
      ]
    },
    {
      id: "5",
      role: "Internship",
      company: "PuzzleData",
      period: "2017-09 ~ 2018-01",
      details: [
        "Developed the official webpage using Django and Bootstrap.",
        "Implemented a process mining algorithm on an on-premise Java/Spark environment."
      ]
    },
    {
      id: "6",
      role: "Director",
      company: "Geekble",
      period: "2017-01 ~ 2017-08",
      details: [
        "Managed web/mail servers and company software.",
        "Fabricated artworks using embedded systems (Dragonboard, Raspberry Pi)."
      ]
    },
    {
      id: "7",
      role: "Chief Developer",
      company: "Nano Studio",
      period: "2015-01 ~ 2017-01",
      details: [
        "Developed a full game with GameMaker: Studio and released it on Steam.",
        "Designed a script language for non-programmers."
      ]
    }
  ] as Experience[],
  education: [
    {
      id: "1",
      degree: "Master in Computer Science and Engineering",
      institution: "POSTECH",
      period: "2025-02 ~ Ongoing"
    },
    {
      id: "2",
      degree: "Bachelor in Computer Science and Engineering",
      institution: "POSTECH",
      period: "2014-03 ~ 2023-02"
    }
  ] as Education[],
  skills: [
    {
      id: "1",
      title: "Languages",
      skills: ["Korean (Native)", "English (Working fluency)"]
    }
  ] as SkillCategory[]
};
