# ---------- Stage 1: build the React app ----------
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first so Docker can cache this layer
COPY package*.json ./
RUN npm install

# Copy the source and build the production bundle into /app/dist
COPY . .
RUN npm run build

# ---------- Stage 2: serve the static files with nginx ----------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
