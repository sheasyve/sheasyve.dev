#!/bin/bash
git pull origin main
set -e
npm install 
npm install cors
pm2 restart visitor-api
sudo systemctl restart nginx

echo "Deployment complete!"