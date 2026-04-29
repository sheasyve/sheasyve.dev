#!/bin/bash
echo "Pulling latest code..."
git pull origin main

echo "Rebuilding React..."
npm run build 

echo "Restarting API..."
pm2 restart visitor-api

echo "Deployment complete!"
