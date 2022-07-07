echo "SHELL START --------------------------"

cd /app/world_deploy
echo "CURRENT DIR -----> "
pwd

echo "RUN 10.copySource.sh -----> "
sudo -u root ./10.copySource.sh

echo "RUN 12.cfCacheInvalidate.sh -----> "
sudo -u root ./12.cfCacheInvalidate.sh

echo "RUN 20.restartNginx.sh -----> "
sudo -u root ./20.restartNginx.sh

echo "SHELL END --------------------------"
