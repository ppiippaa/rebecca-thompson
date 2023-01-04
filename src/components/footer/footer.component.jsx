import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className='footer'>
            <span>&copy; {date} graphic design by <strong>Nirine Arnold</strong></span>
        </footer>
    );
};

export default Footer;