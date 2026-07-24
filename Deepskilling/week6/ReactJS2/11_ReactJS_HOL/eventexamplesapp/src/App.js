import React, { useState } from 'react';
import './App.css';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('80');
  const [currency, setCurrency] = useState('Euro');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (amount) {
      // Functional requirement: alert matching the image logic (e.g. 80 * 80 = 6400)
      const conv = parseFloat(amount) * 80;
      alert(`Converting to ${currency} Amount is ${conv}`);
    }
  };

  return (
    <div className="card">
      <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount: <br/>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </label>
        <br/><br/>
        <label>
          Currency: <br/>
          <input 
            type="text" 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)} 
          />
        </label>
        <br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(1);

  // 1a. Increment value
  const increment = () => {
    setCount(c => c + 1);
  };

  // 1b. Say Hello
  const sayHello = () => {
    alert("Hello");
  };

  // Invoke multiple methods
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement value
  const decrement = () => {
    setCount(c => c - 1);
  };

  // 2. Invokes function which takes "welcome" as an argument
  const sayWelcome = (msg) => {
    alert("Message: " + msg);
  };

  // 3. Invokes synthetic event to display "I was clicked"
  const onPress = (e) => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h1>React Events Demo</h1>
      
      <div className="card">
        <h2>Counter: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div className="card">
        <h2>Arguments in Event Handlers</h2>
        <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      </div>

      <div className="card">
        <h2>Synthetic Events</h2>
        <button onClick={onPress}>Click on me</button>
      </div>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
