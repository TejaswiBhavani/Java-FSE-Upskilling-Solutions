# Exercise 1: Mocking and Stubbing

## Objective
This exercise introduces Mockito to create mock objects for external dependencies (APIs, repositories) and stub their methods to return controlled responses for isolated unit testing.

## Key Components
- **`src/main/java/.../ExternalApi.java`**: An interface representing an external service or dependency that our application relies on.
- **`src/main/java/.../MyService.java`**: The core business service that depends on `ExternalApi`. It processes data retrieved from the API.
- **`src/test/java/.../MyServiceTest.java`**: The JUnit test class that uses Mockito to mock the `ExternalApi`, stub its responses using `when(...).thenReturn(...)`, and verify the behavior of `MyService` in isolation.
- **`pom.xml`**: Includes both JUnit 5 and Mockito dependencies for testing.

## How to Test
1. Open a terminal and navigate to this directory.
2. Run the tests using Maven:
   ```bash
   mvn test
   ```
