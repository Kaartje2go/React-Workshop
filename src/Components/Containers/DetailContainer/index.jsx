import React from 'react';
import getRandomImageUrl from '../../../Helpers/getRandomImageUrl';
import './DetailContainer.css'

// This container will hold the contents of the details page, displaying information of the item selected on the gallery page. 
const DetailContainer = () => {
    const title = '[Planet name]';
    const imageUrl = getRandomImageUrl({ seed: title, width: 1200, height: 400 });

    return (
        <div className="container container--centered">
            <h1>{ title }</h1>
            <div className='detail-container'>
                <img className="detail-image" src={ imageUrl } alt={ title || 'planet' } />
                <div className="tabs">
                    <button className="tab tab--active">Details</button>
                    <button className="tab">People</button>
                </div>
                <div className="detail-content">
                    <h2>General</h2>
                    <div className="info-grid">
                        <span className="text-right">Climate: </span>
                        <span>-</span>
                        <span className="text-right">Terrain: </span>
                        <span>-</span>
                        <span className="text-right">Population: </span>
                        <span>-</span>
                        <span className="text-right">Gravity: </span>
                        <span>-</span>
                    </div>
                    <h2>Statistics</h2>
                    <div className="info-grid">
                        <span className="text-right">Diameter:</span>
                        <span>-</span>
                        <span className="text-right">Rotation period: </span>
                        <span>-</span>
                        <span className="text-right">Orbital period: </span>
                        <span>-</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailContainer;