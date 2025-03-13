// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="hero-content">
                <h1 className="animated-title">
                    <span className="gradient-text">Pearl Restaurant</span>
                </h1>
                <p className="subtitle">Fine Dining & Luxury Experience</p>
                
                <div className="navigation-buttons">
                    <button 
                        className="neon-button"
                        onClick={() => navigate('/booking')} // Navigate to Booking page
                    >
                        Book a Table
                    </button>
                    <button 
                        className="neon-button"
                        onClick={() => navigate('/menu')}
                    >
                        Explore Menu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;