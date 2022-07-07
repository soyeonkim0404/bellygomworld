rm -rf /app/world/*

#cp -R /app/world_deploy/dist/* /app/world/
cp -R /app/world_deploy/index.html /app/world/

# 실행중인 node kill
pgrep -f node | xargs kill -9

rm -rf /app/world_deploy/node_modules

echo "NODE RUN..... START"
echo "CURRENT DIR 1"
pwd

cd /app/world_deploy/
echo "CURRENT DIR 2"
pwd

echo "BEFORE ENV ---------------------->"
env

export PATH="/root/.nvm/versions/node/v16.15.1/bin:$PATH"
echo "AFTER ENV ---------------------->"
env

#sh /app/world_deploy/test.sh

yarn install

yarn build

nohup yarn start >/dev/null 2>&1 &

pwd

echo "SLEEP 20sec ---------------------->"
sleep 20

echo "NODE RUN..... END"
