import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'

const About = () => {
    return (
        <div id='about' className="about-section">
            <div className="about-image">
                <img src={about} alt="About Us" />
            </div>
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    Welcome to our beauty parlor, where elegance and beauty meet relaxation. Our mission is to
                    provide our clients with the highest level of service and expertise in a soothing and
                    luxurious environment. With a team of highly skilled professionals, we offer a wide range
                    of beauty services tailored to meet your individual needs.
                </p>
                <p>
                    Whether you're here for a simple haircut, a revitalizing facial, or a complete makeover, we
                    ensure you leave feeling refreshed, beautiful, and confident. Our dedication to excellence
                    and our passion for beauty make us your perfect choice for all your beauty needs.
                </p>
                <a href="#services" className="about-button">Discover Our Services</a>
            </div>
        </div>
    )
}

export default About
