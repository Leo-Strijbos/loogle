import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteNav } from "@/components/SiteNav";
import { besides } from "@/content/besides";

export const metadata: Metadata = {
  title: "Besides — Leo Strijbos",
  description: "Things Leo Strijbos likes, unranked and unexplained.",
};

export default function BesidesPage() {
  // The page does not exist until the list does. See src/content/besides.ts.
  if (besides.length === 0) notFound();

  return (
    <div>
      <SiteNav back />

      <main className="mx-auto max-w-[43rem] px-6 pt-20 pb-28 sm:px-8 sm:pt-24">
        <h1 className="font-display text-[clamp(2.5rem,7vw,3.875rem)] leading-[1.04] tracking-[-0.015em]">
          Besides
        </h1>

        <ul className="mt-10">
          {besides.map((thing) => (
            <li
              key={thing}
              className="border-t border-rule py-3 font-prose text-[1.125rem] leading-[1.6] text-prose"
            >
              {thing}
            </li>
          ))}
          <li className="border-t border-rule" />
        </ul>

        <p className="mt-12 text-[16px]">
          <Link href="/">← Back to the letter</Link>
        </p>
      </main>
    </div>
  );
}
