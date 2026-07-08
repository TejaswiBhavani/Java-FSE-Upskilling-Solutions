-- Scenario 1: Apply a 1% discount to loan interest rates for customers above 60 years old.

DECLARE
    -- Define a cursor to fetch customers older than 60
    CURSOR c_customers IS 
        SELECT CustomerID, Age 
        FROM Customers 
        WHERE Age > 60;
BEGIN
    -- Loop through the fetched customers
    FOR v_customer IN c_customers LOOP
        -- Apply the discount to their loans
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = v_customer.CustomerID;
    END LOOP;
    
    -- Commit the changes to the database
    COMMIT;
    
    DBMS_OUTPUT.PUT_LINE('Successfully applied 1% discount to loans for customers above 60.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error applying discounts: ' || SQLERRM);
END;
/
