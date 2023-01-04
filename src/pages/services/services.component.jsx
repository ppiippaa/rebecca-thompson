import React from 'react';
import MassageTypes from '../../components/massage-card/massage-info';
import MassageCard from "../../components/massage-card/massage-card.component";
import './services.styles.scss';

const Services = () => {


    return (
        <div className='services-page'>
            <h1 className='massages-title'>Massages</h1>
            <div className='massages-grid'>
                {
                    MassageTypes.map(massage =>
                        <MassageCard
                            id={massage.id}
                            description={massage.description}
                            imageUrl={massage.imageUrl}
                            name={massage.name}
                        />)
                }
            </div>
        </div>
    );
};

export default Services;