# Restrung

A personal tennis string tracking app. Keep track of your rackets, string collection, and stringing history.

## Features

- Manage your racket collection
- Track string jobs per racket — tension, gauge, pattern, duration
- Maintain a personal string catalog
- Mark strings as broken and auto-calculate duration
- Dashboard with recent jobs and personal statistics

## Tech Stack

- **Frontend** — Next.js, TypeScript, Tailwind CSS
- **Backend** — Firebase (Firestore, Authentication)
- **Hosting** — Vercel
- **CI/CD** — GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- A Firebase project with Firestore and Authentication enabled
- A Vercel account (for deployment)

### Installation

1. Clone the repository

```bash
git clone https://github.com/software-de-decker/restrung-web.git
cd restrung-web
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your Firebase project values in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
restrung-web/
├── app/                        # Next.js App Router pages
│   ├── (auth)/                 # Login page
│   └── (dashboard)/            # Protected app pages
│       ├── page.tsx            # Dashboard
│       ├── rackets/            # Racket management
│       └── strings/            # String catalog
├── components/
│   ├── ui/                     # Generic components
│   ├── rackets/                # Racket components
│   └── string-jobs/            # String job components
├── hooks/                      # Firestore data hooks
├── lib/
│   └── firebase/               # Firebase config and helpers
├── models/                     # TypeScript interfaces
└── constants/                  # Shared constants
```

## Development Workflow

Branches:
- `main` — production, deployed to [restrung.seandd.be](https://restrung.seandd.be)
- `dev` — staging, deployed to [dev.restrung.seandd.be](https://dev.restrung.seandd.be)
- `feature/*` — feature branches, PR into `dev`
- `bugfix/*` — bug fix branches, PR into `dev`

All PRs require passing CI checks before merging.

## CI/CD

GitHub Actions runs on every push and PR:

- `lint` — ESLint
- `typecheck` — TypeScript compiler check

Vercel handles deployments automatically:
- Push to `dev` → deploys to staging
- Push to `main` → deploys to production
- Open a PR → generates a preview deployment

## License

Private — all rights reserved.