-- Scenario 2: Promote customers to VIP status based on balance over $10,000.

DECLARE
    -- Cursor to iterate through all customers
    CURSOR c_customers IS 
        SELECT CustomerID, Balance 
        FROM Customers;
BEGIN
    FOR v_customer IN c_customers LOOP
        -- Check if the balance exceeds $10,000
        IF v_customer.Balance > 10000 THEN
            -- Update VIP status
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = v_customer.CustomerID;
        END IF;
    END LOOP;
    
    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Successfully updated VIP statuses for high-balance customers.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating VIP status: ' || SQLERRM);
END;
/
