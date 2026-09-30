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
  const isCodingAgent = project.slug === "autonomous-coding-agent-github-issue-resolution";

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
          ) : isCodingAgent ? (
            <div className="caseSection">
              <p className="caseNumber">02 — Agent workflow</p>
              <h2>A closed-loop software-engineering agent.</h2>
              <p className="largeCopy">
                The system is designed to behave like an AI software engineer rather than a one-shot code generator. It starts from a GitHub issue or development task, builds an understanding of the repository, retrieves the most relevant source context, creates an implementation plan, edits one or more files, and then validates the proposed change through execution.
              </p>
              <p className="largeCopy">
                Validation feedback is part of the reasoning loop. Test failures, compiler errors, runtime exceptions, lint findings and type-checking results are fed back into the agent state so it can diagnose what went wrong, revise the plan and apply another patch. The task completes only after the configured validation criteria are satisfied or the execution budget is exhausted.
              </p>

              <figure className="codingAgentFigure" aria-labelledby="coding-agent-caption">
                <div className="codingAgentWorkflow">
                  {[
                    ["01", "Issue / task", "Bug · feature · refactor · test failure"],
                    ["02", "Repository analysis", "Structure · dependencies · symbols"],
                    ["03", "Context retrieval", "Relevant files · functions · code"],
                    ["04", "Implementation plan", "Task decomposition · edit strategy"],
                    ["05", "Code modification", "Multi-file patch · generated tests"],
                    ["06", "Validation", "Tests · lint · types · static analysis"],
                    ["07", "Failure analysis", "Observe · diagnose · re-plan"],
                    ["08", "Final solution", "Validated diff · summary · trace"],
                  ].map(([number, title, detail]) => (
                    <div className="codingAgentStep" key={number}>
                      <span>{number}</span>
                      <strong>{title}</strong>
                      <small>{detail}</small>
                    </div>
                  ))}
                </div>
                <figcaption id="coding-agent-caption">
                  Iterative execution loop: generated code is treated as a candidate solution and must be validated against the repository environment before the task is considered complete.
                </figcaption>
              </figure>

              <div className="codingAgentStack" aria-label="Autonomous coding agent technology stack">
                <article>
                  <span>Agent core</span>
                  <strong>Python · FastAPI · Pydantic</strong>
                  <p>State-machine orchestration with structured plans, tool calls, decisions and validation results.</p>
                </article>
                <article>
                  <span>Code intelligence</span>
                  <strong>Tree-sitter / AST · semantic retrieval</strong>
                  <p>Selective repository context using syntax, symbols, dependencies, structure and vector-based retrieval.</p>
                </article>
                <article>
                  <span>Execution & quality</span>
                  <strong>Git · GitHub APIs · Docker · test tooling</strong>
                  <p>Sandboxed edits and commands validated with Pytest, Ruff / ESLint, MyPy and TypeScript compiler workflows.</p>
                </article>
                <article>
                  <span>State & observability</span>
                  <strong>PostgreSQL / SQLite · execution traces</strong>
                  <p>Persistent task history and OpenTelemetry / LangSmith-style tracing for debugging multi-step runs.</p>
                </article>
              </div>
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
              <p className="caseNumber">03 — {isWaterMonitoring ? "Research scope" : isGasMonitoring ? "Monitoring strategy" : isCodingAgent ? "Agent architecture" : "Approach"}</p>
              <h2>{isWaterMonitoring ? "What the work explores" : isGasMonitoring ? "How the research fits together" : isCodingAgent ? "How the system is engineered" : "Technical approach"}</h2>
              <ul className="caseList">{project.approach.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="caseSection">
              <p className="caseNumber">04 — Contribution</p>
              <h2>My contribution</h2>
              <ul className="caseList">{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>

          {isCodingAgent ? (
            <>
              <div className="caseSection">
                <p className="caseNumber">05 — Reliability & safety</p>
                <h2>Bounded execution for an agent that can change code.</h2>
                <p className="largeCopy">
                  Autonomous coding becomes a systems problem as soon as the model can execute commands and modify files. The project therefore places the agent behind explicit execution boundaries instead of giving it unrestricted access to the host environment.
                </p>
                <div className="codingAgentGuardrails">
                  <article>
                    <span>Sandbox</span>
                    <strong>Isolated execution</strong>
                    <p>Commands run inside Docker containers with restricted filesystem access rather than directly on the host.</p>
                  </article>
                  <article>
                    <span>Policy</span>
                    <strong>Controlled tools</strong>
                    <p>Repository operations are exposed through defined tools, permissions and policy checks so dangerous commands can be blocked.</p>
                  </article>
                  <article>
                    <span>Budget</span>
                    <strong>Bounded autonomy</strong>
                    <p>Token, tool-call and iteration budgets limit runaway execution and make task cost and behavior easier to reason about.</p>
                  </article>
                  <article>
                    <span>Approval</span>
                    <strong>Human escalation</strong>
                    <p>Sensitive actions or unusually large changes can stop at an approval point before the agent is allowed to continue.</p>
                  </article>
                </div>
              </div>

              <div className="caseSection">
                <p className="caseNumber">06 — Evaluation framework</p>
                <h2>Measure whether the agent actually solves engineering tasks.</h2>
                <p className="largeCopy">
                  The evaluation pipeline covers bug fixes, small features, failing-test repair, refactoring, missing tests, type errors, API behavior and edge cases. It also supports controlled comparisons between single-pass generation, planning, planning with execution feedback and iterative self-correction.
                </p>
                <div className="codingAgentMetrics" aria-label="Coding-agent evaluation metrics">
                  {[
                    "Solved-task rate",
                    "Post-change test pass rate",
                    "Regression rate",
                    "Agent iterations",
                    "Tool calls per task",
                    "Execution time",
                    "Token usage / estimated cost",
                    "Patch size / change efficiency",
                    "Patches accepted without manual edits",
                  ].map((metric) => <span key={metric}>{metric}</span>)}
                </div>
              </div>
            </>
          ) : null}

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
              <p className="caseNumber">{isCodingAgent ? "07 — Outcome" : project.paperVisuals?.length ? "06 — Outcome" : isWaterMonitoring ? "05 — Public project scope" : "05 — Outcome"}</p>
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
