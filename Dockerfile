# syntax=docker/dockerfile:1.19
# Rebuild the source code only when needed 
FROM node:20-alpine AS builder
WORKDIR /app
COPY --exclude=.env . /app
RUN apk add --no-cache libc6-compat git fontconfig
RUN yarn install --frozen-lockfile

FROM builder AS yarn-builder
RUN --mount=type=bind,source=.env,target=/app/.env \
    npx update-browserslist-db@latest && yarn static:build

# FOR GCS bucket .next folder versioning
FROM scratch AS nextjs-copy
COPY --from=yarn-builder /app/.next /

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
