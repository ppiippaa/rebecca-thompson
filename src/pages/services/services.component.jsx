import React from 'react';
import MassageTypes from '../../components/massage-card/massage-info';
import MassageCard from "../../components/massage-card/massage-card.component";
import './services.styles.scss';

const Services = () => {


    return (
        <div className='services-page' id='services'>
            <h1 className='massages-title'>Massages</h1>
            <section className='massages-grid'>
                    {
                        MassageTypes.map(massage =>
                            <MassageCard
                                id={massage.id}
                                description={massage.description}
                                imageUrl={massage.imageUrl}
                                name={massage.name}
                            />)
                    }
            </section>

            <section className='tarifs'>
                <div className='tarifs-text-container'>
                    <h2>Tarifs</h2>
                    <p><strong>CHF 70 pour 45 minutes et CHF 90 pour 60 minutes</strong></p>
                    <p>J’offre un rabais pour des packs de 3, 5 et 10 séances</p>
                    <p>Merci d’envoyer les paiements à l’IBAN: CH57 0900 0000 1222 8372 2 ou via Twint au +41 78 919 47 37</p>
                </div>

            </section>
            <section className='alternative-payment'>
                <div className='alternative-payment-text-container'>
                    <h3>Paiement alternatif</h3>
                    <p><strong>Est-ce que l’argent vous frène? </strong>Je soutiens activement les systèmes d’échange alternatifs, donc peut-être nous pouvons envisager une solution. Si vous pouvez fournir quelque chose que je cherche actuellement, on pourrait même contourner l’argent conventionnel entièrement.</p>
                    <p>Si vous avez des connaissances et des compétences dans les domaines de la danse, le théâtre, le cirque, la musique (en particulier orientale et du monde), la réparation des instruments, le film, la photographie, l’art, les soins corporels, le yoga, l’informatique, les services de santé, les soins dentaires et l’odontologie, la coiffure et les soins ésthétiques, le bricolage, la charpenterie, la mécanique et encore, ou si vous avez à disposition des aliments biologiques, des produits naturels de soins et de santé, de l’art, un bus ou camping-car, une maison de vacances ou un espace pour retraites ou concerts, nous trouverons sans doute une possibilité pour des échanges non-monétaires (vive le troc!). </p>
                    <p>Cette liste est non exhaustive, et je suis ouverte aux propositions, alors n’hésitez pas à me contacter pour plus d’infos.</p>
                </div>
            </section>

        </div>
    );
};

export default Services;