import React from 'react';
import GalleryCard from '../../Atoms/Card';
import './GalleryContainer.css';

// This container will show the gallery page, showcasing the available items to inspect
const GalleryContainer = () => {
    return (
        <div className="gallery">
            <h1>Gallery</h1>
            {/* Components can be imported and used in your jsx */}
            <GalleryCard />
        </div>
    );
}

export default GalleryContainer;