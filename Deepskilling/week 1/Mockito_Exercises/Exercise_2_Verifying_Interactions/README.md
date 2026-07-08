# Exercise 2: Verifying Interactions

## Objective
This exercise demonstrates how to use Mockito to verify that specific methods on mock objects were called during the test execution, checking the number of invocations and the exact arguments passed.

## Key Components
- **`src/main/java/.../ExternalApi.java`**: The interface representing an external dependency.
- **`src/main/java/.../MyService.java`**: The business logic class that invokes methods on the `ExternalApi` dependency.
- **`src/test/java/.../MyServiceTest.java`**: The test class that focuses on Mockito's `verify()` functionality to ensure that `MyService` correctly calls the expected methods on `ExternalApi` with the correct parameters (e.g. verifying it was called exactly 1 time).
- **`pom.xml`**: Maven configuration for the project, including JUnit and Mockito dependencies.

## How to Test
1. Open a terminal and navigate to this directory.
2. Run the tests using Maven:
   ```bash
   mvn test
   ```
