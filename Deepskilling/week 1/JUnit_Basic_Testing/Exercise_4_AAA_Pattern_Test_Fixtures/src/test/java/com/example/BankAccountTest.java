package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class BankAccountTest {

    private BankAccount account;

    // Test Fixture Setup
    @Before
    public void setUp() {
        System.out.println("Running setup before a test...");
        // Setting up a clean, fresh object before every single test
        account = new BankAccount(100.0);
    }

    // Test Fixture Teardown
    @After
    public void tearDown() {
        System.out.println("Running teardown after a test...");
        // Cleaning up state after the test has run
        account = null; 
    }

    @Test
    public void testDeposit() {
        // --- ARRANGE ---
        // (Initial setup is already done in @Before where balance is 100)
        double depositAmount = 50.0;
        double expectedBalance = 150.0;

        // --- ACT ---
        account.deposit(depositAmount);

        // --- ASSERT ---
        assertEquals("Balance should reflect the deposit", expectedBalance, account.getBalance(), 0.001);
    }

    @Test
    public void testWithdraw() {
        // --- ARRANGE ---
        double withdrawAmount = 30.0;
        double expectedBalance = 70.0;

        // --- ACT ---
        account.withdraw(withdrawAmount);

        // --- ASSERT ---
        assertEquals("Balance should reflect the withdrawal", expectedBalance, account.getBalance(), 0.001);
    }
}
