"use client";

import { SearchIcon } from "./Icons";
import type { QueryEntry } from "@/data/queries";

type AutocompleteDropdownProps = {
  suggestions: QueryEntry[];
  onSelect: (question: string) => void;
  activeIndex: number;
};

export function AutocompleteDropdown({
  suggestions,
  onSelect,
  activeIndex,
}: AutocompleteDropdownProps) {
  if (suggestions.length === 0) return null;

  return (
    <ul
      className="absolute left-0 right-0 top-full z-30 mt-[-1px] max-h-[min(60vh,420px)] overflow-y-auto overscroll-contain rounded-b-3xl border border-t-0 border-[#dfe1e5] bg-white pb-2 shadow-[0_4px_6px_rgba(32,33,36,.28)]"
      role="listbox"
    >
      <div className="mx-4 border-t border-[#e8eaed]" />
      {suggestions.map((suggestion, index) => (
        <li key={suggestion.id} role="option" aria-selected={index === activeIndex}>
          <button
            type="button"
            className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-[15px] text-[#202124] sm:px-4 sm:text-[16px] ${
              index === activeIndex ? "bg-[#eee]" : "hover:bg-[#eee]"
            }`}
            onMouseDown={(e) => {
              e.preventDefault();
              onSelect(suggestion.question);
            }}
          >
            <SearchIcon className="h-[18px] w-[18px] shrink-0 text-[#9aa0a6]" />
            <span className="min-w-0 break-words">{suggestion.question}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
