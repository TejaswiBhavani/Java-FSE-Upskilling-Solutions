package com.example;

import static org.mockito.Mockito.*; 
import org.junit.jupiter.api.Test; 
import org.mockito.Mockito; 

public class MyServiceTest { 
    @Test 
    public void testVerifyInteraction() { 
        // 1. Create a mock object.
        ExternalApi mockApi = Mockito.mock(ExternalApi.class); 
        
        MyService service = new MyService(mockApi); 
        
        // 2. Call the method with specific arguments (no args in this case).
        service.fetchData(); 
        
        // 3. Verify the interaction.
        // This ensures that mockApi.getData() was called exactly once during the test.
        verify(mockApi).getData(); 
    } 
}
