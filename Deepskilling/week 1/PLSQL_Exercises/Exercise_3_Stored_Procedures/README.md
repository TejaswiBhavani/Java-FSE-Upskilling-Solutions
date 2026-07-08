# Exercise 3: Stored Procedures

## Objective
This exercise covers how to create, execute, and manage Stored Procedures in PL/SQL to encapsulate business logic on the database side for improved performance, reusability, and security.

## Key Components
- **`SchemaSetup.sql`**: Script to create the required database tables and insert sample records.
- **`Scenario1.sql` / `Scenario2.sql` / `Scenario3.sql`**: Separate scripts containing `CREATE OR REPLACE PROCEDURE` blocks defining stored procedures for various business scenarios. They also include anonymous PL/SQL blocks to execute and test the created procedures.

## How to Test
1. Connect to an Oracle Database instance.
2. Run the setup script to prepare the schema:
   ```sql
   @SchemaSetup.sql
   ```
3. Compile and execute the procedures by running the scenario scripts:
   ```sql
   @Scenario1.sql
   ```
