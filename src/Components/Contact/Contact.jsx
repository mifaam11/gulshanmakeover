import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className="contact">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
