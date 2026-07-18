"use client";

import { useRouter } from "next/navigation";
import { getRandomQuery } from "@/data/queries";

export function HomeActions() {
  const router = useRouter();

  return (
    <div className="mt-7 flex flex-wrap justify-center gap-3">
      <button
        type="button"
        onClick={() => {
          const input = document.querySelector<HTMLInputElement>('input[aria-label="Search"]');
          const q = input?.value.trim();
          if (q) {
            router.push(`/search?q=${encodeURIComponent(q)}`);
          } else {
            router.push(`/search?q=${encodeURIComponent("Who is Leo Strijbos?")}`);
          }
        }}
        className="h-9 rounded border border-transparent bg-[#f8f9fa] px-4 text-[14px] text-[#3c4043] hover:border-[#dadce0] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)]"
      >
        Loogle Search
      </button>
      <button
        type="button"
        onClick={() => {
          const lucky = getRandomQuery();
          router.push(`/search?q=${encodeURIComponent(lucky.question)}`);
        }}
        className="h-9 rounded border border-transparent bg-[#f8f9fa] px-4 text-[14px] text-[#3c4043] hover:border-[#dadce0] hover:shadow-[0_1px_1px_rgba(0,0,0,.1)]"
      >
        I&apos;m Feeling Lucky
      </button>
    </div>
  );
}
