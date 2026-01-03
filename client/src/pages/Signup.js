import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(false);
    
    try {
      // Connects to the server/routes/auth.js register endpoint
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });

      // If successful, redirect to login page
      if(res.data) {
        navigate('/login');
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="auth-form">
      <h2 style={{ textAlign: 'center' }}>Join ArtSpace</h2>
      
      <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <label>Username</label>
        <input 
          type="text" 
          placeholder="Choose a unique username" 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          placeholder="Enter your email" 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label>Password</label>
        <input 
          type="password" 
          placeholder="Create a password" 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        {error && <span style={{ color: 'red', textAlign: 'center' }}>Something went wrong! Try a different username.</span>}

        <button type="submit" style={{ marginTop: '10px' }}>Create Account</button>
      </form>
      
      <p style={{ textAlign: 'center', marginTop: '15px', color: '#888' }}>
        Already have an account? <Link to="/login" style={{ color: '#bb86fc' }}>Login</Link>
      </p>
    </div>
  );
};

export default Signup;