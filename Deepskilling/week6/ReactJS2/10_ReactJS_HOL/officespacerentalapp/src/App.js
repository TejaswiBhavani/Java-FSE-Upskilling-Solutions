import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      name: 'DBS',
      rent: 50000,
      address: 'Chennai',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'WeWork',
      rent: 80000,
      address: 'Bangalore',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="App" style={{ padding: '40px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '40px' }}>Office Space, at Affordable Range</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>
        {offices.map((office, index) => (
          <div key={index} style={{ textAlign: 'left', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '400px' }}>
            <img 
              src={office.image} 
              alt={office.name} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }} 
            />
            <h2>Name: {office.name}</h2>
            <h3 style={{ color: office.rent <= 60000 ? 'red' : 'green' }}>
              Rent: Rs. {office.rent}
            </h3>
            <h3>Address: {office.address}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
