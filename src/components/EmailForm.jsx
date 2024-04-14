import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { HiMiniXMark } from "react-icons/hi2";
// import image from '../assets/image1.jpg'


const EmailForm = () => {
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_u40liol';
        const templateId = 'template_2s6kclv';
        const publicKey = 'k5K1asUGA7IRzVirR';

        const templateParams = {
            from_name: name,
            from_firstname: firstname,
            from_email: email,
            to_name: 'Samra',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setFirstname('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            });

    }

    return (
        <div className='emailForm-container'>
           

            <form onSubmit={handleSubmit} className='emailForm'>
                {/* <HiMiniXMark className='emailForm-mark'/> */}
                <input type="text"
                    placeholder='Nom'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                    placeholder='Prénom'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <input type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <textarea
                    cols="30"
                    rows="10"
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <button type='submit'>Envoyer</button>
            </form>
            {/* <div className='emailForm-image'>
<img src={image} alt="" />
            </div> */}
        </div>

    )
}

export default EmailForm