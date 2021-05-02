#!/bin/bash
echo "-> Starting apache-kafka services..."
cd apache-kafka
docker-compose down
docker-compose up -d
echo "-> Starting simulator..."
cd ..
cd simulator
docker-compose down
docker-compose up -d
docker exec -it simulator go run main.go