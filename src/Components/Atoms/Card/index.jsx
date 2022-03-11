import React from 'react';
import getRandomImageUrl from '../../../Helpers/getRandomImageUrl';
import './Card.css';

const Card = ({ title }) => {
    // If properties are passed from the parent, we can use them here
    const imageUrl = getRandomImageUrl({ seed: title });

    const handleClick = () => {
        // To keep the Card component generic, we will pass the click event to the parent.
    };

    return (
        <button className="card">
            <div className="card__image">
                <img src={ imageUrl } alt={ title || 'planet' } />
            </div>
            <div className="card__content">
                <div className="card__title">
                    { title || '[Planet name]' } 
                </div>
                <div className="card__subtitle">
                    [Planet climate]
                </div>
            </div>
        </button>
    );
};

export default Card;
