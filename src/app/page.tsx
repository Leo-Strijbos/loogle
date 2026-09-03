import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import Link from "next/link";

import { EnvelopeOpen } from "@/components/EnvelopeOpen";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { profile } from "@/content/profile";

export default function HomePage() {
  return (
    <>
      <EnvelopeOpen />

      <div className="open-page">
        <SiteNav />

        <article className="mx-auto max-w-[43rem] px-6 pt-24 pb-32 sm:px-8 sm:pt-32 lg:pt-36">
          <Image
            src="/leo.png"
            alt="Leo Strijbos"
            width={80}
            height={80}
            priority
            className="mb-8 h-20 w-20 object-cover"
          />

          <h1 className="font-display text-[clamp(2.5rem,8vw,3.75rem)] leading-[1.04] tracking-[-0.015em]">
            Hi, I&apos;m Leo.
          </h1>

          <div className="mt-9 flex flex-col gap-7 font-prose text-[clamp(1.125rem,2.2vw,1.375rem)] leading-[1.6] text-prose">
            <Reveal>
              I&apos;m in my third year of computer science at Cambridge. I&apos;m researching and building in machine learning, chip verification and computational biology.

            </Reveal>

            <Reveal>
              <ExternalLink href="https://github.com/Leo-Strijbos/packing-problems">
                I hold 10 records in packing problems. 
              </ExternalLink>{" "}
              Two of them had stood since 2007, and every one was reproduced
              blind by a third-party verifier.
            </Reveal>

            <Reveal>
              I&apos;ve built a bunch of agent infrastructure based on my own experiences.
              I felt that using Markdown files for memory was pretty primitive so I wrote{" "}
              <ExternalLink href="https://github.com/Leo-Strijbos/Mind">Mind</ExternalLink>, a plug-and-play memory backend for agents which models the human brain. 
              I also figured that queues would suit agents better than while-loops, so I wrote{" "}
              <ExternalLink href="https://github.com/Leo-Strijbos/Patience">Patience</ExternalLink>, a framework for building queue-based agents.
              I also felt inspired by{" "}<ExternalLink href="https://github.com/Leo-Strijbos/Pinky">Farza&apos;s Clicky</ExternalLink>, so I forked it and turned it into an internal company brain called{" "}
              <ExternalLink href="https://github.com/Leo-Strijbos/Pinky">Pinky</ExternalLink>.
            </Reveal>

            <Reveal>
              My interest in bio came from training neural nets to detect malaria in high school, and then two ML research internships at Novartis.
              I built{" "}
              <ExternalLink href="https://github.com/Leo-Strijbos/batchfold">BatchFold</ExternalLink>, a parallelisation and batching infrastructure for protein folding models.
            </Reveal>

            <Reveal>
              In between, I spent a summer as founding engineer at{" "}
              <ExternalLink href="/ai-memories.pdf">Briefcase</ExternalLink>, and before that I
              cofounded a small automation agency with my friend Tom.
            </Reveal>

            <Reveal>
              Right now I&apos;m training models for inverse protein folding,
              and teaching models to read a chip specification against its RTL
              to find real bugs.
            </Reveal>

            <Reveal className="pt-3">
              To see a complete list of all the things I&apos;ve built, the places I worked, and where I&apos;ve studied, click{" "}
              <Link href="/things">here</Link>{". "}
              Otherwise, you can reach me at{" "}
              <a href={`mailto:${profile.email}`}>ljfs2 [at] cam [dot] ac [dot] uk</a>.
            </Reveal>
          </div>

          <Reveal className="mt-10 font-display text-[2rem] leading-none">Leo</Reveal>
        </article>
      </div>
    </>
  );
}
