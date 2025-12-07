import React from 'react';

const Navbar = ({ currentPage, onNavigate }) => {
    // Array of navigation links
    const navLinks = [
        { id: 'home', text: 'Home' },
        { id: 'projects', text: 'Projects' },
        { id: 'skills', text: 'Skills' },
        { id: 'about', text: 'About' },
        { id: 'contact', text: 'Contact' },
    ];

    const handleNavClick = (e, pageId) => {
        e.preventDefault();
        onNavigate(pageId);
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <div className="logo-placeholder">
                    <span className="logo-text">CC</span>
                </div>
            </div>
            <div className="nav-links">
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
                        data-page={link.id}
                        onClick={(e) => handleNavClick(e, link.id)}
                    >
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;