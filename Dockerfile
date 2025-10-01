# This file is based on the official Next.js Docker example. https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

# Rebuild the source code only when needed 
FROM node:20-alpine AS builder
WORKDIR /app
COPY . /app

RUN apk add --no-cache libc6-compat git fontconfig
RUN yarn install --frozen-lockfile

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_ASTRO_API_URL
ARG CRAFT_SECRET_TOKEN
ARG RUN_BUILD="true"
ENV RUN_BUILD=${RUN_BUILD}

# Client build (which requires a secret mount)
# FROM builder as client-build-gha

# RUN --mount-type=secret,id=NEXT_PUBLIC_API_URL,env=NEXT_PUBLIC_API_URL \
#     --mount-type=secret,id=NEXT_PUBLIC_BASE_URL,env=NEXT_PUBLIC_BASE_URL \
#     --mount-type=secret,id=NEXT_PUBLIC_ASTRO_API_URL,env=NEXT_PUBLIC_ASTRO_API_URL \
#     --mount-type=secret,id=CRAFT_SECRET_TOKEN,env=CRAFT_SECRET_TOKEN 
#     if $RUN_BUILD;then \
#         npx update-browserslist-db@latest && yarn static:build;
#     fi
    # if $RUN_BUILD;then \
    # cat /tmp/secrets.json | jq -r "to_entries[] | \"export \\(.key)=\\(.value)\"" > /tmp/env_vars.sh && \
    # source /tmp/env_vars.sh && \
    # npx update-browserslist-db@latest && yarn static:build; \
    # fi



RUN if $RUN_BUILD;then npx update-browserslist-db@latest && yarn static:build;fi

FROM scratch AS nextjs_copy_from_build
COPY --from=builder /app /

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
