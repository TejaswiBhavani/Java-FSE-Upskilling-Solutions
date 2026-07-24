import React, { useState } from 'react';
import './App.css';

// Component for logged-in users
function UserGreeting(props) {
  return (
    <div className="view-container user-view">
      <h2>Welcome User!</h2>
      <p>You can now proceed to book your tickets.</p>
      <button className="book-btn">Book Tickets</button>
    </div>
  );
}

// Component for guests
function GuestGreeting(props) {
  return (
    <div className="view-container guest-view">
      <h2>Please sign up or login</h2>
      <div className="flight-details">
        <h3>Available Flights:</h3>
        <ul>
          <li>✈️ Mumbai to Delhi (Air India) - <strong>Rs 5,000</strong></li>
          <li>✈️ Bangalore to Chennai (IndiGo) - <strong>Rs 3,500</strong></li>
          <li>✈️ Hyderabad to Kolkata (SpiceJet) - <strong>Rs 4,200</strong></li>
        </ul>
        <p className="note">Guest users can only browse flight details. Please login to book.</p>
      </div>
    </div>
  );
}

// Element variable/Conditional Component
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Event handlers to manage state
  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  }

  // Define element variables for conditional rendering of buttons
  let button;
  if (isLoggedIn) {
    button = <button className="logout-btn" onClick={handleLogoutClick}>Logout</button>;
  } else {
    button = <button className="login-btn" onClick={handleLoginClick}>Login</button>;
  }

  return (
    <div className="App">
      <h1>Ticket Booking App</h1>
      
      {/* Conditionally rendered greeting component */}
      <Greeting isLoggedIn={isLoggedIn} />
      
      {/* Conditionally rendered button using element variables */}
      <div className="controls">
        {button}
      </div>
    </div>
  );
}

export default App;
