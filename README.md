# React Ecom Starter (Vite)

This is a minimal starter project scaffold for a React + Vite frontend with:

- TailwindCSS (clean tailwind file only)
- Redux Toolkit + RTK Query base
- React Router + ProtectedRoute (adminOnly support)
- Framer Motion installed as dependency
- shadcn/ui: follow shadcn installation steps after bootstrap
- Stripe.js dependency added for frontend integration

## Notes
- Run `npm install` to install dependencies.
- Create `.env` file with `VITE_API_BASE_URL` and `VITE_STRIPE_PK`.
- The auth login endpoint is expected at `POST /api/auth/login` returning `{"token","role","userId"}`.

Happy hacking!
