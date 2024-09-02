import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div>&copy; 2024 MoM Application</div>
            <nav>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#contact">Contact Us</a>
            </nav>
        </footer>
    );
};

export default Footer;
