// App.js
import React, { useState } from 'react';
import FormComponent from './FormComponent';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    lactoseFree: false,
    nutsFree: false,
    vegan: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    const url = `http://localhost:5173/?${queryParams}`;
    window.location.href = url;
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <FormComponent 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
      />
      {submittedData && (
        <div className="submitted-info">
          <h2>Entered information:</h2>
          <p>Your name: {submittedData.firstName} {submittedData.lastName}</p>
          <p>Your age: {submittedData.age}</p>
          <p>Your gender: {submittedData.gender}</p>
          <p>Your destination: {submittedData.destination}</p>
          <p>Your dietary restrictions:</p>
          <ul>
            <li>Nuts free: {submittedData.nutsFree ? 'Yes' : 'No'}</li>
            <li>Lactose free: {submittedData.lactoseFree ? 'Yes' : 'No'}</li>
            <li>Vegan meal: {submittedData.vegan ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
