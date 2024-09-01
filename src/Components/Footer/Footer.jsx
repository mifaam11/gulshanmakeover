import React from 'react'
import './Footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


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
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-links">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 <span>GulshanMakeovers</span> | Designed by <a target='blank' href='https://www.instagram.com/ifam07?igsh=MWtxMTlzZDdiN2tuag=='>Mohd Ifam</a></p>
            </div>
        </footer>
    )
}

export default Footer
