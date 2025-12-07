import React from 'react';

const ProjectDetailPage = () => {
    return (
        <div className="page-content" id="project-detail-page">
            <div className="project-detail-section">
                <div className="project-detail-container">
                    <div className="project-header">
                        <h1 className="project-main-title">EasyPay</h1>
                    </div>
                    
                    <div className="project-content">
                        <div className="project-description">
                            <p className="project-text">
                                This is a payment platform like (gcash) prototype that I designed to help people 
                                pay their bills in the middle of quarantine where people don't go outside. It features 
                                a simple user interface for sending and receiving payments, balance tracking, 
                                and transaction history. The prototype focuses on demonstrating how digital payments 
                                can be processed efficiently using modern web technologies, ensuring both 
                                convenience and security.
                            </p>
                        </div>
                        
                        <div className="project-image-section">
                            <div className="project-image-main">
                                <img src="Image/image3.png" alt="EasyPay Project" className="project-detail-img" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-actions">
                        <a href="https://www.figma.com/design/Dsq3eMoHjDAJnEpyB84yBk/Midterm-Project---Prototype?t=oYinJ7CyvmZZ8um0-0" target="_blank" rel="noopener noreferrer" className="view-prototype-btn">
                            View Prototype
                            <span className="btn-hover-effect"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;