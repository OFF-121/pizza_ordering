import React from 'react';
import PizzaLeft from '../../assests/pizzaLeft.jpg';
import './contact.css';
const Contact=()=>{
    return(
        <div className="contact-container">
            <img src={PizzaLeft} alt="contact-img" className="contact-img"/>
            <section className="contact-section">
                <h1 className="contectus">Contact Us</h1>
                <label className="contact-Labelname">Name </label>
                <input type="text" className="contact-name"/>
                <label className="contact-Labelemail">Email </label>
                <input type="email" className="contact-email"/>
                <label className="contact-message">Message </label>
                <textarea className="contact-message" rows="7" cols="50"/>
                <button type="submit">Submit</button>
            </section>
        </div>
    )
}

export default Contact;