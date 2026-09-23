import Link from "next/link";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`projectCard ${featured ? "projectCardFeatured" : ""}`}>
      <div className={`projectVisual ${project.coverImage ? "projectVisualImage" : ""}`} aria-hidden="true">
        {project.coverImage ? (
          <img src={project.coverImage} alt="" />
        ) : (
          <>
            <div className="visualGrid" />
            <span className="visualNode nodeA" />
            <span className="visualNode nodeB" />
            <span className="visualNode nodeC" />
            <span className="visualLine lineA" />
            <span className="visualLine lineB" />
            <span className="visualLabel">{project.eyebrow}</span>
          </>
        )}
      </div>
      <div className="projectContent">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3><Link className="projectTitleLink" href={`/projects/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.summary}</p>
        <div className="tagRow">
          {project.tags.slice(0, featured ? 5 : 4).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
