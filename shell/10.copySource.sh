rm -rf /app/world/*

cp -R /app/world_deploy/dist/* /app/world/

# 실행중인 node kill
pgrep -f node | xargs kill -9

rm -rf /app/world_deploy/node_modules

cd /app/world_deploy
yarn install

yarn build

yarn start &

