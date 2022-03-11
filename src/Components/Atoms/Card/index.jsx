import React from 'react';
import './Card.css';

const Card = ({ title }) => {
    // If properties are passed from the parent, we can use them here
    const imageSeed = title || 'placeholder';

    const handleClick = () => {
        // To keep the Card component generic, we will pass the click event to the parent.
    };

    return (
        <button className="card">
            <div className="card__image">
                <img src={ `https://picsum.photos/seed/${imageSeed}/300/200` } alt="vehicle" />
            </div>
            <div className="card__content">
                <div className="card__title">
                    { title || '[Vehicle name]' } 
                </div>
                <div className="card__subtitle">
                    [Vehicle model]
                </div>
            </div>
        </button>
    );
};

export default Card;
