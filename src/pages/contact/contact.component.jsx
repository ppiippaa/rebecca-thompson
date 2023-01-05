import React from 'react';
import './contact.styles.scss';
import ContactImage from '../../assets/arborescence1.jpg';
import Button from "../../components/button/button.component";

const Contact = () => {
    return (
        <div className='contact-page'>
            <section className='contact-section'>
                <div className='contact-info'>
                    <div className='contact-info-text-container'>
                        <h1>Prendre Contact</h1>
                        <div className='p-container'>
                            <p>+41 78 919 47 37</p>
                            <p>rebecca@rebeccathompson.ch</p>
                            <p>Route d’Epinassey 44, 1890 Epinassey (St-Maurice)</p>
                        </div>
                        <Button className='plan-button' text='Plan'/>
                        <div className='p-container'>
                            <p>Si je ne réponds pas tout de suite à votre appel, merci de m’envoyer un message et je vous recontacterai dès possible! </p>
                            <p><strong>Paiements via TWINT ou IBAN : CH57 0900 0000 1222 8372 2</strong></p>
                        </div>
                        <Button className='reservations-button' text='Réservations en ligne'/>
                    </div>
                </div>
                <div className='contact-image'>
                    <img src={ContactImage} alt="Rebecca"/>
                </div>
            </section>
        </div>
    );
};

export default Contact;