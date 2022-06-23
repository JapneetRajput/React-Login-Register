import React from 'react';
import {
    NavLink
} from "react-router-dom";
import './Assets/Navbar.css'

function Navbar(props) {
    return (
        <nav className='navbar'>
            <h3 className='logo'>
                MusicPlayer
            </h3>
             <div className='navlink'>
                 <NavLink activeClassName='active' className='link' to='/Home'>Home</NavLink>
                 <NavLink activeClassName='active' className='link' to='/Carts'>Playlist</NavLink>
                 <NavLink activeClassName='active' className='link' to='/Profile'>Profile</NavLink>
             </div>
        </nav>
    );
}

export default Navbar;