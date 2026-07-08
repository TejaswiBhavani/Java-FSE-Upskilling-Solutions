# Exercise 1: Control Structures

## Objective
This exercise demonstrates the use of PL/SQL control structures (such as IF statements, loops, and cursors) to manage program flow logic directly within the database for different business scenarios.

## Key Components
- **`SchemaSetup.sql`**: Script to set up the required database schema (tables, sample data) before running the scenarios.
- **`Scenario1.sql` / `Scenario2.sql` / `Scenario3.sql`**: Separate PL/SQL blocks demonstrating different control structures applied to specific business logic scenarios (like calculating discounts or processing batches of data).

## How to Test
1. Connect to an Oracle Database instance using SQL*Plus, SQL Developer, or a similar client.
2. Execute the setup script:
   ```sql
   @SchemaSetup.sql
   ```
3. Execute the scenario scripts one by one to view the control structure outputs:
   ```sql
   @Scenario1.sql
   ```
