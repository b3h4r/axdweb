import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.scss';

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLATE, form.current, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            setMessageSent(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id='Contact'>
            <p className='title'>Nous contacter</p>
            <h2>N'hésitez pas à nous solliciter pour toute demande ou question que vous pourriez avoir.</h2>
            <form className='form' ref={form} onSubmit={sendEmail}>
                <div>
                    <input type='text' placeholder='Votre nom' name='name'/>
                    <input type='email' placeholder='Votre adresse électronique' name='email'/>
                </div>
                <textarea placeholder='Votre message...' name='message'></textarea>
                <div>
                    <button type="submit">Envoyer</button>                    
                </div>
            </form>
            {messageSent && <p className='success'>Nous avons reçu votre demande et nous vous en remercions. Notre équipe traitera votre demande dans les plus brefs délais. </p>}
        </div>
    );
};

export default Contact;
