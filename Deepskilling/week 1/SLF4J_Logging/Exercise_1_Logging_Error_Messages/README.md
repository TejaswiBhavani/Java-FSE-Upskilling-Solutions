# Exercise 1: Logging Error Messages

## Objective
This exercise demonstrates how to implement logging in a Java application using SLF4J (Simple Logging Facade for Java) to effectively capture error messages, debug info, and application events.

## Key Components
- **`pom.xml`**: The Maven project configuration which defines the necessary SLF4J dependencies (API and an implementation binding like Logback).
- **`src/main/java/.../LoggingExample.java`**: The main Java class demonstrating SLF4J usage. It instantiates a `Logger` and logs messages at various levels (INFO, DEBUG, ERROR) to show how they are captured and formatted.

## How to Test
1. Open a terminal and navigate to this directory.
2. Run the code using Maven to compile and execute the class:
   ```bash
   mvn clean compile exec:java -Dexec.mainClass="com.example.LoggingExample"
   ```
