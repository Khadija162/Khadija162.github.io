# GitHub Pages deployment

This portfolio is configured for a GitHub user site at:

https://Khadija162.github.io

Use a public GitHub repository named exactly:

Khadija162.github.io

## First deployment

1. Install Node.js LTS and Git.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and check http://localhost:3000.
5. Run `npm run build`. A static `out` folder should be created.
6. Create the public GitHub repository `Khadija162.github.io`.
7. Push this project to the repository's `main` branch.
8. On GitHub, open Settings -> Pages -> Build and deployment -> Source -> GitHub Actions.
9. Open the Actions tab and wait for `Deploy portfolio to GitHub Pages` to finish.
10. Visit https://Khadija162.github.io.

## Updating the site

Edit locally, check with `npm run dev`, then run:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Every push to `main` automatically rebuilds and redeploys the site.
