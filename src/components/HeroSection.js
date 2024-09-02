import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [draft, setDraft] = useState('');

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSubmit = () => {
        // Handle the submission logic here, e.g., save to a database or state
        alert(`MoM Submitted: ${draft}`);
        setShowPopup(false);
        setDraft('');  // Clear the draft after submission
    };

    return (
        <section className="hero">
            <h1>Capture and Manage Your Meetings Efficiently</h1>
            <p>Organize your meeting minutes in one place, easily accessible and shareable.</p>
            <button className="cta-button" onClick={handleButtonClick}>
                Create New MoM
            </button>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Draft Your MoM</h2>
                        <textarea 
                            value={draft}
                            onChange={(e) => setDraft(e.target.value)}
                            placeholder="Write your minutes of meeting here..."
                        />
                        <div className="popup-actions">
                            <button className="submit-button" onClick={handleSubmit}>
                                Submit
                            </button>
                            <button className="close-button" onClick={handleClosePopup}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default HeroSection;
