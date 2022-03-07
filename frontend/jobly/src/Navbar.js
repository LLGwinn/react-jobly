import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return(
        <nav className='Navbar'>
            <NavLink exact to='/'>
                Jobly
            </NavLink>
            <NavLink exact to='/companies'>
                Companies
            </NavLink>
            <NavLink exact to='/jobs'>
                Jobs
            </NavLink>
            
            {/* 
            IF SIGNED IN, SHOW USERNAME THAT LINKS TO PROFILE and LOGOUT LINK. 
            ELSE, SHOW SIGNUP LINK.
            <NavLink exact to='/cheetos'>
                Cheetos
            </NavLink> 
            */}
        </nav>
    )
}

export default Navbar;
