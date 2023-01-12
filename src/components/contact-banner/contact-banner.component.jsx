import React from 'react';
import ButtonLocalLink from "../button/button-local-link.component";
import './contact-banner.styles.scss';

const ContactBanner = () => {
    return (
        <div className='contact-banner-container'>
            <p>Prendre contact</p>
            <ButtonLocalLink text='contact' href={'/contact'}/>
        </div>
    );
};

export default ContactBanner;