import React from 'react';
import './style.scss';

const Home = () => {
    return (
        <div id='Home'>
            <p>Avec AxD Web,</p>
            <h2>Commencez le développement de votre site web.</h2>
            <p>AxD Web vous offre l'opportunité de propulser votre entreprise dans l'ère numérique en concevant votre site web, en optimisant votre référencement et bien d'autres services encore, le tout orchestré par une équipe de professionnels passionnés du monde du web.</p>
            <div className='socials'>
                <a href="https://www.instagram.com/b3h4rrr" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@b3h4rr" target='_blank' rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a>
            </div>
        </div>
    );
};

export default Home;