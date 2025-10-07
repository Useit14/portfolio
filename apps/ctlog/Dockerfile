# Базовый образ
FROM node:18-alpine AS builder

# Рабочий каталог
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем код
COPY . .

# Собираем проект
RUN npm run build

# Стадия production
FROM node:18-alpine

WORKDIR /app

# Копируем только необходимые файлы из build stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Устанавливаем только production зависимости
RUN npm ci --only=production

# Экспонируем порт
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"]
