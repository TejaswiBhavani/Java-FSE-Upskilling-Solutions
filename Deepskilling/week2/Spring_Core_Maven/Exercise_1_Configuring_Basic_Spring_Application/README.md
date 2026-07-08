# Exercise 1: Configuring Basic Spring Application

## Objective
This exercise demonstrates the foundational setup of a Spring application using legacy XML-based configuration, showing how to define beans and manage their lifecycle within the Spring IoC container.

## Key Components
- **`pom.xml`**: The Maven project configuration that includes the `spring-context` dependency necessary for running the Spring application.
- **`src/main/resources/applicationContext.xml`**: The core Spring configuration file where the `BookRepository` and `BookService` beans are explicitly defined and wired.
- **`src/main/java/.../repository/BookRepository.java`**: A simple repository class acting as a data access component.
- **`src/main/java/.../service/BookService.java`**: The service class that contains business logic and depends on `BookRepository`.
- **`src/main/java/.../Main.java`**: The entry point of the application. It loads the `ClassPathXmlApplicationContext` and retrieves the `BookService` bean to verify the setup.

## How to Test
1. Open a terminal and navigate to the `LibraryManagement` directory.
2. Compile and run the application using Maven:
   ```bash
   mvn clean compile exec:java -Dexec.mainClass="com.library.Main"
   ```
