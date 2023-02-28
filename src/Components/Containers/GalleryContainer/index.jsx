import getRandomImageUrl from '../../../Helpers/getRandomImageUrl';
import usePlanets from '../../../Queries/usePlanets';
import Card from '../../Atoms/Card';
import './GalleryContainer.css';

// This container will show the gallery page, showcasing the available items to inspect
const GalleryContainer = () => {
    usePlanets();

    const onCardClicked = () => {
        // Here we direct the user to the details page with 'useNavigate': https://reactrouter.com/docs/en/v6/getting-started/overview
    }

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
                <button className="card card--active">
                    <div className="card__image">
                        <img src={ getRandomImageUrl({ seed: 'Tatooine', width: 1200, height: 400 }) } alt="Tatooine" />
                    </div>
                    <div className="card__content">
                        <div className="card__title">
                            Tatooine
                        </div>
                        <div className="card__subtitle">
                            [Planet climate]
                        </div>
                    </div>
                </button>
                <button className="card">
                    <div className="card__image">
                        <img src={ getRandomImageUrl({ seed: 'Alderaan', width: 1200, height: 400 }) } alt="Alderaan" />
                    </div>
                    <div className="card__content">
                        <div className="card__title">
                            Alderaan 
                        </div>
                        <div className="card__subtitle">
                            [Planet climate]
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default GalleryContainer;
