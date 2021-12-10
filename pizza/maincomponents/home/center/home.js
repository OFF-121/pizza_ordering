import React from 'react'

import './home.css'


import background from '../../../assests/pizza.jpeg';

export default function Home() {
    return (
        <div className="center"  style={{backgroundImage: `url(${background})`}}>
            <div className="content">
                <h1>Pizza Hut</h1>
                <h3>Anyone who says that money cannot buy happiness has clearly <br/>never spent their money on pizza</h3>
                <button>Order Now!!</button><br/>
            </div>
        </div>
    )
}
