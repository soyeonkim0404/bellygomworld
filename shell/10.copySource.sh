rm -rf /app/world/*

cp -R /app/world_deploy/dist/* /app/world/

# 실행중인 node kill
pgrep -f node | xargs kill -9

rm -rf /app/world_deploy/node_modules

echo "NODE RUN..... START"
echo "CURRENT DIR 1"
pwd

cd /app/world_deploy/
echo "CURRENT DIR 2"
pwd

#sh /app/world_deploy/test.sh

/root/.nvm/versions/node/v16.15.1/bin/yarn install

/root/.nvm/versions/node/v16.15.1/bin/yarn build

/root/.nvm/versions/node/v16.15.1/bin/yarn start &

echo "NODE RUN..... END"
