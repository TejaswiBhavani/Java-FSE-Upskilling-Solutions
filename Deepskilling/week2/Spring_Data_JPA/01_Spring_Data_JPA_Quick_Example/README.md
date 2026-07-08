# 01. Spring Data JPA Quick Example

## Objective
This exercise provides a quick-start example into Spring Data JPA using a Spring Boot application, demonstrating how to map Java objects to database tables (ORM), configure a datasource, and use Repository interfaces for database operations.

## Key Components
- **`orm-learn/pom.xml`**: Contains Spring Boot starter dependencies, importantly including `spring-boot-starter-data-jpa` and a database driver (like H2 or MySQL).
- **`src/main/resources/application.properties`**: Configuration file containing the JDBC URL, username, password, and Hibernate dialect for the database connection.
- **`src/main/java/.../model/Country.java`**: The JPA Entity class, annotated with `@Entity`, `@Table`, and `@Id`, which maps directly to a database table.
- **`src/main/java/.../repository/CountryRepository.java`**: An interface extending Spring Data's `JpaRepository`. This automatically provides basic CRUD operations for the `Country` entity without writing boilerplate queries.
- **`src/main/java/.../service/CountryService.java`**: The service layer that interacts with the `CountryRepository` and applies business logic, including throwing exceptions like `CountryNotFoundException`.
- **`src/main/java/.../OrmLearnApplication.java`**: The main Spring Boot application class, often implementing `CommandLineRunner` to test repository methods on startup.

## How to Test
1. Open a terminal and navigate to the `orm-learn` directory.
2. Run the Spring Boot application using the Maven wrapper or standard Maven command:
   ```bash
   mvn spring-boot:run
   ```
   Alternatively, you can run the application directly from your IDE by executing the `OrmLearnApplication` class.
