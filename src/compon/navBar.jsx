import React, { Component } from 'react';

import "../style/nav.css"

const NavBar = props => {
    return  <div className="body">
                <nav className='navbar'>
                    <a href="#">
                    NavBar
                    </a>
                    <span>{props.productsCount}</span>
                </nav>
            </div>;
}
 
export default NavBar;