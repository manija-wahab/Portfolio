FROM node:20-alpine

# Set the working directory to the root directory
WORKDIR /

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

# Copy the knexfile.js into the container
COPY server/db/knexfile.js ./knexfile.js 

# Copy the migrations and seeds directories into the container
COPY server/db/migrations ./migrations
COPY server/db/seeds ./seeds

# Copy all other files into the container
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Build the app if needed (optional)
RUN npm run build --if-present

# Remove dev dependencies (production environment)
RUN npm prune --omit=dev

# Run migrations and seeds before starting the app
RUN npx knex migrate:latest --knexfile knexfile.js
RUN npx knex seed:run --knexfile knexfile.js

# Start the application
CMD ["npm", "start"]
