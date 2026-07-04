-- Scenario 3: Send reminders to customers whose loans are due within the next 30 days.

-- Enable output for DBMS_OUTPUT
SET SERVEROUTPUT ON;

DECLARE
    -- Cursor to fetch loans due in the next 30 days
    CURSOR c_loans IS 
        SELECT l.LoanID, c.Name, l.EndDate 
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- LOAN REMINDERS ---');
    
    -- Loop through the loans and print reminders
    FOR v_loan IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Customer ' || v_loan.Name || 
                             ', your loan #' || v_loan.LoanID || 
                             ' is due on ' || TO_CHAR(v_loan.EndDate, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
