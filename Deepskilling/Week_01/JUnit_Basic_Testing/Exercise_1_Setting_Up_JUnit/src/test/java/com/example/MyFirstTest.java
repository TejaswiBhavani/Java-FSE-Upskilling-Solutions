package com.example;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class MyFirstTest {

    @Test
    public void testAddition() {
        int expected = 5;
        int actual = 2 + 3;
        // Using JUnit 4 assertions
        assertEquals("2 + 3 should equal 5", expected, actual);
    }

    @Test
    public void testCondition() {
        // Simple true condition test
        assertTrue("10 is greater than 5", 10 > 5);
    }
}
