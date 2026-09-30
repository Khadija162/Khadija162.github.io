import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI, machine-learning, software and distributed-systems case studies by Khadija Shaheen.",
};

export default function ProjectsPage() {
  return (
    <section className="section pageIntroSection">
      <div className="container">
        <div className="pageIntro">
          <p className="eyebrow">Projects / Case studies</p>
          <h1>AI, software and research systems.</h1>
          <p>
            Selected work covering agentic AI, machine learning, graph AI, intelligent monitoring, distributed systems and research-oriented software engineering.
          </p>
        </div>
        <div className="projectsPageGrid">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
