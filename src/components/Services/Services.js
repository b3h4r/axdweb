import React from 'react';
import './style.scss';

const Services = () => {
    return (
        <div id='Services'>
            <h2>Services</h2>
            <div className='services'>
                <div className='service conception'>
                    <i className="fa-solid fa-code"></i>
                    <h3>Conception web</h3>
                    <p>Transformez vos idées en réalité numérique avec notre service de développement web, offrant une présence en ligne dynamique et performante qui laisse une impression mémorable.</p>
                </div>
                <div className='service design'>
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <h3>Design web</h3>
                    <p>Rendez votre site irrésistible avec notre service de design, créant une expérience visuelle exceptionnelle pour captiver vos visiteurs dès le premier regard.</p>
                </div>
                <div className='service seo'>
                    <i className="fa-solid fa-chart-simple"></i>
                    <h3>Optimisation du référencement SEO</h3>
                    <p>Boostez votre visibilité en ligne et attirez davantage de clients grâce à une optimisation SEO percutante.</p>
                </div>
                <div className='service maintenance'>
                    <i className="fa-solid fa-gear"></i>
                    <h3>Maintenance du site web</h3>
                    <p>Optimisez la performance continue de votre site avec notre service de maintenance dédié.</p>
                </div>
                <div className='service socials'>
                    <i className="fa-solid fa-gear"></i>
                    <h3>Gestion des réseaux sociaux pour vos services</h3>
                    <p>Vous offrez des services exceptionnels, mais êtes-vous présent là où votre audience vous cherche vraiment ? Avec notre solution de gestion des réseaux sociaux, propulsez vos services sous les feux des projecteurs numériques !</p>
                </div>
            </div>
        </div>
    );
};

export default Services;