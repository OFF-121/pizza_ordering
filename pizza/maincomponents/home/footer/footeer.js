import React from 'react'
import FontAwesome from 'react-fontawesome'


import './footer.css'
export default function Footeer() {
    return (
        <div className="container">
            <div className="iconsConatiner">
                <FontAwesome name="cat" className="icons"/>
                <FontAwesome name="dog" className="icons"/>
                <FontAwesome name="cat" className="icons"/>
                <FontAwesome name="dog" className="icons"/>
            </div >
            <div className="pp">
            <p id="p">@2021pizzahut.in contact us</p>
            </div>
        </div>
    )
}
