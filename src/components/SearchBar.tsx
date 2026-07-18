"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AutocompleteDropdown } from "./AutocompleteDropdown";
import { CameraIcon, MicIcon, SearchIcon } from "./Icons";
import { filterSuggestions, queries } from "@/data/queries";

type SearchBarProps = {
  initialQuery?: string;
  variant?: "home" | "results";
  autoFocus?: boolean;
};

export function SearchBar({
  initialQuery = "",
  variant = "home",
  autoFocus = false,
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = showAllSuggestions ? queries : filterSuggestions(query);

  useEffect(() => {
    setQuery(initialQuery);
    setShowAllSuggestions(false);
  }, [initialQuery]);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
      setShowAllSuggestions(true);
      setOpen(true);
    }
  }, [autoFocus]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setActiveIndex(-1);
        setShowAllSuggestions(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function navigate(q: string) {
    const trimmed = q.trim();
    if (!trimmed) return;
    setOpen(false);
    setActiveIndex(-1);
    setShowAllSuggestions(false);
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      setShowAllSuggestions(true);
      setOpen(true);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        navigate(suggestions[activeIndex].question);
      } else {
        navigate(query);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
      setShowAllSuggestions(false);
    }
  }

  const rounded = open ? "rounded-t-3xl rounded-b-none" : "rounded-full";

  const widthClass =
    variant === "home" ? "w-full max-w-[584px]" : "w-full min-w-0 max-w-[690px] flex-1";

  return (
    <div ref={containerRef} className={`relative ${widthClass}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (activeIndex >= 0 && suggestions[activeIndex]) {
            navigate(suggestions[activeIndex].question);
          } else {
            navigate(query);
          }
        }}
        className={`flex h-[44px] items-center gap-2 border border-[#dfe1e5] bg-white px-3 shadow-none transition-shadow hover:shadow-[0_1px_6px_rgba(32,33,36,.28)] sm:h-[46px] sm:gap-3 sm:px-4 ${
          open ? "border-[#dfe1e5] shadow-[0_1px_6px_rgba(32,33,36,.28)]" : ""
        } ${rounded}`}
      >
        <SearchIcon className="h-5 w-5 shrink-0 text-[#9aa0a6]" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowAllSuggestions(false);
            setOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => {
            setShowAllSuggestions(true);
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          className="h-full min-w-0 w-full bg-transparent text-[16px] text-[#202124] outline-none"
          aria-label="Search"
          autoComplete="off"
          role="combobox"
          aria-expanded={open}
          aria-controls="loogle-autocomplete"
          aria-autocomplete="list"
        />
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <button type="button" tabIndex={-1} aria-label="Voice search" className="opacity-80">
            <MicIcon />
          </button>
          <button type="button" tabIndex={-1} aria-label="Search by image" className="opacity-80">
            <CameraIcon />
          </button>
        </div>
      </form>

      {open && (
        <div id="loogle-autocomplete">
          <AutocompleteDropdown
            suggestions={suggestions}
            activeIndex={activeIndex}
            onSelect={navigate}
          />
        </div>
      )}
    </div>
  );
}
