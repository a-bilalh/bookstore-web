import React, { useState } from 'react';
import FormInput from './components/FormInput'; 


function Registration() {
  const [formData, setFormData] = useState({

    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    state: '',
    zip: '',

  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    } 
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });     
      if (response.ok) {
        alert('Registration successful!');
        setFormData({   
          username: '',
          email: '',
          password: '',   
          confirmPassword: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }         
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="registration-container">
      <h2>Register</h2> 
      <form onSubmit={handleSubmit} className="registration-form">
        
        <FormInput
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required ={true}
          placeHolder="Enter your username"
        />
        
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required ={true}
          placeHolder="Enter your email"
        />

        <FormInput
          label="Password"
          type="password"
          name="password" 
          value={formData.password}
          onChange={handleChange}
          required ={true}
          placeHolder="Enter your password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required ={true}
          placeHolder="Confirm your password"
        />

        <FormInput
          label="Street"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required ={true}
          placeHolder="Enter your street"
        />

        <FormInput
          label="City"
          type="text"
          name="city" 
          value={formData.city}
          onChange={handleChange}
          required ={true}
          placeHolder="Enter your city"
        />

        <FormInput
          label="State"
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required ={true}
          placeHolder="Enter your state"
        />

        <FormInput
          label="Zip"
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required ={true}
          placeHolder="Enter your zip code"
        />

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
} 

        

export default Registration; 

