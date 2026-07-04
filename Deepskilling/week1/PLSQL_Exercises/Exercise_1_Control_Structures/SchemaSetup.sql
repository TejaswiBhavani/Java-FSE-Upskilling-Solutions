-- This script creates the mock schema and data required to test the PL/SQL blocks.

CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5) DEFAULT 'FALSE'
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Insert mock data
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (1, 'John Doe', 65, 12000);
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (2, 'Jane Smith', 45, 8000);
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (3, 'Bob Johnson', 70, 5000);
INSERT INTO Customers (CustomerID, Name, Age, Balance) VALUES (4, 'Alice Brown', 35, 15000);

INSERT INTO Loans (LoanID, CustomerID, InterestRate, EndDate) VALUES (101, 1, 5.5, SYSDATE + 15);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, EndDate) VALUES (102, 2, 6.0, SYSDATE + 45);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, EndDate) VALUES (103, 3, 5.0, SYSDATE + 10);
INSERT INTO Loans (LoanID, CustomerID, InterestRate, EndDate) VALUES (104, 4, 4.5, SYSDATE + 20);

COMMIT;
