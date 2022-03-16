import React, { useEffect, useState } from 'react';
import './DemoComponent.css'

const DemoComponent = (props) => {
    const buttonText = 'Button';
    const [title, setTitle] = useState('Loading simulation...');

    useEffect(() => {
        setTitle('Please, do not click me!')
    }, []);

    return (
        <div className="demo-component">
            <h1>{ title }</h1>
            <button className="button" onClick={ () => setTitle('Why would you do that?') }>
                { buttonText }
            </button>
        </div>
    );
};

export default DemoComponent;