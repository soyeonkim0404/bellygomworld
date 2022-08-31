echo "RUN ApplicationStop ---------------------->"

# 01. 실행중인 node kill
pgrep -f node | xargs kill -9

# 02. 기존 배포 내역 정리
rm -rf /app/world/*
rm -rf /app/world_deploy/*

# 03. index.html 복사
#cp -R /app/world_deploy/index.html /app/world/
