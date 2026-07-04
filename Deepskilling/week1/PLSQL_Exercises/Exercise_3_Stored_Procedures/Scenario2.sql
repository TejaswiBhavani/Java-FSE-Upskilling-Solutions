-- Scenario 2: Implement a bonus scheme for employees

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    p_Department IN VARCHAR2,
    p_BonusPercentage IN NUMBER
) IS
BEGIN
    -- Add the bonus percentage to the salary of employees in the specified department
    UPDATE Employees
    SET Salary = Salary + (Salary * (p_BonusPercentage / 100))
    WHERE Department = p_Department;
    
    -- Commit the changes
    COMMIT;
    
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_BonusPercentage || '% applied to employees in the ' || p_Department || ' department.');
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating employee bonuses: ' || SQLERRM);
END UpdateEmployeeBonus;
/
