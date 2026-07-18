import { Footer } from "@/components/Footer";
import { HomeActions } from "@/components/HomeActions";
import { LoogleLogo } from "@/components/LoogleLogo";
import { SearchBar } from "@/components/SearchBar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#202124]">
      <header className="flex items-center justify-end gap-4 px-5 py-3.5 text-[13px]">
        <a
          href="/search?q=What%20projects%20has%20Leo%20built%3F"
          className="hover:underline"
        >
          Projects
        </a>
        <a href="mailto:ljfs2@cam.ac.uk" className="hover:underline">
          Gmail
        </a>
        <a
          href="https://github.com/Leo-Strijbos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1a73e8] text-[14px] font-medium text-white"
          aria-label="GitHub"
        >
          L
        </a>
      </header>

      <main className="flex flex-1 flex-col items-center px-4 pt-[8vh] sm:pt-[12vh]">
        <LoogleLogo size="hero" href={null} />
        <div className="mt-6 w-full max-w-[584px] sm:mt-7">
          <SearchBar autoFocus={false} />
        </div>
        <HomeActions />
        <p className="mt-8 px-2 text-center text-[13px] text-[#4d5156]">
          Loogle offered in:{" "}
          <a
            href="/search?q=What%20languages%20does%20Leo%20speak%3F"
            className="text-[#1a0dab] hover:underline"
          >
            English
          </a>
          {" · "}
          <a
            href="/search?q=What%20languages%20does%20Leo%20speak%3F"
            className="text-[#1a0dab] hover:underline"
          >
            Nederlands
          </a>
          {" · "}
          <a
            href="/search?q=What%20languages%20does%20Leo%20speak%3F"
            className="text-[#1a0dab] hover:underline"
          >
            Deutsch
          </a>
        </p>
      </main>

      <Footer />
    </div>
  );
}
