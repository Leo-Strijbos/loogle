import type { Metadata } from "next";
import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";
import { SiteNav } from "@/components/SiteNav";
import { projects, type ProjectLink } from "@/content/projects";
import { education, jobs } from "@/content/work";

export const metadata: Metadata = {
  title: "Everything I've made — Leo Strijbos",
  description:
    "Projects and work by Leo Strijbos: packing records, agent infrastructure, protein folding tooling, and a few things that didn't work.",
};

function Links({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-col gap-1 text-[14px] md:text-right">
      {links.map((link) => (
        <li key={link.href}>
          <ExternalLink href={link.href}>{link.label} ↗</ExternalLink>
        </li>
      ))}
    </ul>
  );
}

const row =
  "grid grid-cols-1 gap-x-10 gap-y-3 border-t border-rule py-6 md:grid-cols-[15rem_minmax(0,1fr)_9rem]";

export default function ThingsPage() {
  return (
    <div>
      <SiteNav back />

      <main className="mx-auto max-w-[66rem] px-6 pt-20 pb-28 sm:px-8 sm:pt-24">
        <h1 className="font-display text-[clamp(2.5rem,7vw,3.875rem)] leading-[1.04] tracking-[-0.015em]">
          Everything I&apos;ve made
        </h1>

        <section className="mt-12">
          {projects.map((project) => (
            <article key={project.slug} className={row}>
              <div>
                <h2 className="text-[1.3rem] font-bold tracking-[-0.01em]">
                  {project.name}
                </h2>
                <p className="mt-1 text-[13px] text-dim">
                  {project.year} · {project.kind}
                </p>
              </div>
              <p className="font-prose text-[1.125rem] leading-[1.58] text-prose">
                {project.blurb}
              </p>
              <Links links={project.links} />
            </article>
          ))}
          <div className="border-t border-rule" />
        </section>

        <section className="mt-16">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,2.375rem)] leading-[1.05]">
            And the ones I was paid for
          </h2>
          <div className="mt-6">
            {jobs.map((job) => (
              <article key={job.slug} className={`${row} py-5`}>
                <div>
                  <h3 className="text-[1.2rem] font-bold tracking-[-0.01em]">
                    {job.org}
                  </h3>
                  <p className="mt-1 text-[13px] text-dim">{job.dates}</p>
                </div>
                <p className="font-prose text-[1.0625rem] leading-[1.55] text-prose">
                  <span className="font-semibold">{job.role}.</span> {job.blurb}
                </p>
                <Links links={job.links} />
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 border-t border-rule-soft pt-8">
          <h2 className="text-[12px] uppercase tracking-[0.14em] text-faint">
            Studied
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {education.map((entry) => (
              <p
                key={entry.institution}
                className="font-prose text-[1.0625rem] leading-[1.55] text-prose"
              >
                <span className="font-semibold">{entry.institution}</span>,{" "}
                {entry.detail}
              </p>
            ))}
          </div>
        </section>

        <p className="mt-14 text-[16px]">
          <Link href="/">← Back to the letter</Link>
        </p>
      </main>
    </div>
  );
}
