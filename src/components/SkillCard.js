import React from 'react';

const SkillCard = ({ skillName, logoSrc, percentage }) => {
  return (
    <div className="skill-card">
        <div className="skill-logo">
            <img src={logoSrc} alt={skillName} />
        </div>
        <div className="skill-info">
            <span className="skill-name">{skillName}</span>
            <div className="progress-container">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: percentage }}></div>
                </div>
                <span className="percentage">{percentage}</span>
            </div>
        </div>
    </div>
  );
};

export default SkillCard;