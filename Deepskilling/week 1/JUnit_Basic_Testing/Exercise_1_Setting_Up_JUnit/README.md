# Exercise 1: Setting Up JUnit

## Objective
This exercise demonstrates how to properly set up a Maven project to include JUnit 5 dependencies and write a basic test class to verify the environment is correctly configured.

## Key Components
- **`pom.xml`**: Defines the Maven project configuration, specifically including the `junit-jupiter-api` and `junit-jupiter-engine` dependencies necessary for running JUnit 5 tests.
- **`src/test/java/.../MyFirstTest.java`**: A simple JUnit test class containing a basic `@Test` method to confirm that the testing framework executes successfully.

## How to Test
1. Open a terminal and navigate to this directory.
2. Run the tests using Maven:
   ```bash
   mvn test
   ```
