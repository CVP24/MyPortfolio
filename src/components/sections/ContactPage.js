import React from 'react';

const ContactPage = () => {
    return (
        <div className="page-content" id="contact-page">
            <div className="contact-section">
                <div className="contact-container">
                    <h1 className="contact-title">Get In Touch</h1>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h2 className="info-title">Contact Information</h2>
                            
                            {/* Contact Item 1: Email */}
                            <a href="mailto:cvpayte821.bbox@parsu.edu.ph" className="contact-link">
                                <div className="contact-item">
                                    <div className="icon-wrapper">
                                        <img src="Image/icon1.png" alt="Email icon" />
                                    </div>
                                    <div className="contact-text">
                                        <h3 className="item-label">Email</h3>
                                        <p className="item-value">cvpayte821.bbox@parsu.edu.ph</p>
                                    </div>
                                </div>
                            </a>

                            {/* Contact Item 2: Phone */}
                            <a href="tel:+639771149254" className="contact-link">
                                <div className="contact-item">
                                    <div className="icon-wrapper">
                                        <img src="Image/icon2.png" alt="Phone icon" />
                                    </div>
                                    <div className="contact-text">
                                        <h3 className="item-label">Phone</h3>
                                        <p className="item-value">+63 9771149254</p>
                                    </div>
                                </div>
                            </a>

                            {/* Contact Item 3: Location */}
                            <div className="contact-item">
                                <div className="icon-wrapper">
                                    <img src="Image/icon3.png" alt="Location icon" />
                                </div>
                                <div className="contact-text">
                                    <h3 className="item-label">Location</h3>
                                    <p className="item-value">Partido State University</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="message-section">
                            <h2 className="info-title">Send a Message</h2>
                            <form className="message-form" action="#">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input type="text" id="name" className="form-input" placeholder="Enter your full name" required />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" className="form-input" placeholder="Enter your email" required />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea id="message" className="form-textarea" rows="5" placeholder="Your message here..." required></textarea>
                                </div>
                                
                                <button type="submit" className="send-btn">
                                    Send Message
                                    <img src="Image/icon4.png" alt="Send Icon" />
                                    <span className="btn-hover-effect"></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;