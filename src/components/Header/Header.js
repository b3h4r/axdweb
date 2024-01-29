import React from 'react';
import './style.scss';

const Header = () => {
    return (
        <div id='Header'>
            <img src="assets/logo1.png" className='logo' alt='logo' />
            <nav>
                <a href='#Services'>Services</a>
                <a href='#Expertise'>Notre Expertise</a>
                <a href='#Projets'>Projets</a>
            </nav>
            <a href='#Contact' className='button'>Nous contacter</a>
        </div>
    );
};

export default Header;