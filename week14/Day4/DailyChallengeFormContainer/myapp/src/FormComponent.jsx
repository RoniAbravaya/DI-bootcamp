// FormComponent.js
import React from 'react';

function FormComponent({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input 
          type="text" 
          name="firstName" 
          value={formData.firstName} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Last Name:
        <input 
          type="text" 
          name="lastName" 
          value={formData.lastName} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Age:
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Gender:
        <select 
          name="gender" 
          value={formData.gender} 
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Destination:
        <select 
          name="destination" 
          value={formData.destination} 
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="Germany">Germany</option>
        </select>
      </label>
      <br />
      <label>
        Dietary restrictions:
      </label>
      <br />
      <input 
        type="checkbox" 
        name="lactoseFree" 
        checked={formData.lactoseFree} 
        onChange={handleChange} 
      /> Lactose Free
      <br />
      <input 
        type="checkbox" 
        name="nutsFree" 
        checked={formData.nutsFree} 
        onChange={handleChange} 
      /> Nuts Free
      <br />
      <input 
        type="checkbox" 
        name="vegan" 
        checked={formData.vegan} 
        onChange={handleChange} 
      /> Vegan meal
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
