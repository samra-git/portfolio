import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../data/data.json'
import { motion } from 'framer-motion';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import Slider from 'react-slick';
import DetailsCarousel from '../components/DetailsCarousel';
import pictures from '../data/pictures.json'



const Details = () => {
    const [getCard, setGetCard] = useState([]);
    const [picture, setPicture] = useState([]);
    const [back, setBack] = useState(false)
    const { id } = useParams();
    // const { ID } = useParams();
    const navigate = useNavigate();
// console.log(picture);
   
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // console.log(images);
    if (back === true) {
        navigate('/')
    }

    useEffect(() => {
        setGetCard(data)
    }, []);
    useEffect(() => {
        setPicture(pictures)
    })

    
    const cardId = getCard.find((item) => item.id === id)
    // console.log((cardId));
    const title = cardId && cardId.title
    // const cover = cardId && cardId.cover
    // console.log(cover);
    const description = cardId && cardId.description
    const technos = cardId && cardId.technos
    const slides = cardId && cardId.pictures
    console.log(slides);
    // console.log(slides);

    return (
        <motion.div className='details-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "linear",
                delay: "0.1"
            }}>
            <IoMdArrowRoundBack className='details-arrow' onClick={() => setBack(!back)} />
            <h5 className='details-arrowRight'>tous les projets</h5><IoMdArrowRoundForward className='details-arrow details-arrowRight' />
            <h1>{title}</h1>
            <div className='details-contain'>
               <div className='details-carousel'>
                <DetailsCarousel pictures={slides} />
               </div>
               
                
               
               
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