import React, { useState } from 'react';



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
        method: 'POST',}
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
        <div className="form-group">
          <label>Username:</label> 
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required        
            className="form-control"
            placeholder="Enter your username"
          />
        </div> 

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"  
            name="email"
            value={formData.email}
            onChange={handleChange}   
            required
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input      
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"     
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange} 
            required
            className="form-control"
            placeholder="Confirm your password"
          />
        </div>

        <div className="form-group">
          <label>Street:</label>
          <input  
            type="text"
            name="street"
            value={formData.street}             
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter your street address"
          />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city} 
            onChange={handleChange}
            required
            className="form-control"
            placeholder="Enter your city"
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input  
            type="text"
            name="state"
            value={formData.state} 
            onChange={handleChange}     
            required  
            className="form-control"
            placeholder="Enter your state"
          />
        </div>

        <div className="form-group">
          <label>Zip Code:</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange} 
            required
            className="form-control"
            placeholder="Enter your zip code"
          />
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
} 

        



