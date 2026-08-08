import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "loogle",
  description:
    "Search Leo Strijbos. Cambridge CS student, founding engineer at Briefcase, and builder of AI tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
