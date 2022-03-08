import React from "react";
import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar( {token} ) {
    return(
        <nav className='Navbar'>
            <div className='Navbar-brand col-1'>
                <NavLink  exact to='/'>Jobly</NavLink>
            </div>
            <div className='col-6 ms-4 me-3'>
                {token && <NavLink exact to='/companies'>Companies</NavLink>}
                {token && <NavLink exact to='/jobs'>Jobs</NavLink>}
            </div>
            <div className='Navbar-right col-4'>
                {token 
                    ? <NavLink exact to='/'>Username goes here</NavLink>
                    : <NavLink exact to='/login'>Login</NavLink>
                }
                {token
                    ? <NavLink exact to='/'>Log Out</NavLink>
                    : <NavLink exact to='/signup'>Sign Up</NavLink>
                }
            </div>
            


            
         


        </nav>
    )
}

export default Navbar;
