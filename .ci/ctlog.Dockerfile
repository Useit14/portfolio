# # Этап сборки
# FROM node:20-alpine AS builder
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build

# # Этап продакшена
# FROM node:20-alpine
# WORKDIR /app
# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/public ./public
# RUN npm ci --only=production
# CMD ["npm", "start"]


# Этап сборки
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
COPY ./apps/ctlog/package.json ./apps/ctlog/package.json

RUN npm i

FROM base AS builder

WORKDIR /app

COPY ./apps/ctlog ./apps/ctlog

RUN npm run build -w ./apps/client

# @description: Запуск собранного приложения
FROM caddy:2.7-alpine as runner

COPY --from=builder /app/apps/ctlog/dist /usr/share/caddy
COPY .ci/Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

