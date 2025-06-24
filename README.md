# Full Stack Application Skeleton

This repository contains a minimal setup for a SolidJS frontend using SolidStart and DaisyUI 5 alongside a FastAPI backend with SQLite following Clean Architecture (onion) principles.

## Frontend

The `frontend` directory contains a SolidStart project. TailwindCSS and DaisyUI 5 are configured. Run `npm install` inside the folder and use `npm run dev` to start the development server.

## Backend

The backend lives in the `backend` directory. It uses FastAPI with SQLAlchemy and SQLite. Install dependencies with `pip install -r requirements.txt` and start the server with `uvicorn app.main:app --reload`.

The project is organized following Clean Architecture:

```
backend/app/
  domain/         # Entities and domain models
  usecases/       # Application logic
  infrastructure/ # Database and repositories
  presentation/   # API routers
```

