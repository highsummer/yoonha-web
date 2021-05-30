import {useRouter} from "next/router";

export const Languages: Language[] = ["ko-KR", "en-US"];
export const GlobalFallbackLanguage = "en-US";
export type Language = "ko-KR" | "en-US";

export type I18n<T> = { [L in Language]: T };
export type TextFragment = I18n<string>;

export function i18n<T>(frag: I18n<T>): T {
  const router = useRouter();
  const langQuery = router.query["lang"];
  const lang: Language = (Array.isArray(langQuery) ? langQuery[0] : langQuery) as Language ?? "ko-KR";
  return frag[lang] ?? frag[GlobalFallbackLanguage]
}

function forAll(x: string): TextFragment {
  return Object.fromEntries(Languages.map(l => [l, x] as [Language, string])) as TextFragment
}

export const Name = "Yoonha Hwang";
export const Catchphrase = "From infrastructure to frontend, an enthusiastic data engineer.";
export const Host = "https://yoonha.dev";

export const LanguageNames: I18n<TextFragment> = {
  "ko-KR": {
    "ko-KR": "한국어",
    "en-US": "Korean",
  },
  "en-US": {
    "ko-KR": "영어",
    "en-US": "English",
  },
};

export type ContactColumns = "phone" | "location" | "email" | "website";
export const Contact: { [K in ContactColumns]: TextFragment } = {
  phone: {
    "ko-KR": "010-8967-0996",
    "en-US": "+82-10-8967-0996",
  },
  location: {
    "ko-KR": "대한민국 경상북도 포항시",
    "en-US": "Pohang, Gyeongsangbuk-do, Republic of Korea",
  },
  email: forAll("yoonha.highsummer@gmail.com"),
  website: forAll("https://yoonha.dev"),
};

export interface AvailableLanguage {
  emoji: string,
  name: TextFragment,
  level: TextFragment,
}
export const AvailableLanguages: AvailableLanguage[] = [
  {
    emoji: "🇰🇷",
    name: {
      "ko-KR": "한국어",
      "en-US": "Korean",
    },
    level: {
      "ko-KR": "모국어",
      "en-US": "Native",
    }
  },
  {
    emoji: "🇺🇸",
    name: {
      "ko-KR": "영어",
      "en-US": "English (US)",
    },
    level: {
      "ko-KR": "원활한 업무 가능",
      "en-US": "Working fluency",
    }
  },
];

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
      "ko-KR": "포항공과대학교",
      "en-US": "POSTECH",
    },
    department: {
      "ko-KR": "컴퓨터공학과",
      "en-US": "Computer Science and Engineering",
    },
    degree: {
      "ko-KR": "학사",
      "en-US": "Bachelor",
    },
    from: new Date("2014-02-01"),
  }
];

export const EducationOngoing: TextFragment = {
  "ko-KR": "재학",
  "en-US": "Ongoing",
}

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
      "ko-KR": "베이글코드",
      "en-US": "Bagelcode",
    },
    charge: forAll("Tech Lead, Data Engineering"),
    from: new Date("2018-08-01"),
    to: new Date("2021-06-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "인프라 비용 절감",
          "en-US": "Infrastructure Cost Reduction",
        },
        stacks: [
          forAll("AWS"),
        ],
        text: {
          "ko-KR": "CloudWatch 로그 서브샘플링, API Gateway에서 ALB로 전환, DynamoDB Caching 등의 업무를 진행했으며 각각의 업무에서 최대 80% 가량 비용 절감 효과를 보았습니다.",
          "en-US": "Worked on subsampling CloudWatch logs, migrating to ALB from API Gateway and adding cache logic on DynamoDB, which resulted in reduction at most 80% in infrastructure costs",
        },
      },
      {
        subtitle: {
          "ko-KR": "데이터 기반 실시간 피드백 시스템",
          "en-US": "Data-based Real-time Feedback System",
        },
        stacks: [
          forAll("Go"),
          forAll("DynamoDB"),
          forAll("Kubernetes"),
          forAll("Helm"),
        ],
        text: {
          "ko-KR": "Analytic Event를 기반으로 만든 feature data를 이용해 분석가와 기획자들이 원하는 user segment에게 실시간으로 원하는 offer를 제공하기 위해 관련 데이터를 실시간으로 서빙할 수 있는 레이어를 개발했습니다.",
          "en-US": "Developed a real-time layer providing directors and analysts with custom user segments to give optimal offers to users using feature set based on Analytic Events",
        },
      },
      {
        subtitle: {
          "ko-KR": "코드 기반 스키마 관리 시스템",
          "en-US": "Code-based Schema Management System",
        },
        stacks: [
          forAll("Python"),
          forAll("GitLab CI"),
          forAll("Typescript"),
          forAll("React"),
        ],
        text: {
          "ko-KR": "Analytic Event 스키마를 코드로 관리할 수 있는 시스템을 고안하고 처음부터 끝까지 개발을 주도하였습니다. 기존에 json으로 관리되던 텍스트 기반의 스키마를 Python 코드 기반으로 바꾸어 업무 효율을 향상시켰습니다.",
          "en-US": "Led team to develop a system to manage Analytic Event schema with Python code base, which let us work more efficiently compared to the previous Json-based text schema.",
        },
      },
      {
        subtitle: {
          "ko-KR": "코드 기반의 데이터 인프라 유지보수",
          "en-US": "Code-based Data Infrastructure Maintenance",
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
          "ko-KR": "Terraform과 Serverless, Helm으로 이루어진 코드 기반 인프라를 유지보수 하는 업무를 수행했습니다.",
          "en-US": "Conducted maintenances for code-based infrastructure made of Terraform, Serverless and Helm.",
        },
      },
      {
        subtitle: {
          "ko-KR": "머신러닝 기반 유저 이탈 예측",
          "en-US": "Machine Learning Based User Churn Prediction",
        },
        stacks: [
          forAll("Python"),
          forAll("Keras"),
          forAll("XGBoost"),
        ],
        text: {
          "ko-KR": "Keras, Tensorflow, XGBoost를 이용하여 유저가 언제 게임에서 이탈할지 예측하는 모델을 만들고 이를 Databricks와 Airflow를 이용해 배포하였습니다. 매일 feature를 생성하고 이미 학습된 모델을 이용해 inference 하여 admin tool에 예측 값을 저장해서 기획팀이 사용할 수 있도록 자동화했습니다. 가설 설정, 데이터 전처리, 모델링 등 전 과정을 주도하고 Confluence에 모든 과정을 실험 노트로 남겼습니다.",
          "en-US": "Made a model to predict when users will leave the game using Keras, Tensorflow and XGBoost, then served it with Airflow and Databricks. Built a pipeline to feed features to model and prediction results to Admin Tools automatically on daily basis so that directors can take advantages of them. Led all processes including building hypothesis, data pre-processing and modeling and wrote them all on Confluence",
        },
      },
      {
        subtitle: {
          "ko-KR": "데이터 검증 시스템 도입",
          "en-US": "Data Validation System",
        },
        stacks: [
          forAll("Python"),
          forAll("Spark"),
        ],
        text: {
          "ko-KR": "PySpark 기반으로 데이터를 자동으로 QA할 수 있는 프레임워크 개발 및 도입했습니다. 데이터의 uniqueness, count, nullity 등을 자동으로 검사하고 Slack으로 integrity에 대해 알림을 받을 수 있도록 설계했습니다. Databricks를 이용해 ETL 하는 과정에서 dependency를 명확하게 하고 유지보수를 쉽게할 목적으로 Markdown 포맷의 표준 코멘트를 도입했습니다.",
          "en-US": "Built a system to validate data using PySpark, which asserts uniqueness, count, nullity and so on then send alerts about data integrity on Slack. Also, introduced a standard Markdown comment format to encourage ETL codes to be explicit and clear.",
        },
      },
      {
        subtitle: {
          "ko-KR": "그 외 데이터 엔지니어링 업무",
          "en-US": "Other Data Engineering Works",
        },
        stacks: [
          forAll("Python"),
          forAll("Scala"),
          forAll("Spark"),
          forAll("Tableau"),
        ],
        text: {
          "ko-KR": "200 billon rows 가량 되는 데이터를 Databricks Spark와 Airflow를 이용해 ETL을 하고 hourly로 Tableau Desktop 에서 볼 수 있도록 후가공 하는 업무를 수행했습니다. Tableau의 경우 기존 구형 API를 Hyper API로 대체하여 수십분 단위로 걸리던 task를 수분 단위로 고속화하였습니다.",
          "en-US": "Developed ETLs on 200B rows using Databricks, Spark and Airflow and post-processed them for Tableau Desktop format on an hourly basis. Specially in case of Tableau, replaced previous old API with 'Hyper API' and achieved reduction in landing time to several minutes from half an hour.",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "보이저엑스",
      "en-US": "VoyagerX",
    },
    charge: forAll("Internship"),
    from: new Date("2018-02-01"),
    to: new Date("2021-08-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "딥러닝 모델 모바일 최적화",
          "en-US": "Deep Learning Model Mobile Optimization",
        },
        stacks: [
          forAll("Python"),
          forAll("Keras"),
          forAll("Tensorflow"),
        ],
        text: {
          "ko-KR": "Dr. Blur 개발 당시 Keras, Tensorflow를 기반으로 pruning, distillation 등을 이용하여 모델을 고속화 및 압축하였습니다. 모델 패러미터 수는 30% 수준으로 줄이고 품질 저하는 5% 이내로 유지하는 결과를 얻었습니다.",
          "en-US": "Optimized deep learning models using pruning and distillation on Keras and Tensorflow, which resulted in reduction on the number of model parameters to 30% keeping quality degradation lower than 5%.",
        },
      },
      {
        subtitle: {
          "ko-KR": "모바일 스캐너 vFlat 인공 데이터셋 생성",
          "en-US": "Artificial Dataset Generation",
        },
        stacks: [
          forAll("Python"),
          forAll("Blender"),
        ],
        text: {
          "ko-KR": "Blender 외부 python 스크립팅 기능을 이용해 자동으로 다각도에서 다양한 환경의 책 이미지를 자동으로 생성했습니다. 기존에 실사 촬영 후 손으로 라벨링하여 모으던 데이터를 대체했습니다.",
          "en-US": "Augmented photo based dataset with a variety of graphically rendered pictures using Blender's external Python scripting functionality.",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "퍼즐데이터",
      "en-US": "PuzzleData",
    },
    charge: forAll("Internship"),
    from: new Date("2017-09-01"),
    to: new Date("2018-01-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "공식 웹페이지 개발",
          "en-US": "Official Webpage Development",
        },
        stacks: [
          forAll("Python"),
          forAll("Django"),
          forAll("Bootstrap"),
        ],
        text: {
          "ko-KR": "Django를 이용하여 서버 백엔드 부터 웹 페이지 프론트엔드까지 직접 개발했습니다.",
          "en-US": "Developed an official webpage from frontend to server backend with Django.",
        },
      },
      {
        subtitle: {
          "ko-KR": "프로세스마이닝 전문 툴 ProDiscovery 2.0 개발 참여",
          "en-US": "ProDiscovery 2.0 Development Participation",
        },
        stacks: [
          forAll("Python"),
          forAll("Blender"),
        ],
        text: {
          "ko-KR": "On-premise Java Spark 환경에서 프로세스마이닝 알고리즘 논문을 구현했습니다.",
          "en-US": "Implemented an algorithm for process mining from a paper on an on-premise Java and Spark environment.",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "긱블",
      "en-US": "Geekble",
    },
    charge: forAll("Director"),
    from: new Date("2017-01-01"),
    to: new Date("2017-08-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "웹 서버, 메일 서버 및 소프트웨어 관리",
          "en-US": "Web/Mail Server and Software Management",
        },
        stacks: [
          forAll("Linux"),
          forAll("Wordpress"),
          forAll("Bootstrap"),
        ],
        text: {
          "ko-KR": "사내 전체의 서버와 소프트웨어를 총괄하여 관리했습니다.",
          "en-US": "Managed servers and software throughout the company.",
        },
      },
      {
        subtitle: {
          "ko-KR": "영상 기획, 촬영, 편집 및 임베디드 시스템 작품 제작",
          "en-US": "Directing, Filming, Editing and Embedded System Artworks Fabrication",
        },
        stacks: [
          forAll("Embedded"),
          forAll("After Effect"),
        ],
        text: {
          "ko-KR": "Dragonboard, Raspberry Pi와 같은 임베디드 시스템과 시리얼 통신, 서보 모터 드라이브 등의 부속 시스템을 결합하여 작품을 제작했습니다.",
          "en-US": "Fabricated artworks using embedded systems like Dragonboard and Raspberry Pi, serial communication and servo motor drivers.",
        },
      },
    ],
  },
  {
    company: {
      "ko-KR": "나노스튜디오",
      "en-US": "Chief Developer",
    },
    charge: forAll("Director"),
    from: new Date("2015-01-01"),
    to: new Date("2017-01-01"),
    contents: [
      {
        subtitle: {
          "ko-KR": "팀 내 유일 개발자로 시스템 설계부터 콘텐츠 개발까지 전체 개발 주도",
          "en-US": "Leading from System Design to Contents Development as the only Developer in the team",
        },
        stacks: [
          forAll("GM:S"),
          forAll("Steam API"),
        ],
        text: {
          "ko-KR": "GameMaker: Studio를 이용해 게임 전체를 개발했습니다. Nano Script 라는 자체 언어를 설계하여 비프로그래머도 개발에 참여할 수 있도록 했습니다. Steam 전용으로 게임을 빌드하고 출시하는 과정을 담당했습니다.",
          "en-US": "Developed a whole game with GameMaker: Studio. Designed a script language so that non-programmers can contribute development processes. Built the game for Steam platform.",
        },
      },
    ],
  },
];