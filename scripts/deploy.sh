#!/bin/bash

set -e

echo "Starting deployment..."

cd ~/Cloud-Based-CI-CD-Deployment-Platform

git pull origin main

docker compose up -d --build

sleep 10

curl --fail http://localhost/health

echo "Deployment successful"