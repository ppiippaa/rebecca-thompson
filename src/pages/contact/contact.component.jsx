import React from 'react';
import './contact.styles.scss';
import ContactImageV2 from '../../assets/contact-page-portrait.png'
import Button from "../../components/button/button.component";

const Contact = () => {
    return (
        <div className='contact-page' id='contact'>
            <section className='contact-section'>
                <div className='contact-info'>
                    <div className='contact-info-text-container'>
                        <h1>Prendre Contact</h1>
                        <div className='p-container'>
                            <p>+41 78 919 47 37 (uniquement appels et SMS)</p>
                            <p>rebecca@rebeccathompson.ch</p>
                            <p>Rte du Stand 39, 1892 Lavey-Village</p>
                        </div>
                        <Button className='plan-button' text='Plan' href="https://www.google.com/maps/place/Rte+du+Stand+39,+1892+Lavey-Village,+Switzerland/@46.2221236,7.0174856,17z/data=!3m1!4b1!4m6!3m5!1s0x478eb94c8359ba6f:0x95a34ba1c08a4317!8m2!3d46.2221199!4d7.0200605!16s%2Fg%2F11dzq9cyf9?entry=ttu"/>
                        <div className='p-container'>
                            <p>Si je ne réponds pas tout de suite à votre appel, merci de m’envoyer un message et je vous recontacterai dès possible! </p>
                            <p><strong>Paiements via TWINT ou IBAN : CH57 0900 0000 1222 8372 2</strong></p>
                        </div>
                    </div>
                </div>
                <div className='contact-image'>
                    <img src={ContactImageV2} alt="Rebecca Thompson"/>
                </div>
            </section>
        </div>
    );
};

export default Contact;
