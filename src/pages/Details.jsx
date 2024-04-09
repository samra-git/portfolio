import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/data.json'
import { motion } from 'framer-motion';
import { IoMdArrowRoundBack } from "react-icons/io";


const Details = () => {
    const [getCard, setGetCard] = useState([]);
    const [back, setBack] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();

    // console.log(images);
    if (back === true) {
        navigate('/')
    }

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
        <motion.div className='details-container'
        initial={{ opacity:0}}
    animate={{opacity:1}}
    transition={{
     ease:"linear",
     delay:"0.1"}}>
            <IoMdArrowRoundBack className='details-arrow' onClick={() => setBack(!back)} />
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


        </motion.div>
    );
};

export default Details;