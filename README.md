# Full Stack Application Skeleton

This repository demonstrates a minimal setup for a modern TypeScript stack using SolidJS on the frontend and Fastify with tRPC on the backend. The project is organised as a pnpm workspace.

## Technologies

- **TypeScript**
- **SolidJS** with **SolidStart** and **daisyUI**
- **Fastify** server with **tRPC** API
- **Drizzle ORM** with a pluggable `Database` interface
- **Vitest** for unit tests
- **Docker** and **docker-compose** with Prometheus and Grafana

## Getting started

Install dependencies with pnpm and run both apps:

```bash
pnpm install
pnpm --filter backend run dev    # start API
pnpm --filter frontend run dev   # start frontend
```

The backend will load variables from `backend/.env` when running in development.

To run the tests:

```bash
pnpm --filter backend test
pnpm --filter frontend test
```

### Environment variables

The backend reads configuration from environment variables using [dotenv](https://github.com/motdotla/dotenv). A sample file is available at `backend/.env.example`.
Copy it to `backend/.env` and adjust values if needed:

```bash
cp backend/.env.example backend/.env
```

When running with Docker Compose, you can define variables using the `environment` section of `docker-compose.yml` or by providing a `.env` file that Docker Compose will read automatically.

### Docker

Use Docker compose to start the API together with Prometheus and Grafana:

```bash
docker compose up --build
```

Prometheus will be available on port `9090` and Grafana on port `3001`.
