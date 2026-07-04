package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.repository.BookRepository;
import com.library.service.BookService;

public class Main {
    public static void main(String[] args) {
        // 1. Load the Spring application context from the XML configuration file
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        
        System.out.println("ApplicationContext successfully loaded!\n");
        
        // 2. Retrieve the beans configured in applicationContext.xml
        BookRepository bookRepository = (BookRepository) context.getBean("bookRepository");
        BookService bookService = (BookService) context.getBean("bookService");
        
        // 3. Test the configuration by invoking methods on the beans
        bookRepository.fetchBooks();
        bookService.manageBooks();
    }
}
