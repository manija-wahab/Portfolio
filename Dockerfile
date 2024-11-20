FROM node:20-alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

# Copy all other files into the container
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Build the app if needed (optional)
RUN npm run build --if-present

# Remove dev dependencies (production environment)
RUN npm prune --omit=dev

# Run migrations and seeds before starting the app
RUN npx knex migrate:latest
RUN npx knex seed:run

# Start the application
CMD ["npm", "start"]
