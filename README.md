# Full Stack Application Skeleton

This repository contains a minimal setup for a SolidJS frontend using Vite and DaisyUI 5 alongside a simple Express backend written in TypeScript.

## Frontend

The `frontend` directory contains a SolidStart project. TailwindCSS and DaisyUI 5 are configured. Run `npm install` inside the folder and use `npm run dev` to start the development server.

## Backend

The backend lives in the `backend` directory. It uses Express with TypeScript and an in-memory user store. Install dependencies with `npm install` and start the server using `npm run dev`.

The project is organized following Clean Architecture:

```
backend/src/
  domain/         # Entities and domain models
  usecases/       # Application logic
  infrastructure/ # Data repositories
  presentation/   # API routes
```
