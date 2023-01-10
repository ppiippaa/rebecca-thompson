import React from 'react';
import './contact.styles.scss';
import ContactImage from '../../assets/arborescence1.jpg';
import Button from "../../components/button/button.component";

const Contact = () => {
    return (
        <div className='contact-page' id='contact'>
            <section className='contact-section'>
                <div className='contact-info'>
                    <div className='contact-info-text-container'>
                        <h1 className=''>Prendre Contact</h1>
                        <div className='p-container'>
                            <p>+41 78 919 47 37</p>
                            <p>rebecca@rebeccathompson.ch</p>
                            <p>Route d’Epinassey 44, 1890 Epinassey (St-Maurice)</p>
                        </div>
                        <Button className='plan-button' text='Plan' href="https://www.google.com/maps/place/Rte+d'Epinassey+44,+1890+Epinassey,+Switzerland/@46.1932998,7.0051933,17z/data=!3m1!4b1!4m5!3m4!1s0x478eb97a7ee6a5c5:0x50deb145fbecf1a9!8m2!3d46.1932998!4d7.007382"/>
                        <div className='p-container'>
                            <p>Si je ne réponds pas tout de suite à votre appel, merci de m’envoyer un message et je vous recontacterai dès possible! </p>
                            <p><strong>Paiements via TWINT ou IBAN : CH57 0900 0000 1222 8372 2</strong></p>
                        </div>
                        <Button className='reservations-button' text='Réservations en ligne' href="https://calendly.com/revenirosens"/>
                    </div>
                </div>
                <div className='contact-image'>
                    <img src={ContactImage} alt="Rebecca Thompson"/>
                </div>
            </section>
        </div>
    );
};

export default Contact;