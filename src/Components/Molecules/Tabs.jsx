import React from 'react';

const Tabs = ({ onTabClicked, activeTabValue, tabs }) => {

    return (
        <div className="tabs">
            { tabs.map(tab => (
                <button className={`tab${tab.value === activeTabValue ? ' tab--active' : ''}`} onClick={ () => onTabClicked(tab.value) }>
                    { tab.title }
                </button>
            )) }
     </div>
    );
};

export default Tabs;
