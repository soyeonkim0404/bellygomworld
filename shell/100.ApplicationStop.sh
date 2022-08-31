echo "RUN ApplicationStop ---------------------->"

# 01. 실행중인 node kill
pgrep -f node | xargs kill -9

# 02. 기존 배포 내역 정리
rm -rf /app/world/*
rm -rf /app/world_deploy/*

# 03. 기존 빌드된 파일 및 폴더 삭제
# I want to make sure that the directory is clean and has nothing left over from
# previous deployments. The servers auto scale so the directory may or may not
# exist.
if [ -d /app/world_deploy/ ]; then
    rm -rf /app/world_deploy/
fi
mkdir -vp /app/world_deploy/
