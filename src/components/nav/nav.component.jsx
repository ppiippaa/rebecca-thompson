import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavLogo from '../../assets/name-logo-landscape.png'
import './nav.styles.scss';


const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='nav-logo'>
                <img src={NavLogo} alt="logo"/>
            </div>
            <div className='nav-links'>
                <NavLink className='link' to='/' style={({ isActive}) => ({ color: isActive ? '#007797' : '#91205C'})}>Accueil</NavLink>
                <NavLink className='link' to='/massages-et-tarifs' style={({ isActive}) => ({ color: isActive ? '#007797' : '#91205C'})}>Massages et Tarifs</NavLink>
                <NavLink className='link' to='/contact' style={({ isActive}) => ({ color: isActive ? '#007797' : '#91205C'})}>Contact</NavLink>
            </div>
        </div>
    );
};

export default Nav;