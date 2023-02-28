import getRandomImageUrl from '../../../Helpers/getRandomImageUrl';
import './Card.css';

const Card = ({ onClick, subtitle, title }) => {
    const imageUrl = getRandomImageUrl({ seed: title });

    const handleClick = () => {
        onClick && onClick();
    };

    return (
        <button className="card" onClick={ handleClick }>
            <div className="card__image">
                <img src={ imageUrl } alt={ title || 'planet' } />
            </div>
            <div className="card__content">
                <div className="card__title">
                    { title || '[Planet name]' } 
                </div>
                <div className="card__subtitle">
                    { subtitle || '[Planet climate]' }
                </div>
            </div>
        </button>
    );
};

export default Card;
