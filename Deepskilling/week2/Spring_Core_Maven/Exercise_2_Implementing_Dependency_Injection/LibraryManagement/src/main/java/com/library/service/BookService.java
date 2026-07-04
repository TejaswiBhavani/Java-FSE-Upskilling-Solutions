package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    
    private BookRepository bookRepository;
    
    // Setter method for Dependency Injection via Spring
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    
    public void manageBooks() {
        System.out.println("Managing library books (BookService)...");
        // We verify that the dependency was injected successfully
        if (bookRepository != null) {
            bookRepository.fetchBooks();
        } else {
            System.err.println("Dependency Injection failed: BookRepository is null.");
        }
    }
}
