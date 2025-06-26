FROM node:20-alpine
WORKDIR /app
RUN npm i -g pnpm
COPY pnpm-workspace.yaml ./
COPY backend/package.json backend/tsconfig.json ./backend/
RUN pnpm install --frozen-lockfile --filter backend...
COPY backend ./backend
WORKDIR /app/backend
CMD ["pnpm","run","dev"]
