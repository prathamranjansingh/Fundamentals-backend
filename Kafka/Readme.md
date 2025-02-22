
# Apache Kafka

## The Apache Kafka Handbook – How to Get Started Using Kafka

By Gerard Hynes

Apache Kafka is an open-source event streaming platform that can transport huge volumes of data at very low latency. Companies like LinkedIn, Uber, and Netflix use Kafka to process trillions of events and petabytes of data each day.

Kafka was originally developed at LinkedIn to help handle their real-time data feeds. It's now maintained by the Apache Software Foundation and is widely adopted in the industry, being used by 80% of Fortune 100 companies.

### Why Should You Learn Apache Kafka?

Kafka lets you:
- Publish and subscribe to streams of events
- Store streams of events in the same order they happened
- Process streams of events in real-time

Kafka helps you efficiently connect diverse data sources with the many different systems that might need to use that data.

#### Use Cases for Kafka:
- Personalizing recommendations for customers
- Notifying passengers of flight delays
- Payment processing in banking
- Online fraud detection
- Managing inventory and supply chains
- Tracking order shipments
- Collecting telemetry data from Internet of Things (IoT) devices

For example, Pinterest uses Kafka to handle up to 40 million events per second.

### Kafka's Key Features:
- **Distributed**: Runs as a cluster of nodes spread across multiple servers.
- **Replicated**: Data is copied in multiple locations to protect it from a single point of failure.
- **Fast**: Optimized for high throughput, making effective use of disk storage and batched network requests.

### This Article Will:
- Introduce you to the core concepts behind Kafka
- Show you how to install Kafka on your own computer
- Get you started with the Kafka Command Line Interface (CLI)
- Help you build a simple Java application that produces and consumes events via Kafka

### Things the Article Won't Cover:
- More advanced Kafka topics, such as security, performance, and monitoring
- Deploying a Kafka cluster to a server
- Using managed Kafka services like Amazon MSK or Confluent Cloud

## Table of Contents
1. [Event Streaming and Event-Driven Architectures](#event-streaming-and-event-driven-architectures)
2. [Core Kafka Concepts](#core-kafka-concepts)
    - [Event Messages in Kafka](#event-messages-in-kafka)
    - [Topics in Kafka](#topics-in-kafka)
    - [Partitions in Kafka](#partitions-in-kafka)
    - [Offsets in Kafka](#offsets-in-kafka)
    - [Brokers in Kafka](#brokers-in-kafka)
    - [Replication in Kafka](#replication-in-kafka)
    - [Producers in Kafka](#producers-in-kafka)
    - [Consumers in Kafka](#consumers-in-kafka)
    - [Consumer Groups in Kafka](#consumer-groups-in-kafka)
    - [Kafka Zookeeper](#kafka-zookeeper)
3. [How to Install Kafka on Your Computer](#how-to-install-kafka-on-your-computer)
4. [How to Start Zookeeper and Kafka](#how-to-start-zookeeper-and-kafka)
5. [The Kafka CLI](#the-kafka-cli)
    - [How to List Topics](#how-to-list-topics)
    - [How to Create a Topic](#how-to-create-a-topic)
    - [How to Describe Topics](#how-to-describe-topics)
    - [How to Partition a Topic](#how-to-partition-a-topic)
    - [How to Set a Replication Factor](#how-to-set-a-replication-factor)
    - [How to Delete a Topic](#how-to-delete-a-topic)
    - [How to Use kafka-console-producer](#how-to-use-kafka-console-producer)
    - [How to Use kafka-console-consumer](#how-to-use-kafka-console-consumer)
    - [How to Use kafka-consumer-groups](#how-to-use-kafka-consumer-groups)
6. [How to Build a Kafka Client App with Java](#how-to-build-a-kafka-client-app-with-java)
    - [How to Set Up the Project](#how-to-set-up-the-project)
    - [How to Install the Dependencies](#how-to-install-the-dependencies)
    - [How to Create a Kafka Producer](#how-to-create-a-kafka-producer)
    - [How to Send Multiple Messages and Use Callbacks](#how-to-send-multiple-messages-and-use-callbacks)
    - [How to Create a Kafka Consumer](#how-to-create-a-kafka-consumer)
    - [How to Shut Down the Consumer](#how-to-shut-down-the-consumer)
7. [Where to Take it From Here](#where-to-take-it-from-here)

## Event Streaming and Event-Driven Architectures

An event is a record that something happened, as well as information about what happened. For example: a customer placed an order, a bank approved a transaction, inventory management updated stock levels.

Event streaming is the process of capturing events in real-time from sources (such as web applications, databases, or sensors) to create streams of events. These streams are potentially unending sequences of records.

As applications have become more complex, many organizations have adopted an event-driven architecture for their applications. This architecture helps ensure that if part of your application goes down, other parts won't also fail.

## Core Kafka Concepts

Kafka has become one of the most popular ways to implement event streaming and event-driven architectures. But it does have a bit of a learning curve and you need to understand a couple of concepts before you can make effective use of it.

### Event Messages in Kafka

When you write data to Kafka, or read data from it, you do this in the form of messages. You'll also see them called events or records.

A message consists of:
- a key
- a value
- a timestamp
- a compression type
- headers for metadata (optional)
- partition and offset id (once the message is written to a topic)

### Topics in Kafka

Kafka stores messages in a topic, an ordered sequence of events, also called an event log. Different topics are identified by their names and will store different kinds of events.

### Partitions in Kafka

In order to help Kafka to scale, topics can be divided into partitions. This breaks up the event log into multiple logs, each of which lives on a separate node in the Kafka cluster.

### Offsets in Kafka

Each message in a partition gets an id that is an incrementing integer, called an offset. Offsets start at 0 and are incremented every time Kafka writes a message to a partition.

### Brokers in Kafka

A single "server" running Kafka is called a broker. Multiple brokers working together make up a Kafka cluster. By running as a cluster, Kafka becomes more scalable and fault-tolerant.

### Replication in Kafka

To protect against data loss if a broker fails, Kafka writes the same data to copies of a partition on multiple brokers. This is called replication.

### Producers in Kafka

Producers are client applications that write events to Kafka topics. These apps aren't themselves part of Kafka – you write them.

### Consumers in Kafka

Consumers are client applications that read messages from topics in a Kafka cluster. Like with producers, you write these applications yourself and can make use of client libraries to support the programming language your application is built with.

### Consumer Groups in Kafka

An application that reads from Kafka can create multiple instances of the same consumer to split up the work of reading from different partitions in a topic. These consumers work together as a consumer group.

### Kafka Zookeeper

Kafka uses Zookeeper to manage the brokers in a cluster, and requires Zookeeper even if you're running a Kafka cluster with only one broker.

## How to Install Kafka on Your Computer

### Install Kafka on macOS

If you're using macOS, I recommend using Homebrew to install Kafka. It will make sure you have Java installed before it installs Kafka.

### Install Kafka on Windows (WSL2) and Linux

Kafka isn't natively supported on Windows, so you will need to use either WSL2 or Docker. I'm going to show you WSL2 since it's the same steps as Linux.

## How to Start Zookeeper and Kafka

### How to Start Kafka on macOS

In one terminal window, start Zookeeper with:
```sh
/usr/local/bin/zookeeper-server-start /usr/local/etc/zookeeper/zoo.cfg
```
In another terminal window, start Kafka with:
```sh
/usr/local/bin/kafka-server-start /usr/local/etc/kafka/server.properties
```

### How to Start Kafka on Windows (WSL2) and Linux

In one terminal window, start Zookeeper with:
```sh
~/kafka_2.13-3.3.1/bin/zookeeper-server-start.sh ~/kafka_2.13-3.3.1/config/zookeeper.properties
```
In another terminal window, start Kafka with:
```sh
~/kafka_2.13-3.3.1/bin/kafka-server-start.sh ~/kafka_2.13-3.3.1/config/server.properties
```

## The Kafka CLI

When you install Kafka, it comes with a Command Line Interface (CLI) that lets you create and manage topics, as well as produce and consume events.

### How to List Topics

To see the topics available on the Kafka broker on your local machine, use:
```sh
kafka-topics.sh --bootstrap-server localhost:9092 --list
```

### How to Create a Topic

To create a topic (with the default replication factor and number of partitions), use the `--create` and `--topic` options and pass them a topic name:
```sh
kafka-topics.sh --bootstrap-server localhost:9092 --create --topic my_first_topic
```

### How to Describe Topics

To describe the topics on a broker, use the `--describe` option:
```sh
kafka-topics.sh --bootstrap-server localhost:9092 --describe
```

### How to Partition a Topic

To create a topic with multiple partitions, use the `--partitions` option and pass it a number:
```sh
kafka-topics.sh --bootstrap-server localhost:9092 --create --topic my_second_topic --partitions 3
```

### How to Set a Replication Factor

To create a topic with a replication factor higher than the default, use the `--replication-factor` option and pass it a number:
```sh
kafka-topics.sh --bootstrap-server localhost:9092 --create --topic my_third_topic --partitions 3 --replication-factor 3
```

### How to Delete a Topic

To delete a topic, use the `--delete` option and specify a topic with the `--topic` option:
```sh
kafka-topics.sh --bootstrap-server localhost:9092 --delete --topic my_first_topic
```

### How to Use kafka-console-producer

You can produce messages to a topic from the command line using `kafka-console-producer`.

To create a producer connected to a specific topic, run:
```sh
kafka-console-producer.sh --bootstrap-server localhost:9092 --topic TOPIC_NAME
```

### How to Use kafka-console-consumer

You can consume messages from a topic from the command line using `kafka-console-consumer`.

To create a consumer, run:
```sh
kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic TOPIC_NAME
```

### How to Use kafka-consumer-groups

You can run consumers in a consumer group using the Kafka CLI. To view the documentation for this, run:
```sh
kafka-consumer-groups.sh
```

## How to Build a Kafka Client App with Java

### How to Set Up the Project

I recommend using IntelliJ for Java projects. Create a new Maven project in IntelliJ.

### How to Install the Dependencies

Open up `pom.xml` and inside the `<project>` element, create a `<dependencies>` element. Add the following dependencies:
```xml
<dependency>
    <groupId>org.apache.kafka</groupId>
    <artifactId>kafka-clients</artifactId>
    <version>3.3.1</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>2.0.6</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>2.0.6</version>
</dependency>
```

### How to Create a Kafka Producer

Create a `Producer` class and configure the producer properties:
```java
Properties properties = new Properties();
properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

KafkaProducer<String, String> producer = new KafkaProducer<>(properties);
ProducerRecord<String, String> producerRecord = new ProducerRecord<>("lotr_characters", "hobbits", "Bilbo");
producer.send(producerRecord);
producer.close();
```

### How to Send Multiple Messages and Use Callbacks

To send multiple messages and use callbacks, update the `Producer` class:
```java
HashMap<String, String> characters = new HashMap<>();
characters.put("hobbits", "Frodo");
characters.put("hobbits", "Sam");
characters.put("elves", "Galadriel");
characters.put("elves", "Arwen");
characters.put("humans", "Éowyn");
characters.put("humans", "Faramir");

for (HashMap.Entry<String, String> character : characters.entrySet()) {
    ProducerRecord<String, String> producerRecord = new ProducerRecord<>("lotr_characters", character.getKey(), character.getValue());
    producer.send(producerRecord, (RecordMetadata recordMetadata, Exception err) -> {
        if (err == null) {
            log.info("Message received. \n" +
                    "topic [" + recordMetadata.topic() + "]\n" +
                    "partition [" + recordMetadata.partition() + "]\n" +
                    "offset [" + recordMetadata.offset() + "]\n" +
                    "timestamp [" + recordMetadata.timestamp() + "]");
        } else {
            log.error("An error occurred while producing messages", err);
        }
    });
}
producer.close();
```

### How to Create a Kafka Consumer

Create a `Consumer` class and configure the consumer properties:
```java
Properties properties = new Properties();
properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, "lotr_consumer_group");
properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");

KafkaConsumer<String, String> consumer = new KafkaConsumer<>(properties);
consumer.subscribe(Arrays.asList("lotr_characters"));

while (true) {
    ConsumerRecords<String, String> messages = consumer.poll(Duration.ofMillis(100));
    for (ConsumerRecord<String, String> message : messages) {
        log.info("key [" + message.key() + "] value [" + message.value() + "]");
        log.info("partition [" + message.partition() + "] offset [" + message.offset() + "]");
    }
}
```

### How to Shut Down the Consumer

Wrap the consumer code in a try-catch-finally block to handle shutting down the consumer:
```java
try {
    consumer.subscribe(Arrays.asList("lotr_characters"));
    while (true) {
        ConsumerRecords<String, String> messages = consumer.poll(Duration.ofMillis(100));
        for (ConsumerRecord<String, String> message : messages) {
            log.info("key [" + message.key() + "] value [" + message.value() + "]");
            log.info("partition [" + message.partition() + "] offset [" + message.offset() + "]");
        }
    }
} catch (Exception err) {
    log.error("Error: ", err);
} finally {
    consumer.close();
    log.info("The consumer is now closed");
}
```

## Where to Take it From Here

Congratulations on making it this far. You've learned:
- The main concepts behind Kafka
- How to communicate with Kafka from the command line
- How to build a Java app that produces to and consumes from Kafka

There's plenty more to learn about Kafka, whether that's Kafka Connect for connecting Kafka to common data systems or the Kafka Streams API for processing and transforming your data.

Some resources you might find useful as you continue your journey with Kafka are:
- The official Kafka docs
- Courses from Confluent
- Conduktor's kafkademy
