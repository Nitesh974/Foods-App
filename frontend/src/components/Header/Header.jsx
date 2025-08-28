import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Get your food delivered in minutes</h2>
                <p>Satisfying your cravings and demands within minutes, delivering smiles each time. A world of flavors, delivered to your door. You Demand We Deliver😉</p>
                <a href='#explore-menu' className='explore-link'><button>Explore Categories</button></a>
            </div>
        </div>
    );
}

export default Header;
