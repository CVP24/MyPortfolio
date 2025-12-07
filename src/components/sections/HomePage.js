import React from 'react';

const HomePage = ({ onNavigate }) => {
    return (
        <div className="hero-section">
            <h1 className="main-title">
                <span className="chris">CHRIS</span>
                <span className="creates">CREATES</span>
            </h1>
            
            <div className="cta-buttons">
                <a href="#projects" className="cta-btn project-btn" onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}>
                    PROJECT
                    <span className="btn-hover-effect"></span>
                </a>
                <a href="#contact" className="cta-btn contact-btn" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>
                    CONTACT
                    <span className="btn-hover-effect"></span>
                </a>
            </div>
        </div>
    );
};

export default HomePage;