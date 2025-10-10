# syntax=docker/dockerfile:1.19
# This file is based on the official Next.js Docker example. https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# Rebuild the source code only when needed 
FROM node:20-alpine AS builder
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
WORKDIR /app
COPY --exclude=.env . /app
RUN apk add --no-cache libc6-compat git fontconfig
RUN yarn install --frozen-lockfile

FROM builder AS yarn-builder
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
RUN --mount=type=bind,source=.env,target=/app/.env \
    npx update-browserslist-db@latest && yarn static:build

# FOR GCS bucket .next folder versioning
FROM scratch AS nextjs-copy
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
COPY --from=yarn-builder /app/.next /

# Production image, copy all the files and run next
FROM node:20-alpine AS runner
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8
WORKDIR /app

RUN apk add --no-cache fontconfig
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder --chown=nextjs:nodejs /app/ ./

USER nextjs

EXPOSE 8080

CMD ["yarn", "start"]
