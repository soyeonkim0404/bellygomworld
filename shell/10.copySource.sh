rm -rf /app/world/*

cp -R /app/world_deploy/dist/* /app/world/

# 실행중인 node kill
sudo pgrep -f node | xargs kill -9

sudo rm -rf /app/world_deploy/node_modules

sudo yarn install

sudo yarn build

sudo yarn start &
