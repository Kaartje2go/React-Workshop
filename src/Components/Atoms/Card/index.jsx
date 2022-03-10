import React from 'react';
import './Card.css';

// If properties are passed from the parent, we can use them here
const GalleryCard = ({ title }) => {
    const handleClick = () => {

    };

    return (
        <button className="card">
            <div className="card__image">
                <img src="https://picsum.photos/300/200" alt="vehicle" />
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

export default GalleryCard