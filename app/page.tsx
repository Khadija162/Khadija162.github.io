import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  CameraIcon,
  CompassIcon,
  CookingIcon,
  CupIcon,
  EmailIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  MusicIcon,
  ScholarIcon,
} from "@/components/Icons";
import {
  certifications,
  collaborations,
  education,
  experiences,
  highlights,
  projects,
  publications,
  presentations,
  recognition,
  researchAreas,
  siteConfig,
  skills,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <section className="hero section" id="about">
        <div className="container heroGrid heroGridWithSidebar">
          <div className="heroCopy heroCopyFull">
            <h1 className="heroStatement">
              Hey! I&apos;m <span className="accent">Khadija Shaheen,</span>
            </h1>
            <p className="heroAbout heroAboutFull">
              an AI &amp; Software Engineer and Researcher based in Norway, currently working as a Postdoctoral Researcher at NTNU. I completed my PhD in Signal Processing and Machine Learning at NTNU, with research spanning statistical signal processing, graph neural networks, large language models, distributed sensing, anomaly detection and intelligent monitoring. My work combines artificial intelligence, software engineering, cloud and data engineering to turn research ideas into reliable, scalable systems for prediction, monitoring and decision support.
            </p>
            <div className="socialRow" aria-label="Professional links">
              <a className="iconLink" href={`mailto:${siteConfig.email}`}><EmailIcon /><span>Email</span></a>
              <a className="iconLink" href={siteConfig.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /><span>LinkedIn</span></a>
              <a className="iconLink" href={siteConfig.github} target="_blank" rel="noreferrer"><GitHubIcon /><span>GitHub</span></a>
              <a className="iconLink" href={siteConfig.scholar} target="_blank" rel="noreferrer"><ScholarIcon /><span>Google Scholar</span></a>
            </div>
          </div>

          <aside className="focusSidebar" aria-label="Current focus">
            <div className="focusSidebarHeading">
              <span className="focusHeadingIcon" aria-hidden="true">◷</span>
              <span>September 2026 · Current focus</span>
            </div>
            <div className="focusPlainList">
              <p><span className="focusPrefix">AI</span><span>AI-enabled monitoring for distributed sensor systems</span></p>
              <p><span className="focusPrefix">LLM</span><span>LLMs, RAG and multimodal AI</span></p>
              <p><span className="focusPrefix">SP</span><span>Statistical signal processing, anomaly detection and predictive monitoring</span></p>
              <p><span className="focusPrefix">R2E</span><span>Research-to-engineering work across software, cloud and data workflows</span></p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section sectionAlt highlightsSection" id="highlights">
        <div className="container">
          <div className="highlightsIntro">
            <SectionHeading
              eyebrow="News · Highlights"
              title="Recent highlights."
              copy="A short timeline of recent research and career milestones."
            />
          </div>
          <div className="highlightsList">
            {highlights.map((item) => (
              <article className="highlightItem" key={`${item.date}-${item.title}`}>
                <p className="highlightDate">{item.date}</p>
                <div className="highlightBody">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.link ? (
                    <a className="highlightLink" href={item.link} target="_blank" rel="noreferrer">
                      View paper <ExternalLinkIcon />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <SectionHeading eyebrow="Experience" title="AI, software and distributed systems." />
          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timelineItem" key={experience.period + experience.organization}>
                <div className="timelineMeta">
                  <p className="eyebrow">{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
                <div className="timelineBody">
                  <h3>{experience.role}</h3>
                  <p className="organization">{experience.organization}</p>
                  <p>{experience.text}</p>
                  <div className="tagRow">
                    {experience.focus.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section sectionAlt" id="projects">
        <div className="container">
          <SectionHeading
            eyebrow="Selected projects"
            title="AI research and engineering for real technical systems."
            copy="Case studies focused on agentic AI, machine learning, LLMs, intelligent monitoring, distributed systems and reliable software architecture."
          />
          <div className="featuredProjectWrap">
            <ProjectCard project={projects[0]} featured />
          </div>
          <div className="projectGrid">
            {projects.slice(1, 5).map((project) => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="sectionAction"><Link className="button buttonSecondary" href="/projects">View all projects</Link></div>
        </div>
      </section>

      <section className="section" id="research">
        <div className="container researchLayout">
          <SectionHeading
            eyebrow="Research"
            title="From graph learning and LLMs to intelligent monitoring."
            copy="Research themes spanning generative AI, graph machine learning, distributed sensing and reliability-oriented intelligent systems."
          />
          <div className="researchGrid">
            {researchAreas.map((area) => (
              <article className="researchCard" key={area.number}>
                <span className="researchNumber">{area.number}</span>
                <h3>{area.title}</h3>
                <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section collaborationsSection" id="collaborations">
        <div className="container">
          <div className="collaborationsIntro">
            <SectionHeading
              eyebrow="Collaborations"
              title="Research & industry collaborations."
              copy="Work shaped by partnerships across academic and industrial research environments."
            />
          </div>
          <div className="collaborationsGrid">
            {collaborations.map((item) => (
              <article className="collaborationCard" key={item.name}>
                <div className="collaborationLogo">
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionAlt" id="publications">
        <div className="container">
          <SectionHeading eyebrow="Publications" title="Published work across AI, distributed sensing and intelligent systems." />
          <div className="publicationList">
            {publications.map((publication) => (
              <article className="publicationRow" key={publication.title}>
                <span className="publicationYear">{publication.year}</span>
                <div>
                  <h3>{publication.title}</h3>
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
          <div className="sectionAction"><Link className="button buttonSecondary" href="/publications">View publications page</Link></div>
        </div>
      </section>

      <section className="section" id="speaking">
        <div className="container">
          <div className="speakingIntro">
            <SectionHeading
              eyebrow="Speaking & presentations"
              title="Research presented to academic and industrial audiences."
              copy="Conference presentations, poster sessions and industry-facing webinars translating technical research into clear engineering insight."
            />
          </div>
          <div className="speakingGrid">
            {presentations.map((item) => (
              <article className="speakingCard" key={`${item.year}-${item.title}`}>
                <div className="speakingCardTop">
                  <span className="speakingYear">{item.year}</span>
                  <div className="speakingMetaBadges">
                    <span className={`speakingAudience speakingAudience${item.audience}`}>{item.audience}</span>
                    <span className="speakingType">{item.type}</span>
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p className="speakingVenue">{item.venue}</p>
                <p className="speakingAuthors">{item.authors}</p>
                <p className="speakingDescription">{item.description}</p>
                <div className="speakingTags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {item.link ? (
                  <a className="speakingLink" href={item.link} target="_blank" rel="noreferrer">
                    View publication ↗
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section sectionAlt" id="skills">
        <div className="container">
          <SectionHeading eyebrow="Technical skills" title="An AI-first engineering stack, organized by what it is used for." />
          <div className="skillsGrid">
            {skills.map((group) => (
              <article className="skillGroup" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skillList">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container educationGrid">
          <div>
            <SectionHeading eyebrow="Education" title="Research foundations." />
            <div className="educationList">
              {education.map((item) => (
                <article key={item.period + item.school} className="educationItem">
                  <p className="eyebrow">{item.period}</p>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <small>{item.location}</small>
                </article>
              ))}
            </div>
          </div>

          <aside className="recognitionPanel">
            <p className="eyebrow">Recognition</p>
            <h2>Awards & certifications</h2>
            <div className="recognitionList">
              {recognition.map((item) => (
                <div key={item.title}><strong>{item.title}</strong><span>{item.detail}</span></div>
              ))}
            </div>
            <div className="certList">
              <p className="eyebrow">Certifications</p>
              {certifications.map((item) => <p key={item}>{item}</p>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="section sectionAlt beyondWorkSection" id="beyond-work">
        <div className="container beyondWorkLayout">
          <div className="beyondWorkIntro">
            <p className="eyebrow">Beyond work</p>
            <h2>Outside AI and research.</h2>
          </div>
          <div className="beyondWorkCopy">
            <p>
              Away from models, papers and engineering systems, I enjoy simple ways to reset, stay curious and explore new perspectives.
            </p>
          </div>
          <div className="hobbyPills" aria-label="Interests outside work">
            <span><CompassIcon />Travel &amp; exploration</span>
            <span><CameraIcon />Photography</span>
            <span><MusicIcon />Music</span>
            <span><CookingIcon />Cooking</span>
            <span><CupIcon />Quiet café &amp; chai time</span>
          </div>
        </div>
      </section>

      <section className="section contactSection" id="contact">
        <div className="container contactCta">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Let&apos;s connect around AI, engineering &amp; research.</h2>
          <p className="contactLead">
            Open to AI engineering and applied research roles, as well as collaborations spanning machine learning, LLMs, intelligent monitoring, cloud and data-driven systems.
          </p>
          <div className="contactActions">
            <a className="button iconButton contactEmailButton" href={`mailto:${siteConfig.email}`}>
              <EmailIcon />
              <span>{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
