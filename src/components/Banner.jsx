import React from 'react';
import banner from '../assets/background/route.jpg'

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt="" />
            <div className='banner-content'>
              <h1>"La difficulté se trouve dans l'absence de quelque chose de tout simple"</h1>
            <h3><i>Seymour Papert</i></h3>  
            <h5>Ce portfolio vise à présenter les projets que j'ai réalisé lors de ma formation d'intégrateur web.</h5>
            </div>
            
        </div>
    );
};

export default Banner;