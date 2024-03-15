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
It uses Axios for fetching data from API.

For styling, the application utilizes TailwindCSS for basic styling and responsiveness.

## Deployment

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

Navigate to [Vercel](https://vercel.com)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
