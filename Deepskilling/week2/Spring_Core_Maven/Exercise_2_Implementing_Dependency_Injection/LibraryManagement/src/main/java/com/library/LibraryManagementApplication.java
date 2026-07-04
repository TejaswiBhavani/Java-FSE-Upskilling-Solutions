package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class LibraryManagementApplication {
    public static void main(String[] args) {
        // Load the Spring application context
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        
        System.out.println("ApplicationContext successfully loaded!\n");
        
        // Retrieve the BookService bean
        BookService bookService = (BookService) context.getBean("bookService");
        
        // Test the configuration (This will now also invoke BookRepository internally)
        bookService.manageBooks();
    }
}
