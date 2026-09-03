export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  kind: string;
  blurb: string;
  links: ProjectLink[];
};

/**
 * Newest first. This order is the page order — the list page renders it as-is.
 *
 * Still to write and link up:
 *   packing-problems  — a writeup of the method (the strongest claim on the
 *                       site currently has nothing behind it but a repo)
 *   pinky             — a short screen recording
 *   darwingp          — a hosted live demo; it needs no server
 *   malaria-detection — the repo is not public
 *   account-sharing   — the repo, or a short writeup of the negative result
 */
export const projects: Project[] = [
  {
    slug: "packing-problems",
    name: "Packing problems",
    year: "2026",
    kind: "optimisation",
    blurb:
      "12 verified improvements to best-known values in Erich Friedman's Packing Center, across ten cells and four tables (two of them records that had stood since 2007)! Each packing is reconstructed from the incumbent's published image, then converged exactly: freeze the contact topology, solve by SQP, repeat. Every claim was reproduced blind by a third-party verifier.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Leo-Strijbos/packing-problems",
      },
    ],
  },
  {
    slug: "batchfold",
    name: "BatchFold",
    year: "2026",
    kind: "computational biology",
    blurb:
      "The parallelisation and batching layer for protein folding models, all inside Claude. 28 MCP tools and five skills over a Cloudflare Worker, a SQLite database and an object store, running on your own machine.",
    links: [
      { label: "GitHub", href: "https://github.com/Leo-Strijbos/batchfold" },
    ],
  },
  {
    slug: "mind",
    name: "Mind",
    year: "2026",
    kind: "agent infrastructure",
    blurb:
      "A memory backend for AI agents, modelled on human memory. Agents send raw perceptions into Mind and ask it for the smallest useful memory packet before they act. Mind handles storage, consolidation, recall, corrections, retention and evidence packaging.",
    links: [{ label: "GitHub", href: "https://github.com/Leo-Strijbos/Mind" }],
  },
  {
    slug: "pinky",
    name: "Pinky",
    year: "2026",
    kind: "agent UX",
    blurb:
      "A menu bar app that watches your screen and walks you through a workflow step by step. Do the process once while Pinky watches and it writes a Markdown skill file you can replay later or hand to another AI tool.",
    links: [{ label: "GitHub", href: "https://github.com/Leo-Strijbos/Pinky" }],
  },
  {
    slug: "patience",
    name: "Patience",
    year: "2026",
    kind: "agent infrastructure",
    blurb:
      "A TypeScript framework for queue-based AI agents. One task can enqueue others and later tasks can wait on earlier ones, so a run forms a DAG.",
    links: [
      { label: "GitHub", href: "https://github.com/Leo-Strijbos/Patience" },
    ],
  },
  {
    slug: "ottoprop",
    name: "OttoProp",
    year: "2025",
    kind: "workflow automation",
    blurb:
      "An AI employee that handles a property maintenance request from first message to resolution, sending the emails and updating the CRM along the way. One of 11 teams invited to the Ada Ventures hackathon for £100k in funding.",
    links: [
      { label: "GitHub", href: "https://github.com/Leo-Strijbos/OttoPropAI" },
    ],
  },
  {
    slug: "latch",
    name: "Latch Writing",
    year: "2026",
    kind: "macOS",
    blurb:
      "A stripped-back note-taking app with a focus lock mode stops you switching apps mid-draft.",
    links: [{ label: "GitHub", href: "https://github.com/Leo-Strijbos/latch" }],
  },
  {
    slug: "malaria-detection",
    name: "Malaria detection",
    year: "2020",
    kind: "computational biology",
    blurb:
      "A Faster R-CNN ResNet model built in TensorFlow that spots malaria parasites at 90% test accuracy, with a Streamlit frontend on top.",
    links: [],
  },
];
