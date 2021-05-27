import {useRouter} from "next/router";

const Languages: Language[] = ["ko-KR", "en-US"];
type Language = "ko-KR" | "en-US";

type TextFragment = { [L in Language]: string }

export function i18n(frag: TextFragment) {
  const router = useRouter();
  const langQuery = router.query["lang"];
  const lang: Language = (Array.isArray(langQuery) ? langQuery[0] : langQuery) as Language ?? "ko-KR";
  return frag[lang]
}

function forAll(x: string): TextFragment {
  return Object.fromEntries(Languages.map(l => [l, x] as [Language, string])) as TextFragment
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

export const AvailableLanguages: TextFragment[] = [
  {
    "ko-KR": "🇰🇷 모국어",
    "en-US": "🇰🇷 Native",
  },
  {
    "ko-KR": "🇺🇸 원활한 업무 가능",
    "en-US": "🇺🇸 Working fluency",
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
      "ko-KR": "학사(재학)",
      "en-US": "Bachelor(ongoing)",
    },
    from: new Date("2014-02-01"),
  }
];

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
          "en-US": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "데이터 기반 실시간 피드백 시스템",
          "en-US": "",
        },
        stacks: [
          forAll("Go"),
          forAll("DynamoDB"),
          forAll("Kubernetes"),
          forAll("Helm"),
        ],
        text: {
          "ko-KR": "Analytic Event를 기반으로 만든 feature data를 이용해 분석가와 기획자들이 원하는 user segment에게 실시간으로 원하는 offer를 제공하기 위해 관련 데이터를 실시간으로 서빙할 수 있는 레이어를 개발했습니다.",
          "en-US": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "코드 기반 스키마 관리 시스템",
          "en-US": "",
        },
        stacks: [
          forAll("Python"),
          forAll("GitLab CI"),
          forAll("Typescript"),
          forAll("React"),
        ],
        text: {
          "ko-KR": "Analytic Event 스키마를 코드로 관리할 수 있는 시스템을 고안하고 처음부터 끝까지 개발을 주도하였습니다. 기존에 json으로 관리되던 텍스트 기반의 스키마를 Python 코드 기반으로 바꾸어 업무 효율을 향상시켰습니다.",
          "en-US": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "코드 기반의 데이터 인프라 유지보수",
          "en-US": "",
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
          "en-US": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "머신러닝 기반 유저 이탈 예측",
          "en-US": "",
        },
        stacks: [
          forAll("Python"),
          forAll("Keras"),
          forAll("XGBoost"),
        ],
        text: {
          "ko-KR": "Keras, Tensorflow, XGBoost를 이용하여 유저가 언제 게임에서 이탈할지 예측하는 모델을 만들고 이를 Databricks와 Airflow를 이용해 배포하였습니다. 매일 feature를 생성하고 이미 학습된 모델을 이용해 inference 하여 admin tool에 예측 값을 저장해서 기획팀이 사용할 수 있도록 자동화했습니다. 가설 설정, 데이터 전처리, 모델링 등 전 과정을 주도하고 Confluence에 모든 과정을 실험 노트로 남겼습니다.",
          "en-US": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "데이터 검증 시스템 도입",
          "en-US": "",
        },
        stacks: [
          forAll("Python"),
          forAll("Spark"),
        ],
        text: {
          "ko-KR": "PySpark 기반으로 데이터를 자동으로 QA할 수 있는 프레임워크 개발 및 도입했습니다. 데이터의 uniqueness, count, nullity 등을 자동으로 검사하고 Slack으로 integrity에 대해 알림을 받을 수 있도록 설계했습니다. Databricks를 이용해 ETL 하는 과정에서 dependency를 명확하게 하고 유지보수를 쉽게할 목적으로 Markdown 포맷의 표준 코멘트를 도입했습니다.",
          "en-US": "",
        },
      },
      {
        subtitle: {
          "ko-KR": "그 외 데이터 엔지니어링 업무",
          "en-US": "",
        },
        stacks: [
          forAll("Python"),
          forAll("Scala"),
          forAll("Spark"),
          forAll("Tableau"),
        ],
        text: {
          "ko-KR": "200 billon rows 가량 되는 데이터를 Databricks Spark와 Airflow를 이용해 ETL을 하고 hourly로 Tableau Desktop 에서 볼 수 있도록 후가공 하는 업무를 수행했습니다. Tableau의 경우 기존 구형 API를 Hyper API로 대체하여 수십분 단위로 걸리던 task를 수분 단위로 고속화하였습니다.",
          "en-US": "",
        },
      },
    ],
  },
];