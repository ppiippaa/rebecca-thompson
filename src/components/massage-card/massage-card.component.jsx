import React from 'react';
import './massage-card.styles.scss';


const MassageCard = ({ imageUrl, name, description}) => {

    return (
        <div className='massage-card'>
            <img src={`${imageUrl}`} alt={name}/>
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
            
        </div>
    );
};

export default MassageCard;