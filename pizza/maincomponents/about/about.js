import React from 'react'
import multiplePizzas from '../../assests/multiplePizzas.jpeg';


import './about.css'
export default function About() {
    return (
        <div>
            <div>
                <img src={multiplePizzas}  alt="about" className="about-img"/>
            </div>
            <section className="abt-container">
                <div className="abt-name">ABOUT US</div>
                <div className="abt-lorem">With PizzaHut's it is always “HAPPINESS”.
                 Whether it's a treat for your promotion,<strong> a kid topping his class or winning 
                 the heart of your wife who is too tired to cook after a long day at work! </strong>
                 A cheesy slice of the best pizza is all one needs to put things into 
                 perspective and start any celebration. Plus, you do not even need to rush to 
                 the restaurant to have one now. A call, a few clicks on our website or a few 
                 touches on the mobile screen is all you have to do to have that tempting, 
                 light-on-the-pocket pizza at your doorstep.              
                </div>
            </section>


        </div>
    )
}
