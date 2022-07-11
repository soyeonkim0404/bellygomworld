
echo "NGINX config file copy"

cp /etc/nginx/nginx.conf.20220707.node /etc/nginx/nginx.conf

nohup service nginx restart >/dev/null 2>&1 &

echo "NGINX Restart END"


