import React, { useState } from 'react';
import SkillCard from '../SkillCard';

const skillsData = {
    frontend: [
        { name: 'HTML', logo: 'Image/html.png', percentage: '50%' },
        { name: 'CSS', logo: 'Image/css.png', percentage: '40%' },
        { name: 'JAVASCRIPT', logo: 'Image/javascript.png', percentage: '30%' },
    ],
    backend: [
        { name: 'C++', logo: 'Image/C++.png', percentage: '30%' },
        { name: 'Python', logo: 'Image/python.png', percentage: '40%' },
        { name: 'Java', logo: 'Image/java.png', percentage: '30%' },
    ],
    webdev: [
        // Note: The original HTML uses the MySQL image for React
        { name: 'React', logo: 'Image/mysql.png', percentage: '30%' },
        { name: 'Database', logo: 'Image/sql.png', percentage: '50%' },
    ],
};

const SkillsPage = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    return (
        <div className="page-content" id="skills-page">
            <div className="skills-container">
                <h1 className="skills-title">My Skills</h1>
                
                <div className="skills-nav">
                    <div 
                        className={`nav-item ${activeTab === 'frontend' ? 'active' : ''}`} 
                        data-tab="frontend"
                        onClick={() => setActiveTab('frontend')}
                    >
                        Frontend
                    </div>
                    <div 
                        className={`nav-item ${activeTab === 'backend' ? 'active' : ''}`} 
                        data-tab="backend"
                        onClick={() => setActiveTab('backend')}
                    >
                        Backend
                    </div>
                    <div 
                        className={`nav-item ${activeTab === 'webdev' ? 'active' : ''}`} 
                        data-tab="webdev"
                        onClick={() => setActiveTab('webdev')}
                    >
                        Web Dev
                    </div>
                </div>

                <div className="skills-content">
                    {/* Frontend Tab */}
                    <div className={`skill-section ${activeTab === 'frontend' ? 'active' : ''}`} id="frontend-tab">
                        <div className="skills-grid">
                            {skillsData.frontend.map((skill) => (
                                <SkillCard 
                                    key={skill.name}
                                    skillName={skill.name}
                                    logoSrc={skill.logo}
                                    percentage={skill.percentage}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Backend Tab */}
                    <div className={`skill-section ${activeTab === 'backend' ? 'active' : ''}`} id="backend-tab">
                        <div className="skills-grid">
                            {skillsData.backend.map((skill) => (
                                <SkillCard 
                                    key={skill.name}
                                    skillName={skill.name}
                                    logoSrc={skill.logo}
                                    percentage={skill.percentage}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Web Dev Tab */}
                    <div className={`skill-section ${activeTab === 'webdev' ? 'active' : ''}`} id="webdev-tab">
                        <div className="skills-grid web-dev-grid">
                            {skillsData.webdev.map((skill) => (
                                <SkillCard 
                                    key={skill.name}
                                    skillName={skill.name}
                                    logoSrc={skill.logo}
                                    percentage={skill.percentage}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsPage;