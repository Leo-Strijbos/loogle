import Link from "next/link";

import { ExternalLink } from "@/components/ExternalLink";
import { profile } from "@/content/profile";

type SiteNavProps = {
  /** Set on subpages to turn the left-hand name into a way back. */
  back?: boolean;
};

export function SiteNav({ back = false }: SiteNavProps) {
  return (
    <header className="mx-auto flex max-w-[66rem] items-baseline justify-between gap-6 px-6 pt-9 sm:px-8">
      {back ? (
        <Link href="/" className="text-[15px] text-soft no-underline hover:text-ink">
          ← {profile.name}
        </Link>
      ) : (
        <span className="text-[15px] text-soft">{profile.name}</span>
      )}
      <nav className="flex flex-wrap justify-end gap-x-5 gap-y-1 text-[14px]">
        {!back && <Link href="/things">Everything</Link>}
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <ExternalLink href={profile.cv}>CV</ExternalLink>
      </nav>
    </header>
  );
}
