// Vendors
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Other
import getRandomImageUrl from '../../../Helpers/getRandomImageUrl';
import usePlanet from '../../../Queries/usePlanet';
import Tabs from '../../Molecules/Tabs';
import './DetailContainer.css'

// This container will hold the contents of the details page, displaying information of the item selected on the gallery page. 
const DetailContainer = () => {
    const { planetId } = useParams();
    const { planet } = usePlanet(planetId);
    const navigate = useNavigate();
    const [activeTabValue, setActiveTabValue] = useState();

    const title = planet?.name || '[Planet name]';
    const imageUrl = getRandomImageUrl({ seed: title, width: 1200, height: 400 });

    const tabs = [
        {
            title: 'Details',
            value: 'details'
        },
        {
            title: 'People',
            value: 'people'
        },
        {
            title: 'Movies',
            value: 'movies'
        }
    ];

    const handlePreviousClick = () => {
        navigate('/');
    };

    const handleTabClick = (value) => {
        setActiveTabValue(value);
    };

    useEffect(() => {
        setActiveTabValue(tabs[0].value);
    }, []);

    return (
        <div className="container">
            <div className="top-bar">
                <button className="button" onClick={ handlePreviousClick }>{ '<' }</button>
                <h1 className="text-center">{ title }</h1>
            </div>
            <div className='detail-container'>
                <img className="detail-image" src={ imageUrl } alt={ title || 'planet' } />
                <Tabs
                    activeTabValue={ activeTabValue }
                    onTabClicked={ handleTabClick }
                    tabs={ tabs }
                />
                { activeTabValue === 'details' && (
                    <div className="detail-content">
                        <div className="detail-content__block">
                            <h2>General</h2>
                            <table className="info-table">
                                <tbody>
                                    <tr>
                                        <td>Climate:</td>
                                        <td>{ planet?.climate }</td>
                                    </tr>
                                    <tr>
                                        <td>Terrain:</td>
                                        <td>{ planet?.terrain }</td>
                                    </tr>
                                    <tr>
                                        <td>Population:</td>
                                        <td>{ planet?.population }</td>
                                    </tr>
                                    <tr>
                                        <td>Gravity:</td>
                                        <td>{ planet?.gravity }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="detail-content__block">
                            <h2>Statistics</h2>
                            <table className="info-table">
                                <tbody>
                                    <tr>
                                        <td>Diameter:</td>
                                        <td>{ planet?.diameter }</td>
                                    </tr>
                                    <tr>
                                        <td>Rotation period:</td>
                                        <td>{ planet?.rotation_period }</td>
                                    </tr>
                                    <tr>
                                        <td>Orbital period:</td>
                                        <td>{ planet?.orbital_period }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) }
                { activeTabValue === 'people' && (
                    <div className="detail-content">
                        People
                    </div>
                ) }
                { activeTabValue === 'movies' && (
                    <div className="detail-content">
                        Movies
                    </div>
                ) }
                <div className="detail-footer">
                    <button className="button">
                        Take me there!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetailContainer;