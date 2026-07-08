# Exercise 1: Implementing Singleton Pattern

## Objective
This exercise demonstrates how to implement the Singleton Design Pattern to ensure a class has only one instance while providing a global point of access to it, using a Logger utility as an example.

## Key Components
- **`Logger.java`**: The class implementing the Singleton pattern. It features a private constructor, a static instance variable, and a public static `getInstance()` method to enforce that only a single logger is ever instantiated.
- **`SingletonTest.java`**: The test class that contains the `main` method. It calls `Logger.getInstance()` multiple times and verifies that all references point to the exact same object in memory.

## How to Test
1. Open a terminal and navigate to this directory.
2. Compile the Java files:
   ```bash
   javac *.java
   ```
3. Run the compiled test class:
   ```bash
   java SingletonTest
   ```
