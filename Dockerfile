# Backend Stage
FROM node:18 AS backend
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend .
EXPOSE 5000
CMD ["npm", "start"]

# Frontend Stage
FROM node:18 AS frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Final Stage (Serves Both)
FROM node:18
WORKDIR /app
COPY --from=backend /app/backend /app/backend
COPY --from=frontend /app/frontend /app/frontend
COPY docker-compose.yml .
CMD ["node", "backend/index.js"]
