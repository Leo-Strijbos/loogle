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
        "Computer Science student at the University of Cambridge and founding engineer at Briefcase. Builds AI products, research tools, and focused macOS apps.",
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
    aliases: ["projects", "portfolio", "mind", "pinky", "darwingp", "ottoprop", "latch"],
    results: [
      {
        title: "Mind — plug-and-play LLM memory backend",
        url: "https://github.com/Leo-Strijbos/Mind",
        href: "https://github.com/Leo-Strijbos/Mind",
        snippet:
          "A memory backend for AI agents that models the human brain. Agents send raw perceptions into Mind and query it for the smallest useful memory packet before they act. Mind owns storage, consolidation, recall, corrections, retention, and evidence packaging — callers should not have to design memory policy.",
      },
      {
        title: "Pinky — macOS menu bar workflow companion",
        url: "https://github.com/Leo-Strijbos/Pinky",
        href: "https://github.com/Leo-Strijbos/Pinky",
        snippet:
          "Watches your screen, walks you through workflows step by step, and turns what you do into reusable skill files. Teach a process on screen, then ask Pinky to guide you later — or export .md skill files for other AI tools. Voice + vision with Control + Option across multiple monitors.",
      },
      {
        title: "OttoProp — AI intern for property managers",
        url: "https://github.com/Leo-Strijbos/OttoPropAI",
        href: "https://github.com/Leo-Strijbos/OttoPropAI",
        snippet:
          "1 of 11 teams invited to the Ada Ventures hackathon for £100k in funding. An AI intern that autonomously handles maintenance requests end-to-end, sends emails, and updates the CRM using the LangChain agentic framework.",
      },
      {
        title: "DarwinGP — genetic algorithm learns to race around randomly-generated racetracks",
        url: "https://github.com/Leo-Strijbos/DarwinGP",
        href: "https://github.com/Leo-Strijbos/DarwinGP",
        snippet:
          "Hundreds of tiny feed-forward networks drive cars on procedural closed circuits. A genetic algorithm selects parents, crosses them over, mutates weights, and keeps elites — no server, no ML frameworks, just Next.js and a canvas.",
      },
      {
        title: "Latch Writing — focused macOS note-taking",
        url: "https://github.com/Leo-Strijbos/latch",
        href: "https://github.com/Leo-Strijbos/latch",
        snippet:
          "A minimal macOS note-taking app built for focused writing. Stores notes as local Markdown files, keeps the interface quiet, and includes an intentional focus lock mode for writing without app switching.",
      },
      {
        title: "Malaria Detection — Faster R-CNN with TensorFlow",
        url: "https://loogle.com/projects/malaria-detection",
        snippet:
          "Built a Faster R-CNN ResNet model with TensorFlow for malaria parasite detection (90% test accuracy), integrated via a Streamlit frontend.",
      },
      {
        title: "Account Sharing Detection — keystroke dynamics research",
        url: "https://loogle.com/projects/account-sharing",
        snippet:
          "Research project exploring keystroke dynamics and clustering to detect password sharing on streaming services. Tested on 40 participants; found keystroke patterns too similar to reliably distinguish users.",
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
          "Leo is a founding engineer at Briefcase — an AI autopilot for accountants and bookkeepers. He shipped the Mileage Claims feature end-to-end and is now focused on improving the autopublish rate.",
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
          "July 2026 – present. AI autopilot for accountants and bookkeepers. Shipped Mileage Claims end-to-end; currently improving autopublish rate.",
      },
      {
        title: "Cofounder — The Bot Factory",
        url: "https://loogle.com/work/bot-factory",
        snippet:
          "April 2025 – September 2025. Boutique AI automation agency for UK businesses. Built a maintenance request platform that saved a property management firm ~30 hours/week; grew SEO to 1–2 booked meetings per week.",
      },
      {
        title: "Machine Learning Research Intern — Novartis (2025)",
        url: "https://loogle.com/work/novartis-2025",
        snippet:
          "Aug – Sep 2025. Invited back to the same group. AI research on Bayesian modelling for dose-finding studies. Built an LLM tool in an RStudio sandbox to generate and self-correct models — essentially Cursor for Bayesian inference. Delivered a seminar on Bayesian modelling with AI.",
      },
      {
        title: "Machine Learning Research Intern — Novartis (2023)",
        url: "https://loogle.com/work/novartis-2023",
        snippet:
          "Sep – Oct 2023. Designed an LLM-based system to extract structured information from clinical trial reports. Delivered a seminar on practical applications of LLMs in clinical informatics.",
      },
    ],
  },
  {
    id: "bot-factory",
    question: "What is The Bot Factory?",
    aliases: ["bot factory", "the bot factory"],
    results: [
      {
        title: "The Bot Factory — Boutique AI automation agency",
        url: "https://loogle.com/work/bot-factory",
        snippet:
          "Cofounded by Leo (April – September 2025). Served UK businesses including property managers, commercial finance brokers, and online communities. Designed and delivered client projects end-to-end, including a maintenance request management platform that saved ~30 hours per week.",
      },
      {
        title: "Growing The Bot Factory: SEO, sales, and delivery",
        url: "https://loogle.com/work/bot-factory/growth",
        snippet:
          "Leo took charge of marketing, growing SEO to 1–2 booked meetings per week, learning to take sales calls and close deals while shipping client automation work.",
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
          "Building batching and pipeline tooling for AlphaFold to make large-scale structure prediction more practical for protein researchers.",
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
        snippet: "Best for professional or academic reach-outs. Cambridge email.",
      },
      {
        title: "Phone — +41 79 567 53 01",
        url: "tel:+41795675301",
        href: "tel:+41795675301",
        snippet: "Available by phone.",
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

export function findQuery(q: string): QueryEntry | undefined {
  const n = normalizeQuery(q);
  if (!n) return undefined;

  return queries.find((entry) => {
    if (normalizeQuery(entry.question) === n) return true;
    if (entry.id === n) return true;
    return entry.aliases?.some((a) => normalizeQuery(a) === n || n.includes(normalizeQuery(a)));
  });
}

export function filterSuggestions(input: string): QueryEntry[] {
  const n = normalizeQuery(input);
  if (!n) return queries;
  return queries.filter(
    (entry) =>
      normalizeQuery(entry.question).includes(n) ||
      entry.aliases?.some((a) => normalizeQuery(a).includes(n) || n.includes(normalizeQuery(a))),
  );
}

export function getRandomQuery(): QueryEntry {
  return queries[Math.floor(Math.random() * queries.length)]!;
}
