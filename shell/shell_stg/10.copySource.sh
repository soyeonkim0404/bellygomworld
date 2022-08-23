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

export PATH="/root/.nvm/versions/node/v16.15.1/bin:$PATH"
echo "AFTER ENV ---------------------->"
env

yarn install

yarn build_stage

nohup yarn start_stage >/dev/null 2>&1 &

echo "NODE RUN..... END"
