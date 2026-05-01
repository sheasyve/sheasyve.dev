#!/bin/bash
git pull origin main
set -e
pm2 restart visitor-api
sudo systemctl restart nginx

echo "Deployment complete!"