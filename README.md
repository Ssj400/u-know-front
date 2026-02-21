# U-Know — Frontend

Frontend for the U-Know knowledge-sharing platform. Built with Next.js (App Router), TypeScript, and Tailwind CSS. It implements the UI and client-side logic to interact with the U-Know backend API.

What you'll find here:
- A modular component-based UI for posts, profiles, and user management
- Auth flow with short-lived access tokens and HTTP-only refresh tokens
- Custom hooks for fetching and caching API data

## Quick Start

Prerequisites:
- Node.js (LTS recommended)
- A running `u-know-back` API instance

Installation:

```bash
git clone https://github.com/your-username/u-know-front.git
cd u-know-front
npm install
```

Environment:
Create `.env.local` in the project root with at least:

```env
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

Run (development):

```bash
npm run dev
```

Build (production):

```bash
npm run build
npm run start
```

Linting:

```bash
npm run lint
```

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS for styling
- Axios for HTTP requests (centralized instance in `src/lib`)
- React Hook Form + Zod for forms & validation
- Small, custom UI components and Heroicons

## Key Features

- Authentication with access + HTTP-only refresh tokens
- Automatic token refresh via Axios interceptors
- Protected routes and auth helpers (`useAuthRedirect`, etc.)
- Reusable hooks for data fetching (`useFetchPosts`, `useFetchUsers`, ...)
- Responsive, mobile-first UI

## Project Layout (high level)

- `src/app` — Next.js App Router pages and layouts
- `src/components` — Reusable UI and feature components
- `src/hooks` — Custom hooks for data fetching and behaviour
- `src/lib` — Shared utilities (Axios instance, helpers)
- `src/types` — TypeScript types for API models

## Authentication (concise)

1. User logs in / registers. Backend returns an `access_token` in the response and sets a `refresh_token` as an HTTP-only cookie.
2. The client stores the `access_token` (in a non-HTTP-only cookie) and attaches it to `Authorization` headers.
3. Axios interceptors handle `401` responses by calling the refresh endpoint. The browser sends the `refresh_token` cookie automatically.
4. On successful refresh, the new `access_token` is stored and the original request is retried.
5. On logout the client clears stored tokens and notifies the backend to invalidate the refresh token.

Implementation notes:
- Token refresh is centralized in `src/lib/axios.ts`.
- Hooks like `useAuthRedirect` and `useFetchCurrentUserProfile` simplify protecting routes and accessing user data.

## Available Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Development Tips

- Keep the backend running and set `NEXT_PUBLIC_API_URL` to its base URL.
- Use your browser's devtools to inspect cookies (refresh token is HTTP-only and won't be visible to JS).
- For local testing, ensure CORS and cookie domain settings on the backend permit requests from `localhost`.

## Contributing

Contributions are welcome. Please open issues or PRs for fixes and improvements. Follow the existing code patterns (feature folders, hooks, and small reusable components).

## License

See the repository `LICENSE` file.

---
