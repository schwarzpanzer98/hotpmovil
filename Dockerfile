FROM node:alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine AS builder
WORKDIR /usr/app
COPY . .
COPY --from=deps /usr/app/node_modules ./node_modules
RUN yarn build

FROM node:alpine AS runner
WORKDIR /usr/app

ENV NODE_ENV production

COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app/pages ./pages
COPY --from=builder /usr/app/component ./component
COPY --from=builder /usr/app/styles ./styles
COPY --from=builder /usr/app/.next ./.next
COPY --from=builder /usr/app/node_modules ./node_modules
COPY --from=builder /usr/app/package.json ./package.json

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /usr/app/.next
USER nextjs

EXPOSE 3000

CMD ["yarn", "dev"]