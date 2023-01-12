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
                <NavLink className='link' to='/rebecca-thompson' style={({ isActive}) => ({ color: isActive ? '#007797' : '#91205C'})}>Accueil</NavLink>
                <NavLink className='link' to='/rebecca-thompson/massages-et-tarifs' style={({ isActive}) => ({ color: isActive ? '#007797' : '#91205C'})}>Massages et Tarifs</NavLink>
                <NavLink className='link' to='/rebecca-thompson/contact' style={({ isActive}) => ({ color: isActive ? '#007797' : '#91205C'})}>Contact</NavLink>
            </div>
        </div>
    );
};

export default Nav;