# Khadija Shaheen — Portfolio

A dark, responsive engineering/research portfolio built with Next.js, React and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Before publishing

1. Open `data/portfolio.ts`.
2. Replace the placeholder LinkedIn and GitHub URLs.
3. Replace `https://your-domain.com` in `siteConfig.url` after you buy/connect a domain.
4. Review the project case studies and remove any wording you do not want to make public.
5. Add DOI/publisher links later if you prefer them over the included Google Scholar searches.

## Build

```bash
npm run typecheck
npm run build
npm start
```

## Deploy

Push this folder to GitHub and import the repository into Vercel. Next.js will be detected automatically.

## CV


## UI features

- Dark/light mode toggle in the header; the selected theme is saved in the browser.
- Reduced section heading sizes for a more compact layout.
- Email, LinkedIn, GitHub and Google Scholar links include icons.
- The hero focus panel uses plain professional labels instead of pseudo-code commands.

## Links to update

Edit `data/portfolio.ts` and replace the LinkedIn, GitHub and domain placeholders. The Google Scholar link currently uses a name search; replace `siteConfig.scholar` with your exact Google Scholar profile URL if you have one.


## Personal-introduction hero

The header intentionally has no KS badge or repeated name. The homepage introduces the profile once with “I am Khadija Shaheen.” followed by “AI & Software Engineer | Researcher”.

## Latest sidebar update
The homepage Current Focus sidebar now emphasizes three concrete areas:
- Current work focuses on AI-enabled monitoring for water distribution systems.
- Research explores LLM-based methods for data imputation.
- Statistical signal processing supports gas pipeline monitoring and fault detection.
- Research-to-engineering work spans software, cloud and data workflows.


## Latest sidebar wording

- AI-enabled monitoring for distributed sensor systems
1. LLMs, RAG and multimodal AI
2. Statistical signal processing, anomaly detection and predictive monitoring
3. Research-to-engineering work across software, cloud and data workflows


## Latest layout update
The homepage now places Experience immediately after the About/intro section. The navbar and scroll-spy order were updated to match: About → Experience → Projects → AI & Research → Publications → Skills → Education → Contact.


## Sidebar typography update
The Current Focus sidebar now uses smaller, regular-weight text throughout, including the heading and AI/LLM/SP/R2E labels.

## Collaboration section
The homepage includes a scroll-aware **Research & Industry Collaborations** section after Speaking & Presentations, with cards for NTNU, Carnegie Mellon University, NUST, TU Wien, SINTEF Energy, SINTEF Digital, and the University of Warsaw.


## Collaboration logos

The collaboration cards now use the organizations' actual logo/wordmark images rather than generic university/organization icons. The logos are loaded from official or Wikimedia-hosted image URLs. If you prefer fully self-contained assets later, download the approved logo files into `public/logos/` and replace the `logo` URLs in `data/portfolio.ts`.

### Collaboration logo refinement
Organization logos are slightly larger within the compact collaboration cards. The logo-area border/outline has been removed for a cleaner presentation while retaining a neutral background for logo legibility in both themes.

## Latest portfolio updates

- Added a scroll-aware **Highlights** section immediately after About.
- Highlights include the August 2026 ReG-Net publication, February 2026 postdoctoral role at NTNU, and December 2025 PhD completion.
- Updated experience dates: Postdoctoral Researcher from February 2026; PhD Researcher & Research Scientist ends December 2025.
- Publication rows now link directly to DOI/publisher or paper pages instead of Google Scholar searches.
- Speaking cards distinguish **Academic** and **Industry** audiences and presentation format (conference, poster, webinar).
