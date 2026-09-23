import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SystemDiagram } from "@/components/SystemDiagram";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project" };
  return { title: project.shortTitle, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const isRegNet = project.slug === "rag-net-multimodal-recovery";
  const isWaterMonitoring = project.slug === "water-distribution-ai-monitoring";
  const isGasMonitoring = project.slug === "gas-pipeline-distributed-monitoring";

  return (
    <article className="projectDetail">
      <header className="section projectHero">
        <div className="container narrow">
          <Link className="backLink" href="/projects">← All projects</Link>
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.title}</h1>
          <p className="projectLead">{project.summary}</p>
          <div className="tagRow largeTags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          {project.githubUrl || project.relatedPublicationLink ? (
            <div className="projectLinkRow">
              {project.githubUrl ? (
                <a className="button buttonSecondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  View GitHub repository ↗
                </a>
              ) : null}
              {project.relatedPublicationLink ? (
                <a className="textLink" href={project.relatedPublicationLink} target="_blank" rel="noreferrer">
                  Read primary publication ↗
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </header>

      <section className="section sectionAlt">
        <div className="container narrow projectSections">
          <div className="caseSection">
            <p className="caseNumber">01 — Challenge</p>
            <h2>Engineering problem</h2>
            <p className="largeCopy">{project.challenge}</p>
          </div>

          {isRegNet ? (
            <div className="caseSection">
              <p className="caseNumber">02 — HIAD 2.1 dataset</p>
              <h2>Hydrogen Incidents and Accidents Database (HIAD) 2.1</h2>
              <p className="largeCopy">
                Selected table and figures from the paper show the problem setting, the architecture, robustness across missingness mechanisms, and generalization across benchmark datasets.
              </p>
              <p className="largeCopy">
                HIAD 2.1 contains heterogeneous hydrogen-safety incident records with numerical measurements, categorical descriptors and free-text narratives. Because these fields can be partially missing, ReG-Net is designed to recover information by using relationships within and across modalities.
              </p>
            </div>
          ) : isWaterMonitoring ? (
            <div className="caseSection">
              <p className="caseNumber">02 — Project overview</p>
              <h2>AI-enabled monitoring and surrogate modelling for water infrastructure.</h2>
              <p className="largeCopy">
                Water distribution systems (WDSs) rely on pressure and flow information for monitoring, operation, planning and decision support. This research explores how artificial intelligence (AI) can complement conventional hydraulic simulation with faster data-driven analysis, while keeping the focus on engineering reliability and practical monitoring needs.
              </p>
              <p className="largeCopy">
                A key part of the work is surrogate modelling: learning a computationally efficient approximation of hydraulic behaviour so pressure and flow states can be estimated across changing operating conditions. The broader monitoring scope also includes anomaly and leak awareness, predictive analysis, measurement uncertainty and limited sensor coverage.
              </p>

              <figure className="waterOverviewFigure" aria-labelledby="water-overview-caption">
                <div className="waterOverviewFlow">
                  <div className="waterOverviewNode">
                    <span>01</span>
                    <strong>Water network</strong>
                    <small>Topology · demand · operating conditions</small>
                  </div>
                  <div className="waterOverviewArrow" aria-hidden="true">→</div>
                  <div className="waterOverviewNode">
                    <span>02</span>
                    <strong>Sensor & system data</strong>
                    <small>Pressure · flow · measurements</small>
                  </div>
                  <div className="waterOverviewArrow" aria-hidden="true">→</div>
                  <div className="waterOverviewNode waterOverviewNodeAccent">
                    <span>03</span>
                    <strong>AI surrogate modelling</strong>
                    <small>Fast hydraulic-state approximation</small>
                  </div>
                  <div className="waterOverviewArrow" aria-hidden="true">→</div>
                  <div className="waterOverviewNode">
                    <span>04</span>
                    <strong>Monitoring & decisions</strong>
                    <small>State awareness · anomalies · leaks</small>
                  </div>
                </div>
                <figcaption id="water-overview-caption">
                  High-level research view only. The unpublished model architecture, training procedure and implementation details are intentionally omitted.
                </figcaption>
              </figure>

              <p className="largeCopy">
                The public GitHub repository is the reference for code, experiments and materials that are intended for release.
              </p>
              {project.githubUrl ? (
                <a className="button buttonSecondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  Explore the public GitHub repository ↗
                </a>
              ) : null}
            </div>
          ) : isGasMonitoring ? (
            <div className="caseSection">
              <p className="caseNumber">02 — Research program</p>
              <h2>From distributed sensor validation to intelligent pipeline diagnostics.</h2>
              <p className="largeCopy">
                The project studies the complete monitoring chain around distributed pressure, flow and temperature sensors in gas-pipeline infrastructure. Under transient operation, the physical process is nonlinear and time-varying, while sensor faults can look similar to genuine operating changes. Reliable monitoring therefore requires both trustworthy state estimation and explicit mechanisms for identifying unreliable measurements. In this context, fault diagnosis means detecting that a fault has occurred, isolating the affected sensor, and accommodating the corrupted information so monitoring can continue with a reliable system-state estimate.
              </p>
              <p className="largeCopy">
                Across the research program, the monitoring architecture evolves from model-based distributed data fusion to partial-distributed processing that reduces repeated nonlinear computation, then to hybrid model/data-driven diagnosis and AI-based anomaly detection for compressor and system-level faults. The same research direction is also evaluated for hydrogen-blended natural gas and related pipeline-monitoring scenarios.
              </p>

              <figure className="gasOverviewFigure" aria-labelledby="gas-overview-caption">
                <div className="gasOverviewFlow">
                  <div className="gasOverviewNode">
                    <span>01</span>
                    <strong>Distributed sensing</strong>
                    <small>Pressure · flow · temperature</small>
                  </div>
                  <div className="gasOverviewArrow" aria-hidden="true">→</div>
                  <div className="gasOverviewNode">
                    <span>02</span>
                    <strong>State estimation & fusion</strong>
                    <small>Local processing · shared system state</small>
                  </div>
                  <div className="gasOverviewArrow" aria-hidden="true">→</div>
                  <div className="gasOverviewNode gasOverviewNodeAccent">
                    <span>03</span>
                    <strong>Fault diagnosis</strong>
                    <small>Detection · isolation · accommodation</small>
                  </div>
                  <div className="gasOverviewArrow" aria-hidden="true">→</div>
                  <div className="gasOverviewNode">
                    <span>04</span>
                    <strong>Intelligent monitoring</strong>
                    <small>Anomalies · condition awareness · decisions</small>
                  </div>
                </div>
                <figcaption id="gas-overview-caption">
                  High-level view of the research program. Detailed architectures and evaluations are shown below using selected figures from the published papers.
                </figcaption>
              </figure>
            </div>
          ) : (
            <div className="caseSection">
              <p className="caseNumber">02 — System view</p>
              <h2>A modular path from data to decisions.</h2>
              <SystemDiagram />
              <p className="diagramNote">Conceptual portfolio visualization; adapt it to the exact architecture you are comfortable making public.</p>
            </div>
          )}

          <div className="caseSplit">
            <div className="caseSection">
              <p className="caseNumber">03 — {isWaterMonitoring ? "Research scope" : isGasMonitoring ? "Monitoring strategy" : "Approach"}</p>
              <h2>{isWaterMonitoring ? "What the work explores" : isGasMonitoring ? "How the research fits together" : "Technical approach"}</h2>
              <ul className="caseList">{project.approach.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="caseSection">
              <p className="caseNumber">04 — Contribution</p>
              <h2>My contribution</h2>
              <ul className="caseList">{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>

          {project.paperVisuals?.length ? (
            <div className="caseSection paperVisualSection">
              <p className="caseNumber">05 — Paper visuals</p>
              <h2>{isRegNet ? "Inside the ReG-Net paper" : isGasMonitoring ? "Selected figures from the gas-pipeline research" : "Research visuals"}</h2>
              <div className="paperVisualGrid">
                {project.paperVisuals.map((visual) => (
                  <figure className="paperVisualCard" key={visual.label}>
                    <div className="paperImageWrap">
                      <img src={visual.src} alt={visual.alt} loading="lazy" />
                    </div>
                    <figcaption>
                      <span className="paperFigureLabel">{visual.label}</span>
                      <h3>{visual.title}</h3>
                      <p>{visual.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}

          {!isRegNet ? (
            <div className="caseSection resultPanel">
              <p className="caseNumber">{project.paperVisuals?.length ? "06 — Outcome" : isWaterMonitoring ? "05 — Public project scope" : "05 — Outcome"}</p>
              <h2>{isWaterMonitoring ? "Ongoing research" : isGasMonitoring ? "Research outcomes" : "Result"}</h2>
              <p className="largeCopy">{project.outcome}</p>
              {project.relatedPublication && project.relatedPublicationLink ? (
                <a
                  className="button buttonSecondary"
                  href={project.relatedPublicationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View primary publication ↗
                </a>
              ) : null}

              {project.relatedPublications?.length ? (
                <div className="projectPublicationList">
                  <p className="projectPublicationHeading">Selected publications from this research program</p>
                  {project.relatedPublications.map((publication) => (
                    <a
                      className="projectPublicationItem"
                      href={publication.href}
                      target="_blank"
                      rel="noreferrer"
                      key={publication.href}
                    >
                      <span>
                        <strong>{publication.title}</strong>
                        <small>{publication.venue}</small>
                      </span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          <div className="caseNav">
            <Link className="button" href="/projects">Back to projects</Link>
            <Link className="textLink" href="/#contact">Contact me ↗</Link>
          </div>
        </div>
      </section>
    </article>
  );
}
