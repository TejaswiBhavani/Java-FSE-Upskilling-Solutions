# Exercise 2: Implementing Factory Method Pattern

## Objective
This exercise demonstrates the Factory Method Design Pattern to define an interface for creating objects, allowing subclasses to alter the type of objects that will be created dynamically.

## Key Components
- **`FactoryMethodTest.java`**: This file contains the complete implementation of the Factory Method pattern. It includes:
  - The `Document` interface and its concrete implementations (`WordDocument`, `ExcelDocument`, `PdfDocument`).
  - The abstract `DocumentFactory` creator class and its concrete subclasses (`WordDocumentFactory`, `ExcelDocumentFactory`, `PdfDocumentFactory`).
  - The `FactoryMethodTest` main class which acts as the client, utilizing the factories to create specific documents without coupling the client code to the concrete document classes.

## How to Test
1. Open a terminal and navigate to this directory.
2. Compile the Java file:
   ```bash
   javac FactoryMethodTest.java
   ```
3. Run the compiled test class:
   ```bash
   java FactoryMethodTest
   ```
