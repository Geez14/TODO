# Use the Alpine-based Bun image
FROM oven/bun:alpine AS base

# Set the working directory
WORKDIR /app

# Install dependencies only when needed
FROM base AS deps

# Copy package files
COPY package.json bun.lockb* package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the source code
COPY . .

# Build the application
RUN bun run build

# Production image
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

# Create a non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy necessary files with appropriate ownership
COPY --from=builder --chown=nextjs:nextjs /app/.next ./.next
# COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/package.json ./

# Install only production dependencies
RUN bun install --production --frozen-lockfile

# Switch to non-root user
USER nextjs

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
