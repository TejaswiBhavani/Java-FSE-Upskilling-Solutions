# Exercise 4: Creating & Configuring a Maven Project

## Objective
This exercise focuses on the initial project setup phase, demonstrating how to properly initialize a basic Maven project structure and configure the `pom.xml` to pull in the foundational dependencies needed for a Spring-based Library Management system.

## Key Components
- **`LibraryManagement/pom.xml`**: The central component of this exercise. It configures the project's Group ID, Artifact ID, and Version (GAV) coordinates. It specifically pulls in the `spring-context` dependency from the Maven Central Repository, establishing the backbone for all subsequent Spring Core exercises.

## How to Test
1. Open a terminal and navigate to the `LibraryManagement` directory.
2. Verify the configuration by asking Maven to resolve dependencies and build the project structure:
   ```bash
   mvn clean compile
   ```
   If successful, you will see a `BUILD SUCCESS` message, indicating that the POM is correctly formatted and dependencies were downloaded.
