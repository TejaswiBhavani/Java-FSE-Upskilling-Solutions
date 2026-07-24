import React from 'react';
import './App.css';

// 1. Course Details Component 
// Demonstrates Conditional Rendering via Logical && Operator
function CourseDetails({ courses }) {
  return (
    <div className="column">
      <h2>Course Details</h2>
      {/* Conditional rendering: only renders if array is not empty */}
      {courses.length > 0 && courses.map((course) => (
        // Rendering multiple components using map() and extracting with a unique 'key'
        <div key={course.id} className="item-card">
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

// 2. Book Details Component 
// Demonstrates Conditional Rendering via Ternary Operator ( ? : )
function BookDetails({ books }) {
  return (
    <div className="column">
      <h2>Book Details</h2>
      {/* Conditional rendering: ternary checks if books prop exists and maps it, else shows fallback */}
      {books ? (
        books.map((book) => (
          <div key={book.id} className="item-card">
            <h3>{book.title}</h3>
            <p>{book.pages}</p>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
}

// 3. Blog Details Component 
// Demonstrates Conditional Rendering via early return (if/else statement)
function BlogDetails({ blogs }) {
  // Conditional rendering: if condition is met, returns alternative JSX immediately
  if (!blogs || blogs.length === 0) {
    return (
      <div className="column">
        <h2>Blog Details</h2>
        <p>No blogs to display.</p>
      </div>
    );
  }

  return (
    <div className="column">
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <div key={blog.id} className="item-card">
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  // Creating Arrays of Objects to act as our Lists
  const coursesData = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/20201' }
  ];

  const booksData = [
    { id: 1, title: 'Master React', pages: 670 },
    { id: 2, title: 'Deep Dive into Angular 11', pages: 800 },
    { id: 3, title: 'Mongo Essentials', pages: 450 }
  ];

  const blogsData = [
    { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' }
  ];

  return (
    <div className="App">
      <div className="grid-container">
        {/* Pass array data to the components to be rendered as lists */}
        <CourseDetails courses={coursesData} />
        <div className="divider"></div>
        <BookDetails books={booksData} />
        <div className="divider"></div>
        <BlogDetails blogs={blogsData} />
      </div>
    </div>
  );
}

export default App;
