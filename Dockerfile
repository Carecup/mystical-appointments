# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json bun.lockb ./
RUN npm install --frozen-lockfile || npm install
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /app/dist ./dist
COPY server ./server
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server/index.js"]
