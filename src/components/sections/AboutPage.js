import React from 'react';

const AboutPage = () => {
    return (
        <div className="page-content" id="about-page">
            <div className="about-container">
                <h1 className="about-title">About Me</h1>
                
                <div className="profile-section">
                    <div className="profile-picture">
                        <img src="Image/Me.jpg" alt="Profile" className="Me-img" />
                    </div>
                    <div className="about-content">
                        <p className="about-greeting">Hello, I'm</p>
                        <h2 className="name">Chris</h2>
                        <p className="about-text">
                            A passionate student with a strong foundation in Computer Science. 
                            I thrive on solving complex problems and turning ideas into efficient, 
                            user-friendly digital solutions. My journey involves continuous learning 
                            and exploring new technologies to build modern applications.
                        </p>
                    </div>
                </div>
                
                <div className="divider"></div>

                <div className="info-section">
                    <div className="skill-category">
                        <h3>
                            <div className="skill-title-logo">
                                <img src="Image/frontend.png" alt="Frontend Icon" />
                            </div>
                            Frontend Development
                        </h3>
                        <p>
                            Focused on creating engaging and responsive user interfaces with HTML, CSS, 
                            JavaScript, and modern frameworks like React. I prioritize user experience and 
                            clean, semantic code.
                        </p>
                    </div>
                    
                    <div className="skill-category">
                        <h3>
                            <div className="skill-title-logo">
                                <img src="Image/backend.png" alt="Backend Icon" />
                            </div>
                            Backend Development
                        </h3>
                        <p>
                            Experienced in developing robust server-side applications, managing databases, 
                            and building RESTful APIs. I focus on performance and security.
                        </p>
                    </div>
                    
                    <div className="skill-category">
                        <h3>
                            <div className="skill-title-logo">
                                <img src="Image/webdev.png" alt="Web Development Icon" />
                            </div>
                            Web Dev
                        </h3>
                        <p>
                            Creating full-stack web applications with focus on performance and user experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;