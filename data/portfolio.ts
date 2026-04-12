export type Metric = {
  label: string;
  value: string;
  context: string;
};

export type Experience = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  description: string;
  impact: string[];
  tech: string[];
};

export type Award = {
  title: string;
  organization: string;
  amount: string;
  description: string;
};

export type Feature = {
  source: string;
  title: string;
  link: string;
  description: string;
  image?: string;
  award?: { title: string; amount: string };
  projectSlug?: string;
};

export type ProjectAward = {
  title: string;
  organization: string;
  amount: string;
};

export type PressItem = {
  source: string;
  description: string;
};

export type TechnicalDetails = {
  architecture: string[];
  focus: string[];
};

export type Project = {
  name: string;
  slug: string;
  tagline: string;
  category: string;
  featured: boolean;
  dates?: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  impact: string[];
  tech?: string[];
  technical_details?: TechnicalDetails;
  team?: string[];
  awards?: ProjectAward[];
  links?: Record<string, string>;
  press?: PressItem[];
};

export type Skills = {
  languages: string[];
  frontend: string[];
  backend: string[];
  cloud: string[];
  infra: string[];
  databases: string[];
};

export type Education = {
  school: string;
  degree: string;
  gpa: string;
  coursework: string[];
};

const portfolio = {
  personal: {
    name: "Joshua Choi",
    location: "Bellevue, WA",
    email: "choiji2@uci.edu",
    linkedin: "https://linkedin.com/in/joshua-choi-2003/",
  },

  hero: {
    headline:
      "Software Engineer building scalable infrastructure, AI systems, and production-grade platforms",
    subheadline: "Focused on identity systems, automation, and applied AI",
    description:
      "Engineer at Salesforce building IAM platforms for 50K+ users. Specializing in high-throughput systems, automation, and LLM-powered workflows.",
    cta_primary: "View Projects",
    cta_secondary: "Contact",
  },

  metrics: [
    { label: "Sprint Capacity Saved", value: "20%", context: "IAM automation at Salesforce" },
    { label: "Provisioning Time Reduced", value: "2w → 10min", context: "IAM onboarding system" },
    { label: "Workflow Creation Reduced", value: "3w → 10min", context: "LLM workflow system" },
    { label: "Executions Powered", value: "31,000+", context: "Texera platform" },
    { label: "Users Impacted", value: "330+", context: "ML workflow system" },
    { label: "Manual Work Reduced", value: "95%", context: "AI real estate platform" },
    { label: "Hackathon Award", value: "$20,000", context: "National Academies Winner" },
  ] as Metric[],

  experience: [
    {
      company: "Salesforce",
      role: "Associate Member of Technical Staff",
      location: "Bellevue, WA",
      dates: "Nov 2025 – Present",
      description:
        "Owning and scaling a production identity and access management (IAM) provisioning pipeline supporting ~50K internal users. Contributing to the next-generation identity platform focused on scalability, security, and automation.",
      impact: [
        "Designed and scaled a provisioning system handling thousands of requests, improving reliability and operational efficiency",
        "Automated onboarding workflows, saving ~20% sprint capacity per engineer",
        "Built event-driven Slack notification system to improve visibility into provisioning events and failures",
        "Developed backend services and APIs in Go with React-based internal tooling",
        "Worked on security-compliant IAM infrastructure ensuring auditability and policy enforcement",
      ],
      tech: ["Go", "React", "SQL"],
    },
  
    {
      company: "Salesforce",
      role: "Software Engineer Intern",
      location: "San Francisco, CA",
      dates: "Jun 2025 – Sep 2025",
      description:
        "Architected and shipped a full-stack identity provisioning system used across ~100 internal teams to automate user onboarding and access management.",
      impact: [
        "Reduced provisioning time from ~2 weeks to ~10 minutes through automation",
        "Designed backend services in Java and SQL to handle identity and entitlement workflows",
        "Built scalable APIs and integrated with multiple internal systems",
        "Collaborated cross-functionally to deploy production-ready features",
      ],
      tech: ["Java", "JavaScript", "SQL"],
    },
  
    {
      company: "UC Irvine",
      role: "Research Software Engineer",
      location: "Irvine, CA",
      dates: "Jun 2024 – Apr 2025",
      description:
        "Developed LLM-powered systems to automate machine learning workflows and contributed to Texera, a distributed data processing platform for large-scale ML pipelines.",
      impact: [
        "Built system to convert Jupyter notebooks into DAG-based workflows, reducing setup time from ~3 weeks to ~10 minutes",
        "Supported a distributed platform with 31,000+ executions across 330+ users",
        "Engineered backend components for large-scale data processing using Python, Java, and Scala",
        "Designed core architecture for LLM-based workflow automation system",
      ],
      tech: ["Python", "Java", "Scala", "SQL"],
    },
  
    {
      company: "OC Vibe",
      role: "Software Engineer Contractor",
      location: "Irvine, CA",
      dates: "Jan 2024 – Jan 2025",
      description:
        "Built a containerized AI-powered web crawling and analytics platform for real estate market research, enabling automated data collection and analysis at scale.",
      impact: [
        "Developed system processing ~10K pages/day continuously (24/7)",
        "Reduced analyst effort by ~95% (1 hour → 3 minutes)",
        "Built data pipelines for scraping, processing, and storing large-scale datasets",
        "Deployed containerized services with Docker and Azure CI/CD",
      ],
      tech: ["Python", "React", "MongoDB", "Docker", "Azure"],
    },
  ] as Experience[],

  projects: [
    {
      name: "Poppy",
      slug: "poppy",
      tagline: "AI-powered STI risk screening and diagnosis platform",
      category: "AI / Healthcare",
      featured: true,
      dates: "2024",
      overview:
        "Poppy is an AI-powered application that helps users navigate STI diagnosis through personalized assessments, image analysis, and tailored health recommendations.",
      problem:
        "Sexually transmitted infections are a major public health issue in the U.S., with millions of cases annually and significant barriers around stigma, accessibility, and early diagnosis.",
      solution:
        "Built an AI-driven diagnostic system that combines adaptive questionnaires and image processing to provide private, personalized preliminary diagnoses and guidance.",
      features: [
        "Personalized diagnostic questionnaire",
        "Image-based analysis pipeline",
        "Privacy-first architecture (no sensitive data transmission)",
        "Context-aware health recommendations",
      ],
      impact: [
        "1st Place — National AI Health Hackathon",
        "$20,000 grant funding",
        "Recognized by National Academy of Medicine",
        "Built solution addressing U.S. STI epidemic",
      ],
      technical_details: {
        architecture: [
          "User onboarding + diagnostic flow",
          "AI-based image processing pipeline",
          "Rule-based + model-assisted decision system",
        ],
        focus: ["AI", "Healthcare", "Privacy-first systems"],
      },
      team: ["Joshua Choi", "Nathan Choi", "Paul Wong"],
      awards: [
        {
          title: "1st Place",
          organization: "National Academies of Sciences, Engineering, and Medicine",
          amount: "$20,000",
        },
      ],
      links: {
        article:
          "https://nam.edu/news-and-insights/coding-for-change-national-academies-hackathons-tackle-the-u-s-sti-epidemic/",
      },
      press: [
        {
          source: "National Academy of Medicine",
          description:
            "Featured as a winning solution addressing barriers in sexual health care through AI-driven diagnosis and personalized guidance.",
        },
      ],
    },
    {
      name: "Overshoot",
      slug: "overshoot",
      tagline: "Real-time AI photo capture assistant",
      category: "AI / Computer Vision",
      featured: true,
      dates: "2024",
      overview:
        "Overshoot is an AI-powered application that detects photo capture issues in real time and guides users to improve image quality.",
      problem:
        "Users often take poor-quality photos due to lighting, framing, or focus issues without real-time feedback.",
      solution:
        "Built a real-time computer vision system that detects capture issues and provides immediate feedback to improve photos.",
      features: [
        "Real-time image analysis",
        "Capture quality detection",
        "User feedback loop",
        "Mobile deployment prototype",
      ],
      impact: [
        "Top 3 — UCI AI Innovation Challenge",
        "$2,000 award",
        "Selected among 80+ teams",
      ],
      tech: ["Python", "Computer Vision", "Mobile"],
      links: {
        article:
          "https://news.uci.edu/2024/02/02/uc-irvines-antrepreneur-center-announces-winners-of-ai-innovation-challenge/",
      },
    },
  ] as Project[],

  awards: [
    {
      title: "1st Place — National AI Health Hackathon",
      organization: "National Academies of Sciences, Engineering, and Medicine",
      amount: "$20,000",
      description:
        "Awarded for building Poppy, an AI-powered STI diagnosis platform addressing public health challenges.",
    },
    {
      title: "Top 3 — AI Innovation Challenge",
      organization: "UC Irvine",
      amount: "$2,000",
      description:
        "Recognized for building Overshoot, an AI-powered photo analysis application.",
    },
  ] as Award[],

  features: [
    {
      source: "National Academy of Medicine",
      title: "Coding for Change: Tackling the U.S. STI Epidemic",
      link: "https://nam.edu/news-and-insights/coding-for-change-national-academies-hackathons-tackle-the-u-s-sti-epidemic/",
      description:
        "Highlighted Poppy as a winning AI solution improving STI diagnosis accessibility and early detection.",
      image: "/poppy_conference.JPEG",
      award: { title: "1st Place — National AI Health Hackathon", amount: "$20,000" },
      projectSlug: "poppy",
    },
    {
      source: "UC Irvine News",
      title: "AI Innovation Challenge Winners",
      link: "https://news.uci.edu/2024/02/02/uc-irvines-antrepreneur-center-announces-winners-of-ai-innovation-challenge/",
      description:
        "Recognized Overshoot as a top-performing AI project in the entrepreneurship competition out of 80+ teams.",
      image: "/overshoot_win.JPG",
      award: { title: "Top 3 — AI Innovation Challenge", amount: "$2,000" },
      projectSlug: "overshoot",
    },
  ] as Feature[],

  skills: {
    languages: ["Java", "Go", "Python", "TypeScript", "JavaScript"],
    frontend: ["React"],
    backend: ["Node.js", "APIs", "Distributed Systems"],
    cloud: ["AWS", "GCP", "Azure"],
    infra: ["Docker", "Kubernetes", "CI/CD"],
    databases: ["Postgres", "MySQL", "MongoDB"],
  } as Skills,

  education: {
    school: "University of California, Irvine",
    degree: "B.S. Computer Science",
    gpa: "3.98",
    coursework: [
      "Machine Learning",
      "Database Systems",
      "Operating Systems",
      "Computer Architecture",
      "System Design",
      "Computer Networks",
    ],
  } as Education,
};

export default portfolio;
