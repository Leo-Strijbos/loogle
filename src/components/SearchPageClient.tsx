"use client";

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { LoogleLogo } from "@/components/LoogleLogo";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/SearchResults";
import { findQuery } from "@/data/queries";

export function SearchPageClient({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    function onPopState() {
      const q = new URLSearchParams(window.location.search).get("q") ?? "";
      setQuery(q);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  function navigate(q: string) {
    const trimmed = q.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    const url = `/search?q=${encodeURIComponent(trimmed)}`;
    window.history.pushState(null, "", url);
  }

  const match = query ? findQuery(query) : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#202124]">
      <header className="border-b border-[#ebebeb]">
        <div className="flex items-center gap-3 px-3 py-3 sm:gap-6 sm:px-6 sm:py-5">
          <div className="shrink-0">
            <LoogleLogo size="header" />
          </div>
          <SearchBar
            initialQuery={query}
            variant="results"
            onNavigate={navigate}
          />
        </div>
        <nav className="flex gap-5 overflow-x-auto px-3 text-[13px] text-[#5f6368] [-ms-overflow-style:none] [scrollbar-width:none] sm:ml-[152px] sm:px-0 [&::-webkit-scrollbar]:hidden">
          <span className="shrink-0 border-b-[3px] border-[#1a73e8] pb-2 font-medium text-[#1a73e8]">
            All
          </span>
          <span className="shrink-0 pb-2">Images</span>
          <span className="shrink-0 pb-2">News</span>
          <span className="shrink-0 pb-2">Videos</span>
          <span className="shrink-0 pb-2">Maps</span>
          <span className="shrink-0 pb-2">More</span>
        </nav>
      </header>

      <main className="flex-1">
        {query ? (
          <SearchResults query={query} match={match} onNavigate={navigate} />
        ) : (
          <div className="mx-auto w-full max-w-[652px] px-4 pt-8 pb-16 sm:px-5 lg:ml-[152px] lg:px-0">
            <p className="text-[16px] text-[#4d5156]">
              Type a search, or pick one of the suggestions.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
