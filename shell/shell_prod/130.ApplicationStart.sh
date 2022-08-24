echo "RUN ApplicationStart ---------------------->"

# 01. 배포된 디렉토리로 이동
echo "NODE RUN..... START"
cd /app/world_deploy/
echo "CURRENT DIR 2"
pwd


# 02. node PATH 설정
export PATH="/root/.nvm/versions/node/v16.15.1/bin:$PATH"
echo "AFTER ENV ---------------------->"
env


# 03. build 시작
yarn install
yarn build_prod


# 04. 서비스 기동 시작
nohup yarn start_prod >/dev/null 2>&1 &
echo "NODE RUN..... END"


# 05. CloudFront Cache 초기화
echo "CloudFront Cache invalidation RUN..... START"
aws cloudfront create-invalidation --distribution-id E1JJHSWHNWP0CY --paths "/*"
echo "CloudFront Cache invalidation RUN..... END"


# 06. NGINX 재기동
echo "NGINX config file copy"
cp /etc/nginx/nginx.conf.20220707.node /etc/nginx/nginx.conf
nohup service nginx restart >/dev/null 2>&1 &
echo "NGINX Restart END"

