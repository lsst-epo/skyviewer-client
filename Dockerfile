# This file is based on the official Next.js Docker example. https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# Install dependencies only when needed
FROM node:20-alpine as deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
COPY . /app
COPY --from=deps /app/node_modules ./node_modules

ARG NEXT_PUBLIC_API_URL=https://skyviewer-api-e3g4rcii3q-uc.a.run.app/api
ARG NEXT_PUBLIC_ASSETS_BASE_URL=https://skyviewer-api-e3g4rcii3q-uc.a.run.app/assets
ARG NEXT_PUBLIC_ASTRO_API_URL=https://us-central1-skyviewer.cloudfunctions.net/astro-objects-api

RUN yarn tokens && yarn cloud-start:build

# Production image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# COPY --from=builder /app/next.config.js ./
# COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/ ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package.json ./package.json

USER nextjs

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 8080

CMD ["yarn", "cloud-start:start"]
