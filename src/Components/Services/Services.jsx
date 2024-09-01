import React from 'react'
import './Services.css';
import hair from '../../assets/hair.jpg'
import facial from '../../assets/facial.jpg'
import mani from '../../assets/mani.jpg'
import makeUp from '../../assets/makeup.jpg'

const Services = () => {
    return (
        <div id='services' className="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service-card">
                    <img src={hair} alt="Hair Styling" />
                    <h3>Hair Styling</h3>
                    <p>Professional hair styling services tailored to your needs.</p>
                </div>
                <div className="service-card">
                    <img src={facial} alt="Facials" />
                    <h3>Facials</h3>
                    <p>Rejuvenate your skin with our customized facials.</p>
                </div>
                <div className="service-card">
                    <img src={mani} alt="Manicure & Pedicure" />
                    <h3>Manicure & Pedicure</h3>
                    <p>Indulge in our luxurious manicure and pedicure services.</p>
                </div>
                <div className="service-card">
                    <img src={makeUp} alt="Makeup Services" />
                    <h3>Makeup Services</h3>
                    <p>Enhance your beauty with our professional makeup services.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
