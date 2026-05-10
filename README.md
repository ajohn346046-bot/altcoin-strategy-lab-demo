## Public Demo Notice

This repository is a public demo and marketing preview only.  
The complete Pro source code is not included in this repository.

For the paid Pro source package, please contact:

`ajohn346046@gmail.com`

Purchase link: Coming soon.

# Altcoin Strategy Lab Demo

Public demo package for **Altcoin Strategy Lab**.

This repository is intentionally **not** the complete commercial source code. It is a public-facing landing page that can be deployed to GitHub Pages and used to market the paid Pro source package.

## Disclaimer

Altcoin Strategy Lab Demo is for educational and analytical use only. It is not financial advice and does not guarantee profit.

This demo:

- Does not connect to wallets.
- Does not ask for seed phrases, private keys, passwords, or exchange credentials.
- Does not require exchange login.
- Does not include API keys.
- Does not include private wallet data.
- Does not include real personal financial records.

## Features

- Public landing page for Altcoin Strategy Lab.
- Feature list for the commercial product.
- Strong financial-risk disclaimer.
- Mock screenshot cards with no private data.
- Coming soon purchase call-to-action.
- Pro-version summary for buyers.
- License boundary summary.
- Static Vite build suitable for GitHub Pages.

## Live Demo

After GitHub Pages deployment, the public demo should be available here:

```text
https://ajohn346046-bot.github.io/altcoin-strategy-lab-demo/
```

## Screenshots

This public demo uses generated mock screenshot cards inside the landing page. No real portfolio records, wallet data, exchange data, or personal financial screenshots are included.

## What Buyers Get In Pro Version
The Pro package is delivered as a private ZIP source package after purchase.

The paid Pro source package can include:

- Complete React + TypeScript source code.
- Full portfolio input workflow.
- Full scenario and decision-support engines.
- Technical indicator implementation.
- Data adapters and fallback handling.
- Risk report, trade journal, and narrative scoring internals.
- Reusable component system and customization rights based on the purchased license.

## License Summary

This public repository is a demo and marketing preview only. It is not the full commercial product. Redistribution, resale, extraction of proprietary strategy internals, or representing this demo as the full trading system is not permitted without a separate written license.

Add your final legal license text before public sale.

## Purchase Status

Coming soon.

The paid Pro source package is being prepared for Gumroad / Lemon Squeezy.

Contact: `ajohn346046@gmail.com`

Suggested platforms:

- Gumroad
- Lemon Squeezy
- Stripe Payment Link
- GitHub Sponsors
- Direct business website

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages Deployment

For a GitHub Pages project site, set the base path to your repository name before building.

Example for a repo named `altcoin-strategy-lab-demo`:

```bash
VITE_BASE_PATH=/altcoin-strategy-lab-demo/ npm run build
```

PowerShell:

```powershell
$env:VITE_BASE_PATH="/altcoin-strategy-lab-demo/"
npm run build
```

Deploy the generated `dist` folder with GitHub Pages.

Recommended GitHub Pages settings:

- Source: GitHub Actions
- Build command: `npm run build`
- Output folder: `dist`

This repository also includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

## Cloudflare Pages

Cloudflare Pages settings:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_BASE_PATH=/`

## Security And Privacy

This demo package contains no API keys, private data, wallet data, exchange login code, or real financial records.
