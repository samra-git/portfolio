import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json'
import { motion } from 'framer-motion';

const Details = () => {
    const [getCard, setGetCard] = useState([]);
    const { id } = useParams();

    // console.log(images);


    useEffect(() => {
        setGetCard(data)
    }, [])

    const cardId = getCard.find((item) => item.id === id)
    console.log((cardId));
    const title = cardId && cardId.title
    const cover = cardId && cardId.cover
    console.log(cover);
    const description = cardId && cardId.description
    const technos = cardId && cardId.technos

    return (
        <div className='details-container'>

            <h1>{title}</h1>
            <div className='details-contain'>
                <motion.img
                    initial={{ rotate: 180 }}
                    transition={{
                        ease: "linear",
                        delay: "0.1"
                    }}
                    animate={{ rotate: 0 }}
                    whileHover={{ scale: 1.5 }}
                    src={cover} alt="image" />
                <div>
                    <motion.p
                        whileTap={{ scale: 1.2 }}>
                        {description}</motion.p>
                    <motion.div>
                        <h4>Skills:</h4>
                        <p>{technos}</p>
                    </motion.div>
                </div>

            </div>


        </div>
    );
};

export default Details;