# Exercise 2: Implementing Dependency Injection

## Objective
This exercise explores Dependency Injection (DI) in Spring by demonstrating how the Spring container injects dependencies (like a repository into a service) using XML configuration, promoting loose coupling.

## Key Components
- **`src/main/resources/applicationContext.xml`**: Contains the bean definitions. Crucially, it demonstrates DI by injecting the `BookRepository` bean into the `BookService` bean using a `<property>` tag (setter injection).
- **`src/main/java/.../repository/BookRepository.java`**: The dependency class.
- **`src/main/java/.../service/BookService.java`**: The dependent class. It contains a setter method for `BookRepository` which Spring uses to inject the instance.
- **`src/main/java/.../LibraryManagementApplication.java`**: The application runner that initializes the context, retrieves the fully injected `BookService`, and calls its methods to verify the injection worked correctly.
- **`pom.xml`**: The standard Maven build file including `spring-context`.

## How to Test
1. Open a terminal and navigate to the `LibraryManagement` directory.
2. Compile and run the application using Maven:
   ```bash
   mvn clean compile exec:java -Dexec.mainClass="com.library.LibraryManagementApplication"
   ```
