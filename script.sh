#!/bin/bash

# Run Prisma Migrations
npx prisma migrate deploy

# Build Next.js App
next build
