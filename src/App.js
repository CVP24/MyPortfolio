import React, { useState } from 'react'; // <--- MUST INCLUDE { useState }
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';

// Section Components - CHECK THESE PATHS CAREFULLY!
import HomePage from './components/sections/HomePage';
import ProjectsPage from './components/sections/ProjectsPage';
import ProjectDetailPage from './components/sections/ProjectDetailPage';
import SkillsPage from './components/sections/SkillsPage';
import AboutPage from './components/sections/AboutPage';
import ContactPage from './components/sections/ContactPage';

const App = () => {
    // The initial state controls which page is visible
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);
    };

    const handleShowProjectDetail = () => {
        setCurrentPage('project-detail'); 
    };
    
    // Renders the correct component based on state
    const renderPage = () => {
        switch (currentPage) {
            case 'projects':
                return <ProjectsPage onShowDetail={handleShowProjectDetail} />;
            case 'project-detail':
                return <ProjectDetailPage />;
            case 'skills':
                return <SkillsPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            case 'home':
            default:
                // Only HomePage uses the original 'main-content' class
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        // The main container and structure
        <div>
            <AnimatedBackground />
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            
            <main className={currentPage === 'home' ? 'main-content' : ''}>
                {renderPage()}
            </main>
        </div>
        
    );
};

export default App; // <--- MUST HAVE THIS LINE