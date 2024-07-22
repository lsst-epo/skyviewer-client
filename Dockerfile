# This file is based on the official Next.js Docker example. https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# Rebuild the source code only when needed
FROM node:20-alpine AS builder
WORKDIR /app
COPY . /app

RUN apk add --no-cache libc6-compat git fontconfig
RUN yarn install --frozen-lockfile

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_ASSETS_BASE_URL
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_ASTRO_API_URL
ARG CRAFT_SECRET_TOKEN

RUN npx browserslist@latest --update-db && yarn static:build

# Production image, copy all the files and run next
FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache fontconfig
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/ ./

USER nextjs

EXPOSE 8080

CMD ["yarn", "start"]
