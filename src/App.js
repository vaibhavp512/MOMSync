import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import RecentMoMs from './components/RecentMoMs';
import CalendarComponent from './components/CalendarComponent';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    //const [isSignedUp, setIsSignedUp] = useState(false);

    const handleSignIn = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
       // setIsSignedUp(false);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                    {!isAuthenticated ? (
                        <Route path="/" element={<SignIn onSignIn={handleSignIn} />} />
                    ) : (
                        <>
                            <Route path="/" element={
                                <>
                                    <Header onLogout={handleLogout} />
                                    <HeroSection />
                                    <Features />
                                    <RecentMoMs />
                                    <Footer />
                                </>
                            } />
                            <Route path="/calendar" element={
                                <>
                                    <Header onLogout={handleLogout} />
                                    <CalendarComponent />
                                    <Footer />
                                </>
                            } />
                            <Route path="*" element={<Navigate to="/" />} />
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
