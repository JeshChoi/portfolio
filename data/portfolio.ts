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
  graduated: string;
};

const portfolio = {
  personal: {
    name: "Joshua Choi",
    location: "San Francisco, CA",
    email: "joshua.choi2003@gmail.com",
    linkedin: "https://linkedin.com/in/joshua-choi-2003/",
  },

  hero: {
    headline:
      "Software Engineer building scalable infrastructure, AI systems, and production-grade platforms",
    subheadline: "Focused on identity systems, automation, and applied AI",
    description:
      "Software Engineer at Salesforce building a multi-tenant IAM platform for 100+ engineering teams. I work on reliable provisioning, infrastructure automation, and AI agents that support production operations.",
    cta_primary: "View Projects",
    cta_secondary: "Contact",
  },

  metrics: [
    { label: "Engineering Teams Served", value: "100+", context: "Salesforce multi-tenant IAM platform" },
    { label: "Bulk Entitlement Creation", value: "5h → 5min", context: "100 entitlements at Salesforce" },
    { label: "Detection Time", value: "1w → 1min", context: "Detection reduced from up to a week · Salesforce" },
    { label: "On-call Threads Handled", value: "5%", context: "Weekly threads handled by an AI agent" },
    { label: "Engineering Hours Saved", value: "250+", context: "Self-service IAM onboarding internship" },
    { label: "Workflow Executions", value: "31,000+", context: "Texera · 330+ researchers" },
  ] as Metric[],

  experience: [
    {
      company: "Salesforce",
      role: "Software Engineer",
      location: "Bellevue, WA",
      dates: "Nov 2025 – Present",
      description: "Building reliable identity provisioning and production automation for engineering teams.",
      impact: [
        "Designed and developed a multi-tenant IAM provisioning platform serving 100+ engineering teams and processing hundreds of entitlement creations daily.",
        "Shipped CSV bulk creation to remove an onboarding bottleneck, cutting manual effort for 100 entitlements from about 5 hours to 5 minutes; adopted by multiple teams.",
        "Designed manifest-driven provisioning across target services with idempotent APIs, retries, and a transactional outbox, enabling tenant-specific configuration.",
        "Built an AI on-call agent integrating Slack and PagerDuty MCPs with Salesforce data to autonomously triage issues and respond to customers, handling 5% of weekly on-call threads.",
        "Built monitoring for mass deactivations and stuck processes with PagerDuty alerting, reducing detection time from up to a week to one minute.",
      ],
      tech: ["Go", "PostgreSQL", "gRPC", "Temporal", "Kubernetes", "Terraform", "Jenkins", "Spinnaker", "React"],
    },
    {
      company: "Salesforce",
      role: "Software Engineer Intern",
      location: "San Francisco, CA",
      dates: "Jun 2025 – Sep 2025",
      description: "Delivered self-service identity and access management onboarding.",
      impact: [
        "Built self-service IAM entitlement onboarding with provisioning APIs, SQL schema changes, and request forms, replacing manual engineering tickets.",
        "Processed 250+ production requests and saved 250+ engineering hours.",
      ],
      tech: ["Java", "JavaScript", "SQL"],
    },
    {
      company: "UC Irvine",
      role: "Research Software Engineer",
      location: "Irvine, CA",
      dates: "Jun 2024 – Apr 2025",
      description: "Built LLM-powered workflow tooling and contributed to open-source data analytics infrastructure.",
      impact: [
        "Developed an LLM-powered compiler translating Jupyter notebooks into executable workflow DAGs using retrieval-augmented generation, reducing manual conversion from 2 weeks to 10 minutes.",
        "Contributed backend features and workflow infrastructure to Texera, an open-source data analytics platform supporting 31,000+ workflow executions across 330+ researchers.",
      ],
      tech: ["Python", "Java", "PostgreSQL", "Docker", "LangChain", "React"],
    },
    {
      company: "OC Vibe",
      role: "Software Engineer",
      location: "Anaheim, CA",
      dates: "Jan 2024 – Jan 2025",
      description: "Developed an AI-assisted real estate research platform deployed on Azure.",
      impact: [
        "Built a platform that identified leads from Google Alerts and used targeted web crawling and LLM extraction to collect property data, cutting research time from 1 hour to 3 minutes.",
        "Deployed on Azure to process 10,000+ pages daily.",
      ],
      tech: ["Python", "Azure", "Docker", "MongoDB", "GitHub Actions", "React"],
    },
  ] as Experience[],

  projects: [
    {
      name: "Poppy",
      slug: "poppy",
      tagline: "AI-powered health screening app",
      category: "AI / Healthcare",
      featured: true,
      dates: "Jun 2023 – Jun 2025",
      overview:
        "AI-powered health screening app built with React, MongoDB, and LLMs. Won first place at the National AI Health Hackathon and led to invitations to speak at NACCHO360 and PHI*Con in 2024.",
      problem:
        "Sexually transmitted infections are a major public health issue in the U.S., with millions of cases annually and significant barriers around stigma, accessibility, and early diagnosis.",
      solution:
        "Built an AI-powered health screening application with React, MongoDB, and LLMs.",
      features: [
        "AI-powered health screening",
        "React application interface",
        "MongoDB-backed application",
      ],
      impact: [
        "1st Place — National AI Health Hackathon",
        "$20,000 first-place award",
        "Recognized by NASEM, CDC, and NACCHO",
        "Invited to speak at NACCHO360 and PHI*Con in 2024",
      ],
      tech: ["React", "MongoDB", "LLMs"],
      team: ["Joshua Choi", "Nathan Choi", "Paul Wong"],
      awards: [
        {
          title: "1st Place",
          organization: "National Academies of Sciences, Engineering, and Medicine (NASEM) · CDC · NACCHO",
          amount: "$20,000",
        },
      ],
      links: {
        article:
          "https://nam.edu/news-and-insights/coding-for-change-national-academies-hackathons-tackle-the-u-s-sti-epidemic/",
      },
      press: [
        {
          source: "National Academies of Sciences, Engineering, and Medicine (NASEM) · CDC · NACCHO",
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
        "Real-time computer vision pipeline analyzing live camera frames to detect capture quality issues — lighting, framing, focus — and surface corrective feedback in under 100ms. Built for mobile with a lightweight inference model.",
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
      organization: "National Academies of Sciences, Engineering, and Medicine (NASEM) · CDC · NACCHO",
      amount: "$20,000",
      description:
        "Awarded for building Poppy, an AI-powered health screening app addressing public health challenges.",
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
      source: "National Academies of Sciences, Engineering, and Medicine (NASEM) · CDC · NACCHO",
      title: "Coding for Change: Tackling the U.S. STI Epidemic",
      link: "https://nam.edu/news-and-insights/coding-for-change-national-academies-hackathons-tackle-the-u-s-sti-epidemic/",
      description:
        "First-place AI health screening app. Invited to speak at NACCHO360 and PHI*Con in 2024.",
      image: "/poppy_conference.JPEG",
      award: { title: "1st Place — National AI Health Hackathon", amount: "$20,000" },
      projectSlug: "poppy",
    },
    {
      source: "UC Irvine News",
      title: "AI Innovation Challenge Winners",
      link: "https://news.uci.edu/2024/02/02/uc-irvines-antrepreneur-center-announces-winners-of-ai-innovation-challenge/",
      description:
        "Top 3 of 80+ teams at UCI's AI Innovation Challenge.",
      image: "/overshoot_win.JPG",
      award: { title: "Top 3 — AI Innovation Challenge", amount: "$2,000" },
      projectSlug: "overshoot",
    },
  ] as Feature[],

  skills: {
    languages: ["Go", "Python", "Java", "JavaScript", "TypeScript"],
    frontend: ["React", "LangChain", "Model Context Protocol (MCP)"],
    backend: ["gRPC", "Temporal"],
    cloud: ["AWS", "Microsoft Azure"],
    infra: ["Kubernetes", "Docker", "Terraform", "Jenkins", "Spinnaker", "GitHub Actions", "Git", "Linux/Unix", "Bazel"],
    databases: ["Postgres", "MySQL", "MongoDB"],
  } as Skills,

  education: {
    school: "University of California, Irvine",
    degree: "B.S. Computer Science",
    gpa: "3.97",
    graduated: "June 2025",
  } as Education,
};

export default portfolio;
