import Link from "next/link";
import type { QueryEntry } from "@/data/queries";
import { findClosestQueries, queries } from "@/data/queries";
import { KnowledgePanel } from "./KnowledgePanel";

function displayUrl(url: string) {
  try {
    const u = new URL(url);
    if (u.protocol === "mailto:" || u.protocol === "tel:") {
      return <span className="break-all text-[14px] text-[#202124]">{url}</span>;
    }
    const parts = u.pathname.split("/").filter(Boolean);
    return (
      <span className="flex flex-wrap items-center gap-1 text-[13px] text-[#202124] sm:text-[14px]">
        <span className="text-[#202124]">{u.hostname}</span>
        {parts.map((part) => (
          <span key={part} className="flex items-center gap-1 text-[#5f6368]">
            <span>›</span>
            <span className="break-all">{decodeURIComponent(part)}</span>
          </span>
        ))}
      </span>
    );
  } catch {
    return <span className="break-all text-[14px] text-[#202124]">{url}</span>;
  }
}

export function SearchResults({
  query,
  match,
  onNavigate,
}: {
  query: string;
  match?: QueryEntry;
  onNavigate?: (q: string) => void;
}) {
  if (!match) {
    const closest = findClosestQueries(query, 3);
    const didYouMean = closest.length > 0 ? closest : queries;
    return (
      <div className="mx-auto w-full max-w-[652px] px-4 pt-2 pb-16 sm:px-5 lg:ml-[152px] lg:mr-auto lg:px-0">
        <p className="mb-6 text-[14px] text-[#70757a]">
          About 0 results (0.02 seconds)
        </p>
        <p className="text-[18px] text-[#202124] sm:text-[20px]">
          No results found for <span className="font-medium">&quot;{query}&quot;</span>
        </p>
        <p className="mt-2 text-[14px] text-[#4d5156]">Did you mean:</p>
        <ul className="mt-3 space-y-2">
          {didYouMean.map((q) => (
            <li key={q.id}>
              {onNavigate ? (
                <button
                  type="button"
                  onClick={() => onNavigate(q.question)}
                  className="text-left text-[16px] text-[#1a0dab] hover:underline"
                >
                  {q.question}
                </button>
              ) : (
                <Link
                  href={`/search?q=${encodeURIComponent(q.question)}`}
                  className="text-[16px] text-[#1a0dab] hover:underline"
                >
                  {q.question}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const seconds = (0.03 + (match.id.length % 7) / 100).toFixed(2);

  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-6 px-4 pt-2 pb-16 sm:gap-8 sm:px-5 lg:ml-[152px] lg:mr-auto lg:flex-row lg:px-0">
      <div className="min-w-0 flex-1 lg:max-w-[652px]">
        <p className="mb-5 text-[13px] text-[#70757a] sm:text-[14px]">
          About {match.results.length} result{match.results.length === 1 ? "" : "s"} (
          {seconds} seconds)
        </p>
        <div className="space-y-6 sm:space-y-7">
          {match.results.map((result) => {
            const href = result.href;
            const external =
              !!href &&
              (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel"));
            return (
              <article key={result.title + result.url} className="min-w-0">
                <div className="mb-1">{displayUrl(result.url)}</div>
                {href && external ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-[18px] leading-snug text-[#1a0dab] hover:underline sm:text-[20px]"
                  >
                    {result.title}
                  </a>
                ) : href ? (
                  <Link
                    href={href}
                    className="text-[18px] leading-snug text-[#1a0dab] hover:underline sm:text-[20px]"
                  >
                    {result.title}
                  </Link>
                ) : (
                  <h3 className="text-[18px] leading-snug text-[#1a0dab] sm:text-[20px]">
                    {result.title}
                  </h3>
                )}
                <p className="mt-1 text-[14px] leading-[1.58] text-[#4d5156]">
                  {result.snippet}
                </p>
              </article>
            );
          })}
        </div>
      </div>
      {match.knowledgePanel && (
        <div className="w-full lg:max-w-[368px] lg:pt-8">
          <KnowledgePanel panel={match.knowledgePanel} />
        </div>
      )}
    </div>
  );
}
