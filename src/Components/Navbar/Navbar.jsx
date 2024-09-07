import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleMenuClick = () => {
        setIsOpen(false);
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Gulshan<span>Makeovers</span></h1>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href='#' onClick={handleMenuClick}>Home</a></li>
                <li><a href='#services' onClick={handleMenuClick}>Services</a></li>
                <li><a href='#about' onClick={handleMenuClick}>About</a></li>
                <li><a href='#contact' onClick={handleMenuClick}>Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    )
}

export default Navbar
