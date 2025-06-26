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

To run the tests:

```bash
pnpm --filter backend test
pnpm --filter frontend test
```

### Docker

Use Docker compose to start the API together with Prometheus and Grafana:

```bash
docker compose up --build
```

Prometheus will be available on port `9090` and Grafana on port `3001`.
