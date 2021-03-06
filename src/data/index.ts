import {useRouter} from "next/router";

export const Languages: Language[] = ["ko-KR", "en-US", "emoji"];
export const GlobalFallbackLanguage: Language = "en-US";
export type Language = "ko-KR" | "en-US" | "emoji";

export type I18n<T> = { [L in Language]: T };
export type TextFragment = I18n<string>;

export function i18n<T>(frag: I18n<T>): T {
  const lang: Language = language();
  return frag[lang] ?? frag[GlobalFallbackLanguage]
}

export function language<T>(): Language {
  const router = useRouter();
  const langQuery = router.query["lang"];
  const lang: Language = (Array.isArray(langQuery) ? langQuery[0] : langQuery) as Language ?? "ko-KR";
  return Languages.indexOf(lang) === undefined ? GlobalFallbackLanguage : lang
}

function forAll(x: string, onEmoji?: string): TextFragment {
  return {
    ...Object.fromEntries(Languages.map(l => [l, x] as [Language, string])),
    ...(onEmoji === undefined ? {} : {
      "emoji": onEmoji,
    }),
  } as TextFragment
}

export const Name = "Yoonha Hwang";
export const Catchphrase = "From infrastructure to frontend, an enthusiastic data engineer.";
export const Host = "https://yoonha.dev";

export const LanguageNames: I18n<TextFragment> = {
  "ko-KR": {
    "ko-KR": "νκ΅­μ΄",
    "en-US": "Korean",
    "emoji": "π°π·",
  },
  "en-US": {
    "ko-KR": "μμ΄",
    "en-US": "English",
    "emoji": "πΊπΈ",
  },
  "emoji": {
    "ko-KR": "μ΄λͺ¨μ§",
    "en-US": "Emoji",
    "emoji": "π",
  },
};

export const TitleKeywords: TextFragment = forAll("Keywords", "πͺ");
export interface Keyword {
  title: TextFragment,
  description: TextFragment,
}

export const TitleContact: TextFragment = forAll("Contact", "π");
export type ContactColumns = "phone" | "location" | "email" | "website";
export const Contact: { [K in ContactColumns]: TextFragment } = {
  phone: {
    "ko-KR": "010-8967-0996",
    "en-US": "+82-10-8967-0996",
    "emoji": "β8οΈβ£2οΈβ£βπβοΈοΈ8οΈβ£β―οΈ7οΈβ£β0οΈβ£9οΈβ£β―οΈ",
  },
  location: {
    "ko-KR": "λνλ―Όκ΅­ κ²½μλΆλ ν¬ν­μ",
    "en-US": "Pohang, Gyeongsangbuk-do, Republic of Korea",
    "emoji": "βοΈπ°π·",
  },
  email: forAll("yoonha.highsummer@gmail.com"),
  website: forAll("https://yoonha.dev"),
};

export const TitleAvailableLanguage: TextFragment = forAll("Languages", "π£");
export interface AvailableLanguage {
  emoji: string,
  name: TextFragment,
  level: TextFragment,
}
export const AvailableLanguages: AvailableLanguage[] = [
  {
    emoji: "π°π·",
    name: {
      "ko-KR": "νκ΅­μ΄",
      "en-US": "Korean",
      "emoji": "π°π·",
    },
    level: {
      "ko-KR": "λͺ¨κ΅­μ΄",
      "en-US": "Native",
      "emoji": "π©βπ§π",
    }
  },
  {
    emoji: "πΊπΈ",
    name: {
      "ko-KR": "μμ΄",
      "en-US": "English (US)",
      "emoji": "πΊπΈ",
    },
    level: {
      "ko-KR": "μνν μλ¬΄ κ°λ₯",
      "en-US": "Working fluency",
      "emoji": "π©βπΌπͺ",
    }
  },
];

export const TitleEducations: TextFragment = forAll("Educations", "π«");
export interface Education {
  name: TextFragment,
  department: TextFragment,
  degree: TextFragment,
  from: Date,
  to?: Date,
}
export const Educations: Education[] = [
  {
    name: {
      "ko-KR": "ν¬ν­κ³΅κ³Όλνκ΅",
      "en-US": "POSTECH",
      "emoji": "π₯π§ͺπ­π«",
    },
    department: {
      "ko-KR": "μ»΄ν¨ν°κ³΅νκ³Ό",
      "en-US": "Computer Science and Engineering",
      "emoji": "π₯οΈ",
    },
    degree: {
      "ko-KR": "νμ¬",
      "en-US": "Bachelor",
      "emoji": "π©βπ",
    },
    from: new Date("2014-02-01"),
  }
];

export const EducationOngoing: TextFragment = {
  "ko-KR": "μ¬ν",
  "en-US": "Ongoing",
  "emoji": "π",
}

export const TitleWorkExperiences: TextFragment = forAll("Work Experiences", "π»π©βπΌ");
export interface WorkExperience {
  company: TextFragment,
  charge: TextFragment,
  from: Date,
  to?: Date,
  contents: {
    subtitle: TextFragment,
    stacks: TextFragment[],
    text: TextFragment,
  }[],
}
export const WorkExperiences: WorkExperience[] = [
  {
    company: {
      "ko-KR": "λ² μ΄κΈμ½λ",
      "en-US": "Bagelcode",
      "emoji": "π₯―π»",
    },
    charge: forAll("Tech Lead, Data Engineering", "ββ‘οΈοΈοΈ"),
    from: new Date("2018-08-01"),
    to: new Date("2021-06-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "μΈνλΌ λΉμ© μ κ°",
          "en-US": "Infrastructure Cost Reduction",
          "emoji": "ποΈπΈβ¬οΈ",
        },
        stacks: [
          forAll("AWS"),
        ],
        text: {
          "ko-KR": "CloudWatch λ‘κ·Έ μλΈμνλ§, API Gatewayμμ ALBλ‘ μ ν, DynamoDB Caching λ±μ μλ¬΄λ₯Ό μ§ννμΌλ©° κ°κ°μ μλ¬΄μμ μ΅λ 80% κ°λ λΉμ© μ κ° ν¨κ³Όλ₯Ό λ³΄μμ΅λλ€.",
          "en-US": "Worked on subsampling CloudWatch logs, migrating to ALB from API Gateway and adding cache logic on DynamoDB, which resulted in reduction at most 80% in infrastructure costs",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "λ°μ΄ν° κΈ°λ° μ€μκ° νΌλλ°± μμ€ν",
          "en-US": "Data-based Real-time Feedback System",
          "emoji": "πβ°β»οΈ",
        },
        stacks: [
          forAll("Go"),
          forAll("DynamoDB"),
          forAll("Kubernetes"),
          forAll("Helm"),
        ],
        text: {
          "ko-KR": "Analytic Eventλ₯Ό κΈ°λ°μΌλ‘ λ§λ  feature dataλ₯Ό μ΄μ©ν΄ λΆμκ°μ κΈ°νμλ€μ΄ μνλ user segmentμκ² μ€μκ°μΌλ‘ μνλ offerλ₯Ό μ κ³΅νκΈ° μν΄ κ΄λ ¨ λ°μ΄ν°λ₯Ό μ€μκ°μΌλ‘ μλΉν  μ μλ λ μ΄μ΄λ₯Ό κ°λ°νμ΅λλ€.",
          "en-US": "Developed a real-time layer providing directors and analysts with custom user segments to give optimal offers to users using feature set based on Analytic Events",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "μ½λ κΈ°λ° μ€ν€λ§ κ΄λ¦¬ μμ€ν",
          "en-US": "Code-based Schema Management System",
          "emoji": "π»π§?π©βπΌ",
        },
        stacks: [
          forAll("Python"),
          forAll("GitLab CI"),
          forAll("Typescript"),
          forAll("React"),
        ],
        text: {
          "ko-KR": "Analytic Event μ€ν€λ§λ₯Ό μ½λλ‘ κ΄λ¦¬ν  μ μλ μμ€νμ κ³ μνκ³  μ²μλΆν° λκΉμ§ κ°λ°μ μ£Όλνμμ΅λλ€. κΈ°μ‘΄μ jsonμΌλ‘ κ΄λ¦¬λλ νμ€νΈ κΈ°λ°μ μ€ν€λ§λ₯Ό Python μ½λ κΈ°λ°μΌλ‘ λ°κΎΈμ΄ μλ¬΄ ν¨μ¨μ ν₯μμμΌ°μ΅λλ€.",
          "en-US": "Led team to develop a system to manage Analytic Event schema with Python code base, which let us work more efficiently compared to the previous Json-based text schema.",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "μ½λ κΈ°λ°μ λ°μ΄ν° μΈνλΌ μ μ§λ³΄μ",
          "en-US": "Code-based Data Infrastructure Maintenance",
          "emoji": "π»πππ©βπΌ",
        },
        stacks: [
          forAll("Python"),
          forAll("Serverless"),
          forAll("Terraform"),
          forAll("AWS"),
          forAll("Kubernetes"),
          forAll("Helm"),
        ],
        text: {
          "ko-KR": "Terraformκ³Ό Serverless, HelmμΌλ‘ μ΄λ£¨μ΄μ§ μ½λ κΈ°λ° μΈνλΌλ₯Ό μ μ§λ³΄μ νλ μλ¬΄λ₯Ό μννμ΅λλ€.",
          "en-US": "Conducted maintenances for code-based infrastructure made of Terraform, Serverless and Helm.",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "λ¨Έμ λ¬λ κΈ°λ° μ μ  μ΄ν μμΈ‘",
          "en-US": "Machine Learning Based User Churn Prediction",
          "emoji": "π€π‘π₯β©οΈπ€οΈ",
        },
        stacks: [
          forAll("Python"),
          forAll("Keras"),
          forAll("XGBoost"),
        ],
        text: {
          "ko-KR": "Keras, Tensorflow, XGBoostλ₯Ό μ΄μ©νμ¬ μ μ κ° μΈμ  κ²μμμ μ΄νν μ§ μμΈ‘νλ λͺ¨λΈμ λ§λ€κ³  μ΄λ₯Ό Databricksμ Airflowλ₯Ό μ΄μ©ν΄ λ°°ν¬νμμ΅λλ€. λ§€μΌ featureλ₯Ό μμ±νκ³  μ΄λ―Έ νμ΅λ λͺ¨λΈμ μ΄μ©ν΄ inference νμ¬ admin toolμ μμΈ‘ κ°μ μ μ₯ν΄μ κΈ°ννμ΄ μ¬μ©ν  μ μλλ‘ μλννμ΅λλ€. κ°μ€ μ€μ , λ°μ΄ν° μ μ²λ¦¬, λͺ¨λΈλ§ λ± μ  κ³Όμ μ μ£Όλνκ³  Confluenceμ λͺ¨λ  κ³Όμ μ μ€ν λΈνΈλ‘ λ¨κ²Όμ΅λλ€.",
          "en-US": "Made a model to predict when users will leave the game using Keras, Tensorflow and XGBoost, then served it with Airflow and Databricks. Built a pipeline to feed features to model and prediction results to Admin Tools automatically on daily basis so that directors can take advantages of them. Led all processes including building hypothesis, data pre-processing and modeling and wrote them all on Confluence",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "λ°μ΄ν° κ²μ¦ μμ€ν λμ",
          "en-US": "Data Validation System",
          "emoji": "β¨πβοΈ",
        },
        stacks: [
          forAll("Python"),
          forAll("Spark"),
        ],
        text: {
          "ko-KR": "PySpark κΈ°λ°μΌλ‘ λ°μ΄ν°λ₯Ό μλμΌλ‘ QAν  μ μλ νλ μμν¬ κ°λ° λ° λμνμ΅λλ€. λ°μ΄ν°μ uniqueness, count, nullity λ±μ μλμΌλ‘ κ²μ¬νκ³  SlackμΌλ‘ integrityμ λν΄ μλ¦Όμ λ°μ μ μλλ‘ μ€κ³νμ΅λλ€. Databricksλ₯Ό μ΄μ©ν΄ ETL νλ κ³Όμ μμ dependencyλ₯Ό λͺννκ² νκ³  μ μ§λ³΄μλ₯Ό μ½κ²ν  λͺ©μ μΌλ‘ Markdown ν¬λ§·μ νμ€ μ½λ©νΈλ₯Ό λμνμ΅λλ€.",
          "en-US": "Built a system to validate data using PySpark, which asserts uniqueness, count, nullity and so on then send alerts about data integrity on Slack. Also, introduced a standard Markdown comment format to encourage ETL codes to be explicit and clear.",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "κ·Έ μΈ λ°μ΄ν° μμ§λμ΄λ§ μλ¬΄",
          "en-US": "Other Data Engineering Works",
          "emoji": "ππ©βπΌ",
        },
        stacks: [
          forAll("Python"),
          forAll("Scala"),
          forAll("Spark"),
          forAll("Tableau"),
        ],
        text: {
          "ko-KR": "200 billon rows κ°λ λλ λ°μ΄ν°λ₯Ό Databricks Sparkμ Airflowλ₯Ό μ΄μ©ν΄ ETLμ νκ³  hourlyλ‘ Tableau Desktop μμ λ³Ό μ μλλ‘ νκ°κ³΅ νλ μλ¬΄λ₯Ό μννμ΅λλ€. Tableauμ κ²½μ° κΈ°μ‘΄ κ΅¬ν APIλ₯Ό Hyper APIλ‘ λμ²΄νμ¬ μμ­λΆ λ¨μλ‘ κ±Έλ¦¬λ taskλ₯Ό μλΆ λ¨μλ‘ κ³ μννμμ΅λλ€.",
          "en-US": "Developed ETLs on 200B rows using Databricks, Spark and Airflow and post-processed them for Tableau Desktop format on an hourly basis. Specially in case of Tableau, replaced previous old API with 'Hyper API' and achieved reduction in landing time to several minutes from half an hour.",
          "emoji": "",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "λ³΄μ΄μ μμ€",
      "en-US": "VoyagerX",
      "emoji": "π°οΈπ½",
    },
    charge: forAll("Internship", "β²οΈ"),
    from: new Date("2018-02-01"),
    to: new Date("2021-08-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "λ₯λ¬λ λͺ¨λΈ λͺ¨λ°μΌ μ΅μ ν",
          "en-US": "Deep Learning Model Mobile Optimization",
          "emoji": "π€π‘β¬οΈ",
        },
        stacks: [
          forAll("Python"),
          forAll("Keras"),
          forAll("Tensorflow"),
        ],
        text: {
          "ko-KR": "Dr. Blur κ°λ° λΉμ Keras, Tensorflowλ₯Ό κΈ°λ°μΌλ‘ pruning, distillation λ±μ μ΄μ©νμ¬ λͺ¨λΈμ κ³ μν λ° μμΆνμμ΅λλ€. λͺ¨λΈ ν¨λ¬λ―Έν° μλ 30% μμ€μΌλ‘ μ€μ΄κ³  νμ§ μ νλ 5% μ΄λ΄λ‘ μ μ§νλ κ²°κ³Όλ₯Ό μ»μμ΅λλ€.",
          "en-US": "Optimized deep learning models using pruning and distillation on Keras and Tensorflow, which resulted in reduction on the number of model parameters to 30% keeping quality degradation lower than 5%.",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "λͺ¨λ°μΌ μ€μΊλ vFlat μΈκ³΅ λ°μ΄ν°μ μμ±",
          "en-US": "Artificial Dataset Generation",
          "emoji": "π±π ππ­",
        },
        stacks: [
          forAll("Python"),
          forAll("Blender"),
        ],
        text: {
          "ko-KR": "Blender μΈλΆ python μ€ν¬λ¦½ν κΈ°λ₯μ μ΄μ©ν΄ μλμΌλ‘ λ€κ°λμμ λ€μν νκ²½μ μ± μ΄λ―Έμ§λ₯Ό μλμΌλ‘ μμ±νμ΅λλ€. κΈ°μ‘΄μ μ€μ¬ μ΄¬μ ν μμΌλ‘ λΌλ²¨λ§νμ¬ λͺ¨μΌλ λ°μ΄ν°λ₯Ό λμ²΄νμ΅λλ€.",
          "en-US": "Augmented photo based dataset with a variety of graphically rendered pictures using Blender's external Python scripting functionality.",
          "emoji": "",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "νΌμ¦λ°μ΄ν°",
      "en-US": "PuzzleData",
      "emoji": "π§©π",
    },
    charge: forAll("Internship", "β²οΈ"),
    from: new Date("2017-09-01"),
    to: new Date("2018-01-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "κ³΅μ μΉνμ΄μ§ κ°λ°",
          "en-US": "Official Webpage Development",
          "emoji": "πΈοΈπποΈ",
        },
        stacks: [
          forAll("Python"),
          forAll("Django"),
          forAll("Bootstrap"),
        ],
        text: {
          "ko-KR": "Djangoλ₯Ό μ΄μ©νμ¬ μλ² λ°±μλ λΆν° μΉ νμ΄μ§ νλ‘ νΈμλκΉμ§ μ§μ  κ°λ°νμ΅λλ€.",
          "en-US": "Developed an official webpage from frontend to server backend with Django.",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "νλ‘μΈμ€λ§μ΄λ μ λ¬Έ ν΄ ProDiscovery 2.0 κ°λ° μ°Έμ¬",
          "en-US": "ProDiscovery 2.0 Development Participation",
          "emoji": "πβ2οΈβ£οΈ",
        },
        stacks: [
          forAll("Python"),
          forAll("Blender"),
        ],
        text: {
          "ko-KR": "On-premise Java Spark νκ²½μμ νλ‘μΈμ€λ§μ΄λ μκ³ λ¦¬μ¦ λΌλ¬Έμ κ΅¬ννμ΅λλ€.",
          "en-US": "Implemented an algorithm for process mining from a paper on an on-premise Java and Spark environment.",
          "emoji": "",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "κΈ±λΈ",
      "en-US": "Geekble",
      "emoji": "π€πͺ",
    },
    charge: forAll("Director", "π©βπΌ"),
    from: new Date("2017-01-01"),
    to: new Date("2017-08-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "μΉ μλ², λ©μΌ μλ² λ° μννΈμ¨μ΄ κ΄λ¦¬",
          "en-US": "Web/Mail Server and Software Management",
          "emoji": "πΈοΈπ§π₯οΈπΏπ©βπΌ",
        },
        stacks: [
          forAll("Linux"),
          forAll("Wordpress"),
          forAll("Bootstrap"),
        ],
        text: {
          "ko-KR": "μ¬λ΄ μ μ²΄μ μλ²μ μννΈμ¨μ΄λ₯Ό μ΄κ΄νμ¬ κ΄λ¦¬νμ΅λλ€.",
          "en-US": "Managed servers and software throughout the company.",
          "emoji": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "μμ κΈ°ν, μ΄¬μ, νΈμ§ λ° μλ² λλ μμ€ν μν μ μ",
          "en-US": "Directing, Filming, Editing and Embedded System Artworks Fabrication",
          "emoji": "π₯ποΈπ€π",
        },
        stacks: [
          forAll("Embedded"),
          forAll("After Effect"),
        ],
        text: {
          "ko-KR": "Dragonboard, Raspberry Piμ κ°μ μλ² λλ μμ€νκ³Ό μλ¦¬μΌ ν΅μ , μλ³΄ λͺ¨ν° λλΌμ΄λΈ λ±μ λΆμ μμ€νμ κ²°ν©νμ¬ μνμ μ μνμ΅λλ€.",
          "en-US": "Fabricated artworks using embedded systems like Dragonboard and Raspberry Pi, serial communication and servo motor drivers.",
          "emoji": "",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "λλΈμ€νλμ€",
      "en-US": "Nano Studio",
      "emoji": "π¬ποΈ",
    },
    charge: forAll("Chief Developer", "π₯οΈπ©βπΌ"),
    from: new Date("2015-01-01"),
    to: new Date("2017-01-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "ν λ΄ μ μΌ κ°λ°μλ‘ μμ€ν μ€κ³λΆν° μ½νμΈ  κ°λ°κΉμ§ μ μ²΄ κ°λ° μ£Όλ",
          "en-US": "Leading from System Design to Contents Development as the only Developer in the team",
          "emoji": "1οΈβ£π©βπ»",
        },
        stacks: [
          forAll("GM:S"),
          forAll("Steam API"),
        ],
        text: {
          "ko-KR": "GameMaker: Studioλ₯Ό μ΄μ©ν΄ κ²μ μ μ²΄λ₯Ό κ°λ°νμ΅λλ€. Nano Script λΌλ μμ²΄ μΈμ΄λ₯Ό μ€κ³νμ¬ λΉνλ‘κ·Έλλ¨Έλ κ°λ°μ μ°Έμ¬ν  μ μλλ‘ νμ΅λλ€. Steam μ μ©μΌλ‘ κ²μμ λΉλνκ³  μΆμνλ κ³Όμ μ λ΄λΉνμ΅λλ€.",
          "en-US": "Developed a whole game with GameMaker: Studio. Designed a script language so that non-programmers can contribute development processes. Built the game for Steam platform.",
          "emoji": "",
        },
      },
    ],
  },
];