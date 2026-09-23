import { siteConfig } from "@/data/portfolio";
import { EmailIcon, GitHubIcon, LinkedInIcon, ScholarIcon } from "@/components/Icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <p className="footerName">{siteConfig.name}</p>
          <p>{siteConfig.title}</p>
          <p className="muted">{siteConfig.specialties}</p>
        </div>
        <div className="footerLinks">
          <a className="iconLink" href={`mailto:${siteConfig.email}`}><EmailIcon /><span>Email</span></a>
          <a className="iconLink" href={siteConfig.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /><span>LinkedIn</span></a>
          <a className="iconLink" href={siteConfig.github} target="_blank" rel="noreferrer"><GitHubIcon /><span>GitHub</span></a>
          <a className="iconLink" href={siteConfig.scholar} target="_blank" rel="noreferrer"><ScholarIcon /><span>Scholar</span></a>
        </div>
        <p className="footerCopyright">© {new Date().getFullYear()} Khadija Shaheen</p>
      </div>
    </footer>
  );
}
