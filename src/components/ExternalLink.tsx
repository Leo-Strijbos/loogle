import type { AnchorHTMLAttributes } from "react";

/**
 * Anything that takes the visitor off the letter — GitHub, a PDF, a writeup —
 * opens in a new tab so the site itself is never lost from under them. Not
 * for `mailto:`, which hands off to a mail client rather than a page.
 */
export function ExternalLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
