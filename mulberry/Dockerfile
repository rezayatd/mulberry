# Stage 1: Build the Angular app
# Use Node image for amd64 architecture
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Clean up any existing node_modules or lock files
#RUN rm -rf node_modules package-lock.json

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy the Angular app source code
COPY . .

# Build the Angular app
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine AS production

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/mulberry /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

