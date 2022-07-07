echo "SHELL START --------------------------"

cd /app/world_deploy/shell
echo "CURRENT DIR -----> "
pwd

echo "RUN 10.copySource.sh -----> "
sudo -u root ./10.copySource.sh


cd /app/world_deploy/shell
echo "CURRENT DIR -----> "
pwd

echo "RUN 12.cfCacheInvalidate.sh -----> "
sudo -u root ./12.cfCacheInvalidate.sh


cd /app/world_deploy/shell
echo "CURRENT DIR -----> "
pwd

echo "RUN 20.restartNginx.sh -----> "
sudo -u root ./20.restartNginx.sh

echo "SHELL END --------------------------"
