import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom';

import NavBar from './maincomponents/home/Navbar/navbar';
import Home from './maincomponents/home/center/home';
import About from './maincomponents/about/about';
import Footeer from './maincomponents/home/footer/footeer';
import Menu from './maincomponents/menu/menu'
import Contact from './maincomponents/contact/contact'


export default function Container() {
    return (
        <div>
             <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/About" exact component={About}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Menu" exact component={Menu}/>
                    <Route path="/Contact" exact component={Contact}/>
                </Switch>
                <Footeer/>
                </BrowserRouter>
            </div>
    )
}
