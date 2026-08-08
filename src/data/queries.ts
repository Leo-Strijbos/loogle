import Fuse from "fuse.js";

export type SearchResult = {
  title: string;
  url: string;
  snippet: string;
  href?: string;
};

export type KnowledgePanel = {
  name: string;
  subtitle: string;
  description: string;
  facts: { label: string; value: string }[];
};

export type QueryEntry = {
  id: string;
  question: string;
  aliases?: string[];
  results: SearchResult[];
  knowledgePanel?: KnowledgePanel;
};

export const queries: QueryEntry[] = [
  {
    id: "who",
    question: "Who is Leo Strijbos?",
    aliases: ["who is leo", "leo strijbos", "about leo"],
    knowledgePanel: {
      name: "Leo Strijbos",
      subtitle: "Founding Engineer · Cambridge CS",
      description:
        "Computer Science student at the University of Cambridge and founding engineer at Briefcase. Builds AI agents, research tooling, and small macOS apps.",
      facts: [
        { label: "Education", value: "BA Computer Science, Cambridge" },
        { label: "Work", value: "Founding Engineer, Briefcase" },
        { label: "Languages", value: "English, Dutch, German" },
        { label: "GitHub", value: "github.com/Leo-Strijbos" },
      ],
    },
    results: [
      {
        title: "Leo Strijbos — Founding Engineer & Cambridge CS student",
        url: "https://www.linkedin.com/in/leostrijbos/",
        href: "https://www.linkedin.com/in/leostrijbos/",
        snippet:
          "Leo Strijbos is a Computer Science undergraduate at the University of Cambridge and founding engineer at Briefcase, an AI autopilot for accountants. Previously cofounded The Bot Factory and interned twice in ML research at Novartis.",
      },
      {
        title: "Leo Strijbos on GitHub",
        url: "https://github.com/Leo-Strijbos",
        href: "https://github.com/Leo-Strijbos",
        snippet:
          "Open-source and personal projects including Mind, DarwinGP, macOS tools, and experiments in AI and computational biology.",
      },
    ],
  },
  {
    id: "projects",
    question: "What projects has Leo built?",
    aliases: ["projects", "portfolio", "mind", "pinky", "patience", "darwingp", "ottoprop", "latch"],
    results: [
      {
        title: "Mind — memory backend for LLM agents",
        url: "https://github.com/Leo-Strijbos/Mind",
        href: "https://github.com/Leo-Strijbos/Mind",
        snippet:
          "A memory backend for AI agents, modelled on human memory. Agents send raw perceptions into Mind and ask it for the smallest useful memory packet before they act. Mind handles storage, consolidation, recall, corrections, retention, and evidence packaging, so the calling agent never has to design a memory policy.",
      },
      {
        title: "Pinky — macOS menu bar app that learns your workflows",
        url: "https://github.com/Leo-Strijbos/Pinky",
        href: "https://github.com/Leo-Strijbos/Pinky",
        snippet:
          "Watches your screen and walks you through a workflow step by step. Do the process once while Pinky watches and it writes a .md skill file you can replay later or hand to another AI tool. Runs on voice and screen vision, triggers with Control + Option, and works across multiple monitors.",
      },
      {
        title: "Patience — TypeScript framework for queue-based AI agents",
        url: "https://github.com/Leo-Strijbos/Patience",
        href: "https://github.com/Leo-Strijbos/Patience",
        snippet:
          "Agents are built as queues of typed tasks, where one task can enqueue others and later tasks can wait on earlier ones, so a run forms a DAG. Runs are stored in SQLite and survive crashes, with retries, human-in-the-loop waits, and a local inspector for debugging.",
      },
      {
        title: "OttoProp — AI intern for property managers",
        url: "https://github.com/Leo-Strijbos/OttoPropAI",
        href: "https://github.com/Leo-Strijbos/OttoPropAI",
        snippet:
          "One of 11 teams invited to the Ada Ventures hackathon for £100k in funding. An AI intern that takes a maintenance request from first message to resolution, sending the emails and updating the CRM along the way. Built on LangChain.",
      },
      {
        title: "DarwinGP — genetic algorithm learns to race around randomly-generated racetracks",
        url: "https://github.com/Leo-Strijbos/DarwinGP",
        href: "https://github.com/Leo-Strijbos/DarwinGP",
        snippet:
          "Hundreds of tiny feed-forward networks drive cars around procedurally generated closed circuits. A genetic algorithm picks parents, crosses them over, mutates weights, and keeps the elites. It all runs in the browser on Next.js and a canvas element, with no server and no ML framework.",
      },
      {
        title: "Latch Writing — stripped-back macOS note-taking",
        url: "https://github.com/Leo-Strijbos/latch",
        href: "https://github.com/Leo-Strijbos/latch",
        snippet:
          "A macOS note-taking app with as little interface as it can get away with. Notes are plain Markdown files on your disk, and a focus lock mode stops you switching apps mid-draft.",
      },
      {
        title: "Malaria Detection — Faster R-CNN with TensorFlow",
        url: "https://loogle.com/projects/malaria-detection",
        snippet:
          "A Faster R-CNN ResNet model built in TensorFlow that spots malaria parasites at 90% test accuracy, with a Streamlit frontend on top.",
      },
      {
        title: "Account Sharing Detection — keystroke dynamics research",
        url: "https://loogle.com/projects/account-sharing",
        snippet:
          "Used keystroke dynamics and clustering to try to catch password sharing on streaming services. Across 40 participants, typing patterns turned out too similar to tell users apart reliably.",
      },
    ],
  },
  {
    id: "school",
    question: "Where did Leo go to school?",
    aliases: ["education", "cambridge", "university", "where did leo study"],
    results: [
      {
        title: "University of Cambridge — BA in Computer Science",
        url: "https://loogle.com/education/cambridge",
        snippet:
          "2024 – 2027. Studying for a BA in Computer Science. Highest mark in software and security engineering.",
      },
      {
        title: "International School Basel — IB Diploma",
        url: "https://loogle.com/education/isb",
        snippet:
          "2008 – 2023. International Baccalaureate Diploma with 44/45 points (top 1% of cohort). Computer Science Academic Achievement Award 2023.",
      },
    ],
  },
  {
    id: "currently-up-to",
    question: "What is Leo currently up to?",
    aliases: ["current job", "briefcase", "what is leo doing"],
    results: [
      {
        title: "Founding Engineer at Briefcase",
        url: "https://loogle.com/work/briefcase",
        snippet:
          "Leo is a founding engineer at Briefcase, an AI autopilot for accountants and bookkeepers. He built and shipped the Mileage Claims feature, and is now working on the autopublish rate.",
      },
    ],
  },
  {
    id: "worked",
    question: "Where has Leo worked?",
    aliases: ["work experience", "jobs", "novartis", "employment"],
    results: [
      {
        title: "Founding Engineer — Briefcase",
        url: "https://loogle.com/work/briefcase",
        snippet:
          "July 2026 – present. AI autopilot for accountants and bookkeepers. Built and shipped the Mileage Claims feature; now working on the autopublish rate.",
      },
      {
        title: "Cofounder — The Bot Factory",
        url: "https://loogle.com/work/bot-factory",
        snippet:
          "April 2025 – September 2025. AI automation agency for UK businesses. Built a maintenance request platform that saved a property management firm about 30 hours a week; grew SEO to 1–2 booked meetings a week.",
      },
      {
        title: "Machine Learning Research Intern — Novartis (2025)",
        url: "https://loogle.com/work/novartis-2025",
        snippet:
          "Aug – Sep 2025. Invited back to the same group. Research on Bayesian modelling for dose-finding studies. Built an LLM tool in an RStudio sandbox that writes models and corrects its own errors, roughly Cursor for Bayesian inference. Gave a seminar on Bayesian modelling with AI.",
      },
      {
        title: "Machine Learning Research Intern — Novartis (2023)",
        url: "https://loogle.com/work/novartis-2023",
        snippet:
          "Sep – Oct 2023. Built an LLM system that pulls structured data out of clinical trial reports. Gave a seminar on using LLMs in clinical informatics.",
      },
    ],
  },
  {
    id: "bot-factory",
    question: "What is The Bot Factory?",
    aliases: ["bot factory", "the bot factory"],
    results: [
      {
        title: "The Bot Factory — small AI automation agency",
        url: "https://loogle.com/work/bot-factory",
        snippet:
          "Cofounded by Leo (April – September 2025). Clients were UK businesses: property managers, commercial finance brokers, and online communities. Leo scoped, built, and delivered the projects himself, among them a maintenance request platform that saved one firm about 30 hours a week.",
      },
      {
        title: "Growing The Bot Factory: SEO, sales, and delivery",
        url: "https://loogle.com/work/bot-factory/growth",
        snippet:
          "Leo ran marketing and grew SEO to 1–2 booked meetings a week. He also learned to take the sales calls and close the deals, while still shipping the client automation work.",
      },
    ],
  },
  {
    id: "thinking",
    question: "What is Leo currently interested in?",
    aliases: ["computational biology", "protein", "alphafold", "research interests"],
    results: [
      {
        title: "Inverse protein folding & computational biology",
        url: "https://loogle.com/thinking/inverse-protein-folding",
        snippet:
          "Leo is training models for inverse protein folding (structure-to-sequence prediction) as alternatives to ProteinMPNN.",
      },
      {
        title: "AlphaFold tooling for protein researchers",
        url: "https://loogle.com/thinking/alphafold-tooling",
        snippet:
          "Building batching and pipeline tooling for AlphaFold so researchers can run structure prediction over large sets of sequences in one go.",
      },
    ],
  },
  {
    id: "languages",
    question: "What languages does Leo speak?",
    aliases: ["languages", "dutch", "german"],
    results: [
      {
        title: "Languages — Leo Strijbos",
        url: "https://loogle.com/about/languages",
        snippet:
          "Leo speaks English, Dutch, and German.",
      },
    ],
  },
  {
    id: "contact",
    question: "How can I contact Leo?",
    aliases: ["contact", "email", "phone", "reach leo"],
    results: [
      {
        title: "Email Leo — ljfs2@cam.ac.uk",
        url: "mailto:ljfs2@cam.ac.uk",
        href: "mailto:ljfs2@cam.ac.uk",
        snippet: "Cambridge address. Best for academic or work enquiries.",
      },
      {
        title: "Phone — +41 79 567 53 01",
        url: "tel:+41795675301",
        href: "tel:+41795675301",
        snippet: "Swiss number, if you would rather call.",
      },
      {
        title: "GitHub — Leo-Strijbos",
        url: "https://github.com/Leo-Strijbos",
        href: "https://github.com/Leo-Strijbos",
        snippet: "Code, projects, and experiments.",
      },
      {
        title: "Download CV (PDF)",
        url: "https://loogle.com/cv.pdf",
        href: "/cv.pdf",
        snippet: "Leo Strijbos — curriculum vitae.",
      },
    ],
  },
];

export function normalizeQuery(q: string): string {
  return q.trim().toLowerCase().replace(/[?!.]+$/g, "");
}

// One index serves findQuery, the dropdown, and "Did you mean" — a loose
// threshold here, with findQuery applying its own stricter cutoff below.
const fuse = new Fuse(queries, {
  keys: [
    { name: "question", weight: 3 },
    { name: "aliases", weight: 3 },
    { name: "results.title", weight: 2 },
    { name: "results.snippet", weight: 1 },
  ],
  includeScore: true,
  ignoreLocation: true,
  threshold: 0.6,
});

// Fuse scores range 0 (perfect) to 1; only scores at or below this count as
// a confident enough match to render a results page. Tuned empirically:
// plausible queries (typos, partial words, loose phrasing) score ≤ ~0.75,
// unrelated queries ("banana bread recipe") score ≥ ~0.92.
const MATCH_THRESHOLD = 0.8;

export function findQuery(q: string): QueryEntry | undefined {
  const n = normalizeQuery(q);
  if (!n) return undefined;

  const exact = queries.find((entry) => {
    if (normalizeQuery(entry.question) === n) return true;
    if (entry.id === n) return true;
    return entry.aliases?.some((a) => normalizeQuery(a) === n || n.includes(normalizeQuery(a)));
  });
  if (exact) return exact;

  const [best] = fuse.search(n, { limit: 1 });
  if (best && (best.score ?? 1) <= MATCH_THRESHOLD) return best.item;
  return undefined;
}

export function filterSuggestions(input: string): QueryEntry[] {
  const n = normalizeQuery(input);
  if (!n) return queries;
  return fuse.search(n).map((r) => r.item);
}

/** Closest entries to a failed query, for "Did you mean" suggestions. */
export function findClosestQueries(q: string, limit = 3): QueryEntry[] {
  const n = normalizeQuery(q);
  if (!n) return [];
  return fuse.search(n, { limit }).map((r) => r.item);
}

export function getRandomQuery(): QueryEntry {
  return queries[Math.floor(Math.random() * queries.length)]!;
}
