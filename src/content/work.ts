import type { ProjectLink } from "./projects";

export type Job = {
  slug: string;
  org: string;
  role: string;
  dates: string;
  blurb: string;
  links: ProjectLink[];
};

/**
 * Still to write and link up: both Novartis seminars, and a case study for
 * The Bot Factory.
 */
export const jobs: Job[] = [
  {
    slug: "briefcase",
    org: "Briefcase",
    role: "Founding engineer",
    dates: "Jul – Aug 2026",
    blurb:
      "An AI autopilot for accountants and bookkeepers. I worked on mileage claims, the autopublish rate, the AI memories system, and self-healing software that investigates and repairs infrastructure failures in production.",
    links: [{ label: "AI memories — writeup", href: "/ai-memories.pdf" }],
  },
  {
    slug: "novartis-2025",
    org: "Novartis",
    role: "ML research intern, invited back",
    dates: "Aug – Sep 2025",
    blurb:
      "Research on Bayesian modelling for dose-finding studies. I built an LLM tool inside an RStudio sandbox that writes models and corrects its own errors (roughly Cursor for Bayesian inference) and gave the group a seminar on Bayesian modelling with AI. Early form of recursive self-improvement.",
    links: [],
  },
  {
    slug: "bot-factory",
    org: "The Bot Factory",
    role: "Cofounder",
    dates: "Apr – Sep 2025",
    blurb:
      "An AI automation agency for UK businesses. Our clients included property managers, commercial finance brokers, online communities. Learned the difficulty of building systems for the real world.",
    links: [],
  },
  {
    slug: "novartis-2023",
    org: "Novartis",
    role: "ML research intern",
    dates: "Sep – Oct 2023",
    blurb:
      "Built an LLM system that pulls structured data out of clinical trial reports, and gave a seminar on using LLMs in clinical informatics. Early research on multi-step workflows.",
    links: [],
  },
];

export const education = [
  {
    institution: "University of Cambridge",
    detail:
      "BA Computer Science, 2024–2027. Highest mark in software and security engineering.",
  },
  {
    institution: "International School Basel",
    detail:
      "IB Diploma 44/45, top 1% of the cohort. Computer Science Academic Achievement Award, 2023.",
  },
];
