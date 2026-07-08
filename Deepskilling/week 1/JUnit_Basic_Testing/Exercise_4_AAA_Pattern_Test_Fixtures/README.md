# Exercise 4: AAA Pattern and Test Fixtures

## Objective
This exercise focuses on writing clean unit tests by utilizing the Arrange-Act-Assert (AAA) pattern, alongside proper test lifecycle annotations like `@BeforeEach` and `@AfterEach` for test fixture setup.

## Key Components
- **`src/main/java/.../BankAccount.java`**: A simple domain class representing a bank account with methods for deposit and withdrawal, which serves as the "System Under Test" (SUT).
- **`src/test/java/.../BankAccountTest.java`**: The test class that verifies the `BankAccount` logic. It uses `@BeforeEach` to set up a fresh `BankAccount` instance before each test, demonstrating test isolation and the AAA pattern structure.
- **`pom.xml`**: The Maven configuration file containing the required JUnit 5 dependencies.

## How to Test
1. Open a terminal and navigate to this directory.
2. Run the tests using Maven:
   ```bash
   mvn test
   ```
