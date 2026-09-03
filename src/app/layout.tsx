import type { Metadata } from "next";
import { Instrument_Serif, Karla, Newsreader } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

export const metadata: Metadata = {
  title: "Leo Strijbos",
  description:
    "Third year computer science at Cambridge. I build infrastructure for AI agents and tooling for computational biology.",
};

// Runs before first paint, so the envelope never flashes in and out. It is
// only shown on a first visit in this tab, and never when the viewer has asked
// for reduced motion. `?open=1` forces it back for a repeat visit, which is how
// you show someone the thing without hunting through devtools.
const showOpen = `try{var f=new URLSearchParams(location.search).get("open")==="1";var seen=sessionStorage.getItem("leo:open")==="1";var still=matchMedia("(prefers-reduced-motion: reduce)").matches;if(!still&&(f||!seen)){document.documentElement.dataset.open="letter"}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // suppressHydrationWarning: the inline script stamps data-open on <html>
  // before React hydrates, which is the whole point of it running early.
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${newsreader.variable} ${karla.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: showOpen }} />
      </head>
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
