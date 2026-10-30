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
            width={120}
            height={120}
            priority
            className="mb-8 h-20 w-20 object-cover"
          />

          <h1 className="font-display text-[clamp(2.5rem,8vw,3.75rem)] leading-[1.04] tracking-[-0.015em]">
            Hi, I&apos;m Leo.
          </h1>

          <div className="mt-9 flex flex-col gap-7 font-prose text-[clamp(1.125rem,2.2vw,1.375rem)] leading-[1.6] text-prose">
            <Reveal>
              I&apos;m in my third year of computer science at Cambridge. I&apos;m researching and building in machine learning, chip design and computational biology.

            </Reveal>

            <Reveal>
              <ExternalLink href="https://github.com/Leo-Strijbos/packing-problems">
                I hold 10 records in packing problems. 
              </ExternalLink>{" "}
              Two of them had stood since 2007. Several of my records have since been broken.
            </Reveal>

            <Reveal>
              My interest in bio came from training neural nets to detect malaria in high school, and then two ML research internships at Novartis.
              I built{" "}
              <ExternalLink href="https://github.com/Leo-Strijbos/batchfold">BatchFold</ExternalLink>, a parallelisation and batching infrastructure for protein folding models.
            </Reveal>

            <Reveal>
              I've also done a bunch of work with open-source cores. I completed the first comprehensive formal verification of 
              {" "}<ExternalLink href="https://github.com/Leo-Strijbos/hazard3-formal">Raspberry Pi&apos;s Hazard 3 core</ExternalLink>.
              I also discovered {" "}<ExternalLink href="https://github.com/ucb-bar/saturn-vectors/pull/102">this priviledge escalation bug</ExternalLink>{" "}in the Saturn Vector Unit.
            </Reveal>

            <Reveal>
              In between, I spent a summer as founding engineer intern at{" "}
              <ExternalLink href="https://briefcase.so">Briefcase</ExternalLink>, and before that I
              cofounded a small automation agency with my friend Tom.
            </Reveal>

            <Reveal>
              Right now I&apos;m training models for inverse protein folding,
              and building EDA tools for AI inference chips.
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
