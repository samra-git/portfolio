import React, { useEffect, useState } from 'react';
import banner from '../assets/background/route.webp';
import { motion } from 'framer-motion';


const Banner = () => {
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowInfo(true);
            } else {
                setShowInfo(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <motion.div className='banner'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <img src={banner} alt="route départementale" />
            <div className='banner-content'>
                <motion.h1 className='banner-title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>"La difficulté se trouve dans l'absence de quelque chose de tout simple"</motion.h1>
                <h3><i>Seymour Papert</i></h3>
                {showInfo && (<motion.h4 className='info'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}>Ce portfolio vise à présenter les projets que j'ai réalisé lors de ma formation d'intégrateur web.</motion.h4>)}
            </div>

        </motion.div>
    );
};

export default Banner;