-- Schema setup for Stored Procedures Exercise

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER
);

-- Mock Data for Accounts
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance) VALUES (1, 101, 'Savings', 5000);
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance) VALUES (2, 101, 'Checking', 2000);
INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance) VALUES (3, 102, 'Savings', 10000);

-- Mock Data for Employees
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (1, 'Alice', 'HR', 50000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (2, 'Bob', 'IT', 75000);
INSERT INTO Employees (EmployeeID, Name, Department, Salary) VALUES (3, 'Charlie', 'IT', 80000);

COMMIT;
