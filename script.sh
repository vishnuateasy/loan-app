#!/bin/bash

# Run Prisma Migrations
npx prisma migrate dev --name init

# Build Next.js App
next build
