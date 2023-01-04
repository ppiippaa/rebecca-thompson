import React from 'react';
import Button from "../button/button.component";
import './contact-banner.styles.scss';

const ContactBanner = () => {
    return (
        <div className='contact-banner-container'>
            <p>Prendre contact</p>
            <Button className='contact-banner-button' text='Contact'/>
        </div>
    );
};

export default ContactBanner;