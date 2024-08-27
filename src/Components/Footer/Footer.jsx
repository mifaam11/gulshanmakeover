import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h2>About Us</h2>
                    <p>
                        We are dedicated to providing the best beauty services to make you feel confident and beautiful.
                        Our professional team ensures a luxurious experience every time you visit.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Make Over By Gulshan | Designed by <a href='#'>Mohd Ifam</a></p>
            </div>
        </footer>
    )
}

export default Footer
