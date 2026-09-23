import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/portfolio";

export const metadata: Metadata = {
  title: {
    default: "Khadija Shaheen — AI & Software Engineer | Researcher",
    template: "%s | Khadija Shaheen",
  },
  description:
    "AI & Software Engineer and researcher working across machine learning, LLMs, intelligent systems, cloud, data engineering and distributed software.",
  keywords: [
    "AI Engineer",
    "Artificial Intelligence",
    "Machine Learning",
    "LLM",
    "RAG",
    "Software Engineer",
    "Cloud",
    "Data Engineering",
    "Distributed Systems",
    "Researcher",
  ],
  authors: [{ name: siteConfig.name }],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var saved=localStorage.getItem('portfolio-theme');var theme=saved||'dark';document.documentElement.dataset.theme=theme;}catch(e){document.documentElement.dataset.theme='dark';}})();`,
          }}
        />
      </head>
      <body>
        <div className="pageGlow" aria-hidden="true" />
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
