It is a classic implementation of Kafka producer-consumer.
There are mainly 3 files here.
admin.js creates a topic with 2 partitions.
producer.js creates a producer. It sends a message (riderName, location) to the topic created in admin.js.
If location is north then partition 0 is chosen. Else partition 1 is chosen
consumer.js creates a consumer. It subscribes to the above topic and consumes each message and logs them.

Create a admin --> use node admin.js
Create a producer --> use node producer.js
Create a consumer --> use node consumer.js <group-name>

Note: Go through the screenshots to understand working of producer and consumers