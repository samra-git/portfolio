import React from 'react';

const Footer = () => {
    return (
        <div className='footerContain'>
            <div className='footer'>
                <a href="https://github.com/samra-git" target="_blank" rel="noopener noreferrer"><img src="/logos/github.png" alt='github' /></a>
                <a href="https://linkedin.com/in/samra-harbi" target="_blank" rel="noopener noreferrer"><img src="/logos/linkedin.png" alt='linkedin' /></a>
                <a href="mailto:samra.harbi78@gmail.com?subject=Question&body=Bonjour,"><img src="/logos/gmail.png" alt='gmail' /></a>
            </div>
            <div> <p>&copy; 2024 Samra HARBI - Tous droits réservés</p></div>

        </div>

    );
};

export default Footer;