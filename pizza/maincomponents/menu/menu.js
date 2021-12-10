import React from 'react'

import './menu.css'
import MENU from './MenuItems';

export default function Menu() {
    return (
        <div className="menu-mainContainer">
            <div className="name">
                <h1>Our Menus</h1>
            </div>
            <section className="layout">
                {MENU.map((item,key) =>{
                    return(
                        <section className="menu-container">
                        <div className="content">
                            <img src={item.image} alt="img1"/>
                        </div>
                        <div className="detials" key={item.key}>
                            <h4 className="itemName"><strong>{item.name}</strong></h4>
                            <p className="itemPrice">Half : {item.cost1}/-</p>
                            <p className="itemPrice">Full : {item.cost2}/-  </p>
                         </div>
                    </section>
                    )
                    })}
            </section>
        </div>
    )
}
