import React from 'react';

const ProjectsPage = ({ onShowDetail }) => {
    return (
        <div className="page-content" id="projects-page">
            <div className="projects-section">
                <h1 className="projects-title">PROJECTS</h1>
                
                <p className="projects-description">
                    These project represents my journey as a student exploring different areas of computer science. 
                    Through them, I've learned how to write efficient code, analyze data, and build user-friendly applications.
                </p>
                
                <div className="project-grid">
                    <div className="project-card">
                        <div className="project-image">
                            <img src="Image/image2.png" alt="EasyPay Project" className="project-main-img" />
                            <img src="Image/image1.jpg" alt="Project Details" className="project-hover-img" />
                        </div>
                        <div className="project-info">
                            <h2 className="project-name">EasyPay</h2>
                            <button className="details-btn" onClick={onShowDetail}>
                                View Details
                                <span className="btn-hover-effect"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;