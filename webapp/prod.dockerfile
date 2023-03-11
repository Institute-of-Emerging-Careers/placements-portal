FROM node:18-alpine AS dependency-installer
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production --frozen-lockfile

FROM node:18-alpine AS production-builder
WORKDIR /app
COPY . .
COPY --from=dependency-installer /app/node_modules ./node_modules

RUN yarn build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner
ENV NODE_ENV=production
COPY --from=production-builder /app/next.config.js ./
COPY --from=production-builder /app/public ./public
COPY --from=production-builder /app/.next ./.next
COPY --from=production-builder /app/node_modules ./node_modules
EXPOSE 3010
CMD ["node_modules/.bin/next", "start"]