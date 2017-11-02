#!/bin/bash

SCRIPT_DIR=`dirname $0`
if [ -f ${SCRIPT_DIR}/.env.sh ]; then
    source ${SCRIPT_DIR}/.env.sh
fi

if [ ">${RSYNC_USER}<" == "><" ] || [ ">${RSYNC_HOST}<" == "><" ] || [ ">${RSYNC_PATH}<" == "><" ]; then
    echo "User, host, or path missing"
    exit 1
fi

if [ ! -d ${1} ]; then
    echo "Directory ${1} does not exist"
    exit 1
fi

rsync -rvi ${1}/ ${RSYNC_USER}@${RSYNC_HOST}:${RSYNC_PATH}/
