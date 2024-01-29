import React from 'react';
import axios from 'axios';
import './style.scss';

const Footer = () => {

    function newsletter()
    {
        const email = document.querySelector('.email').value;
        
        axios.post(process.env.REACT_APP_BDD_NEWSLETTER, {
            email: email
        })
        .then((successs) => document.querySelector('.successs').style.display = 'block')
    }

    return (
        <div id='Footer'>
            <img src='assets/logo2.png' className='logo' alt='logo'/>
            <div className='form'>
                <input type='email' className='email' placeholder='Votre adresse électronique' />
                <button onClick={newsletter}>Restez informer des dernières offres</button>
            </div>
            <p className='successs' style={{display: 'none', textAlign: 'center', fontSize: '0.9em', width: "70%", color: "white"}}>Merci pour votre intérêt ! Vous êtes maintenant inscrit pour recevoir nos dernières offres !</p>
            <nav>
                <a href='#Services'>Services</a>
                <a href='#Expertise'>Notre Expertise</a>
                <a href='#Projets'>Projets</a>
                <a href='#Contact'>Nous Contacter</a>
            </nav>
            <div className='socials'>
                <a href="https://www.instagram.com/b3h4rrr" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@b3h4rr" target='_blank' rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
            </div>
        </div>
    );
};

export default Footer;