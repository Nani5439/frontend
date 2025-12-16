# Stage 1: Build the React app
FROM node:22.20.0-alpine AS build

WORKDIR /app

# FontAwesome NPM token setup
ARG FONTAWESOME_TOKEN
ARG NODE_OPTIONS="--max-old-space-size=4096"

ENV NODE_OPTIONS=$NODE_OPTIONS
RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/
RUN npm config set "//npm.fontawesome.com/:_authToken" ${FONTAWESOME_TOKEN}

# Install dependencies
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --ignore-scripts

# Copy app source and build
COPY . .
RUN --mount=type=cache,target=/app/node_modules/.vite \
    npm run build

# Stage 2: Serve with NGINX and runtime backend configuration
FROM nginx:alpine

# Copy built React static files
COPY --from=build /app/dist /usr/share/nginx/html

# No nginx.conf.template copied — handled by Kubernetes ConfigMap

# Entrypoint for dynamic backend injection
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
