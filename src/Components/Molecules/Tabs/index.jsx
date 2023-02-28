import React from 'react';
import './Tabs.css';

const Tabs = ({ onTabClicked, activeTabValue, tabs }) => {

    return (
        <div className="tabs">
            { tabs.map((tab, i) => (
                <button key={ i } className={`tab${tab.value === activeTabValue ? ' tab--active' : ''}`} onClick={ () => onTabClicked(tab.value) }>
                    { tab.title }
                </button>
            )) }
     </div>
    );
};

export default Tabs;
