import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Gulshan<span>Makeovers</span></h1>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a>Home</a></li>
                <li><a>Services</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
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
