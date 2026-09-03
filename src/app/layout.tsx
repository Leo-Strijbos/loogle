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

// Runs before first paint. Two jobs:
//
// 1. Stamps data-js="1" on <html>, which CSS gates the paragraph scroll-reveal
//    on (see .reveal in globals.css). A visitor with JavaScript off, or a
//    crawler, never sees that attribute, so the CSS rule that pre-hides
//    below-the-fold paragraphs never matches — everything just renders
//    plainly visible, which is the correct no-JS fallback for free.
// 2. The envelope open: shown only on a first visit in this tab, and never
//    when the viewer has asked for reduced motion. `?open=1` forces it back
//    for a repeat visit, which is how you show someone the thing without
//    hunting through devtools.
const earlyScript = `try{document.documentElement.dataset.js="1";var f=new URLSearchParams(location.search).get("open")==="1";var seen=sessionStorage.getItem("leo:open")==="1";var reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;if(!reduced&&(f||!seen)){document.documentElement.dataset.open="letter"}}catch(e){}`;

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
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
      </head>
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
