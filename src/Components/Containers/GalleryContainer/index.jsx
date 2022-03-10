import React from 'react';
import GalleryCard from '../../Atoms/Card';
import './GalleryContainer.css';

// This container will show the gallery page, showcasing the available items to inspect
const GalleryContainer = () => {
    return (
        <div className="container container--centered">
            <h1>In a gallery far, far away...</h1>
            <div className="gallery-grid">
                {/**
                   * Using Components
                   * ---------------- 
                   * Components can be imported and used in your jsx.
                   * You can pass them properties (props), as seen below with 'title'. 
                   * There are some generic props, such as 'className' and 'onClick', but you can add any prop you need.
                */}
                <GalleryCard title="Sand Crawler" />
                <GalleryCard />
                <GalleryCard />
                <GalleryCard />
            </div>
        </div>
    );
}

export default GalleryContainer;
