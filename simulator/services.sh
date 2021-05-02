#!/bin/bash
cd ../apache-kafka
docker-compose down
docker-compose up -d
docker exec -it apache-kafka_kafka_1 kafka-console-consumer --bootstrap-server=kafka:9092 --topic=readtest