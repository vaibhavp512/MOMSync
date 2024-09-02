import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <section className="features">
            <div className="feature">
                <h3>Easy MoM Creation</h3>
                <p>Quick and simple process to create minutes.</p>
            </div>
            <div className="feature">
                <h3>Team Collaboration</h3>
                <p>Share MoMs with your team effortlessly.</p>
            </div>
            <div className="feature">
                <h3>Searchable Archive</h3>
                <p>Easily find past meetings with powerful search tools.</p>
            </div>
            <div className="feature">
                <h3>Custom Templates</h3>
                <p>Use pre-built templates for different types of meetings.</p>
            </div>
        </section>
    );
};

export default Features;
