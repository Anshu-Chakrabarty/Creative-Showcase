import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav>
      <div className="nav-brand">
        
        <Link to="/" style={{ fontSize: '1.5rem', color: '#bb86fc', textDecoration: 'none' }}>
          ✨ ArtSpace
        </Link>
      </div>

      <div className="nav-links">
        {user ? (
          <>
            <span style={{ marginRight: '15px', color: '#888' }}>
              Hi, {user.username}
            </span>
            <Link to="/dashboard">Dashboard</Link>
            <Link to={`/profile/${user.username}`}>My Public Page</Link>
            <button 
              onClick={handleLogout} 
              className="logout-btn"
              style={{ marginLeft: '20px', padding: '5px 15px', fontSize: '0.9rem' }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="cta-btn">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;