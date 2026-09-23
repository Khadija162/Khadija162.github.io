"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { EmailIcon } from "@/components/Icons";
import { siteConfig } from "@/data/portfolio";

type NavItem = {
  label: string;
  href: string;
  sectionId: string;
};

const nav: NavItem[] = [
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Highlights", href: "/#highlights", sectionId: "highlights" },
  { label: "Experience", href: "/#experience", sectionId: "experience" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "AI & Research", href: "/#research", sectionId: "research" },
  { label: "Collaborations", href: "/#collaborations", sectionId: "collaborations" },
  { label: "Publications", href: "/#publications", sectionId: "publications" },
  { label: "Speaking", href: "/#speaking", sectionId: "speaking" },
  { label: "Skills", href: "/#skills", sectionId: "skills" },
  { label: "Education", href: "/#education", sectionId: "education" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

const homeSectionOrder = [
  "about",
  "highlights",
  "experience",
  "projects",
  "research",
  "collaborations",
  "publications",
  "speaking",
  "skills",
  "education",
  "beyond-work",
  "contact",
];

function activeSectionForRoute(pathname: string) {
  if (pathname.startsWith("/projects")) return "projects";
  if (pathname.startsWith("/publications")) return "publications";
  return "";
}

export function SiteHeader() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(activeSectionForRoute(pathname));
      return;
    }

    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const activationLine = 118;
      let current = "";

      for (const id of homeSectionOrder) {
        const section = document.getElementById(id);
        if (!section) continue;

        if (section.getBoundingClientRect().top <= activationLine) {
          current = id;
        } else {
          break;
        }
      }

      // Make sure the final section is selected when the user reaches the page bottom.
      const atPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (atPageBottom && document.getElementById("contact")) {
        current = "contact";
      }

      setActiveSection(current);
    };

    const onScrollOrResize = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", onScrollOrResize);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", onScrollOrResize);
    };
  }, [pathname]);

  const navLink = (item: NavItem, mobile = false) => {
    const isActive = activeSection === item.sectionId;

    return (
      <Link
        key={item.label}
        href={item.href}
        className={`${mobile ? "mobileNavLink" : "navLink"}${isActive ? " activeNavLink" : ""}`}
        aria-current={isActive ? "location" : undefined}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <nav className="desktopNav" aria-label="Primary navigation">
          {nav.map((item) => navLink(item))}
        </nav>

        <div className="headerActions">
          <ThemeToggle />
          <a className="headerEmail" href={`mailto:${siteConfig.email}`} aria-label="Email Khadija Shaheen">
            <EmailIcon />
            <span>Email</span>
          </a>
        </div>

        <details className="mobileMenu">
          <summary aria-label="Open navigation">Menu</summary>
          <div className="mobileMenuPanel">
            {nav.map((item) => navLink(item, true))}
          </div>
        </details>
      </div>
    </header>
  );
}
