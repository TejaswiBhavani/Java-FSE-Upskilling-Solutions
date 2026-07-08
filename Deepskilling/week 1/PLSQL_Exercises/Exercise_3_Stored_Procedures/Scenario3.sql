-- Scenario 3: Transfer funds between accounts with balance checking

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_FromAccountID IN NUMBER,
    p_ToAccountID IN NUMBER,
    p_Amount IN NUMBER
) IS
    v_Balance NUMBER;
BEGIN
    -- Check if the source account has sufficient balance
    -- FOR UPDATE is used to lock the row and prevent concurrent modifications
    SELECT Balance INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_FromAccountID
    FOR UPDATE; 
    
    IF v_Balance < p_Amount THEN
        -- Raise an application error if balance is insufficient
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds in the source account.');
    END IF;
    
    -- Deduct from source account
    UPDATE Accounts
    SET Balance = Balance - p_Amount
    WHERE AccountID = p_FromAccountID;
    
    -- Add to destination account
    UPDATE Accounts
    SET Balance = Balance + p_Amount
    WHERE AccountID = p_ToAccountID;
    
    -- Commit the transaction
    COMMIT;
    
    DBMS_OUTPUT.PUT_LINE('Successfully transferred $' || p_Amount || 
                         ' from Account ' || p_FromAccountID || 
                         ' to Account ' || p_ToAccountID || '.');
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error during funds transfer: ' || SQLERRM);
END TransferFunds;
/
