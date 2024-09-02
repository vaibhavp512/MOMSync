import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = ({ onLogout }) => {
    return (
        <header className="header">
            <h1 className="logo">MOMSync</h1>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/features">Features</a></li>
                    <li><a href="/recent">Recent MOMs</a></li>
                    <Link to="/calendar">Calendar</Link>
                    {/*<button onClick={onLogout}>Logout</button>*/}
                    <button onClick={onLogout} className="logout-button">Logout</button>
                </ul>
            </nav>
            
        </header>
    );
};

export default Header;
