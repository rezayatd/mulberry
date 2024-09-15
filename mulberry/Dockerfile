# Stage 1: Build the Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the Angular app source code
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine

# Copy the built Angular app from the previous stage
COPY --from=build app/dist/mulberry /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

