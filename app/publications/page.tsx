import type { Metadata } from "next";
import { publications, siteConfig } from "@/data/portfolio";
import { ExternalLinkIcon, ScholarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications by Khadija Shaheen across AI, distributed monitoring, fault diagnosis, computer vision and continual learning.",
};

export default function PublicationsPage() {
  return (
    <section className="section pageIntroSection">
      <div className="container">
        <div className="pageIntro">
          <p className="eyebrow">Research / Publications</p>
          <h1>Publications.</h1>
          <p>
            Research spanning AI, multimodal learning, distributed sensor systems, fault diagnosis,
            open-world object detection and continual learning.
          </p>
          <div className="sectionAction">
            <a
              className="button buttonSecondary iconButton"
              href={siteConfig.scholar}
              target="_blank"
              rel="noreferrer"
            >
              <ScholarIcon />
              <span>Google Scholar Profile</span>
            </a>
          </div>
        </div>

        <div className="publicationList publicationPageList">
          {publications.map((publication, index) => (
            <article className="publicationRow" key={publication.title}>
              <span className="publicationYear">{String(index + 1).padStart(2, "0")} · {publication.year}</span>
              <div>
                <h2>{publication.title}</h2>
                <p>{publication.venue}</p>
              </div>
              <a
                className="publicationLink"
                href={publication.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${publication.title}`}
              >
                <ExternalLinkIcon />
                <span>View paper</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
