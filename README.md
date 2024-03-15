## Installation

To run the application locally, follow these steps:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/samuelkurdz/pokemon-showcase.git
```

2. Navigate to the project directory:

```bash
cd pokemon-showcase
```

3. Install dependencies:

```bash
npm install
```

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit and saves the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Technology Stack

The application is built upon React.js, Next.js.
Axios will be used to make HTTP requests to the PokeAPI endpoints.

For styling, the application utilizes TailwindCSS for basic styling and responsiveness.

No state management tool is used.

### Project Structure:

The project structure uses the new standard for Next.js application structure, the App Router.
- `app/` - contains pages information, routes, loaders and layouts.
- `components/ui` - contains reusuable UI (tiny presentational) components used in various components through the application
- `components/` - contains mostly container components. These components are focused on UI rendering logic.
- `lib/` - contains interfaces, and tiny extra functions required at various points in the app.

## Deployment (on Vercel)

First, run the build command to validate app builds succesfully and generate production build folder for deployment.

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Navigate to the [Vercel Platform](https://vercel.com) and follow instructions for production deloyment.
