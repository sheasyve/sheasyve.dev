#!/bin/bash
echo "Pulling latest code..."
git pull origin main

echo "Rebuilding React..."
npm run build # (Assuming your React app needs building)

echo "Restarting API..."
pm2 restart visitor-api

echo "Deployment complete!"
