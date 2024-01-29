import React, { useState } from 'react';
import './style.scss';

const Faqs = () => {
    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (questionNumber) => {
        setOpenQuestion(openQuestion === questionNumber ? null : questionNumber);
    };

    return (
        <div id='Faqs'>
            <h2>FAQs</h2>
            <div className='questions'>
                {/* Question 1 */}
                <div className={`question ${openQuestion === 1 ? 'open' : ''}`}>
                    <div className='title' onClick={() => toggleQuestion(1)}>
                        <h3>1. Combien me coûtera le développement d’un site web ?</h3>
                        <i className={`fa-solid fa-chevron-${openQuestion === 1 ? 'up' : 'down'}`}></i>
                    </div>
                    {openQuestion === 1 && <p>Le coût du développement d'un site web varie en fonction de la complexité et des exigences spécifiques du projet.</p>}
                </div>
                {/* Question 2 */}
                <div className={`question ${openQuestion === 2 ? 'open' : ''}`}>
                    <div className='title' onClick={() => toggleQuestion(2)}>
                        <h3>2. Offrez-vous des services de maintenance après le lancement du site ?</h3>
                        <i className={`fa-solid fa-chevron-${openQuestion === 2 ? 'up' : 'down'}`}></i>
                    </div>
                    {openQuestion === 2 && <p>Oui, nous proposons un service de maintenance après le lancement du site au tarif de 15€ par mois.</p>}
                </div>
                {/* Question 3 */}
                <div className={`question ${openQuestion === 3 ? 'open' : ''}`}>
                    <div className='title' onClick={() => toggleQuestion(3)}>
                        <h3>3. Intégrez-vous des bonnes pratiques SEO dans le processus de développement ?</h3>
                        <i className={`fa-solid fa-chevron-${openQuestion === 3 ? 'up' : 'down'}`}></i>
                    </div>
                    {openQuestion === 3 && <p>Oui, l'intégration des bonnes pratiques SEO est une composante essentielle de notre processus de développement.</p>}
                </div>
            </div>
        </div>
    );
};

export default Faqs;