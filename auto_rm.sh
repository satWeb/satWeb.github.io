#! /bin/bash

BASE_DIR=$(dirname $0)
cd ${BASE_DIR}

BASE_DIR=${pwd}

# 删除一周前修改的demo
find ${BASE_DIR}/demo -type f -mtime +7 -exec rm {} \;
