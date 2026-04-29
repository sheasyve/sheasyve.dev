git pull origin main
pm2 restart visitor-api
sudo systemctl restart nginx

echo "Deployment complete!"