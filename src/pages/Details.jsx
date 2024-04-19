import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import data from '../data/data.json'
import { motion } from 'framer-motion';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
// import Slider from 'react-slick';
import DetailsCarousel from '../components/DetailsCarousel';
import pictures from '../data/pictures.json'
// import { NavLink } from 'react-router-dom';
// import { MdHttp } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";




const Details = () => {
    const [getCard, setGetCard] = useState([]);
    const [picture, setPicture] = useState([]);
    const [back, setBack] = useState(false)
    const { id } = useParams();
    const navigate = useNavigate();
  
    // if (back === true) {
    //     navigate('/')
    // }

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
    const github = cardId && cardId.github
    const link = cardId && cardId.link
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
            {/* <IoMdArrowRoundBack className='details-arrow' onClick={() => setBack(!back)} /> */}
            <Link to="/#projets" >
                <IoMdArrowRoundBack className='details-arrow' />
            </Link>

            <h1>{title}</h1>
            <div className='details-contain'>
                <div className='details-carousel'>
                    <DetailsCarousel pictures={slides} />
                </div>

                <div>
                    <motion.p
                        whileTap={{ scale: 1.2 }}>
                        {description}</motion.p>
                    <motion.div className='details-content-skills'>
                        <h4>Skills:</h4>
                        <p>{technos}</p>
                    </motion.div>
                    <div className='details-content-link'>

                        <div>
                            <a href={github} target="_blank" rel="noopener noreferrer">Code <FaArrowUpRightFromSquare /></a></div>
                        <div>
                            <a href={link} target="_blank" rel="noopener noreferrer">Site <FaArrowUpRightFromSquare /></a>
                        </div>
                    </div>
                </div>

            </div>


        </motion.div>
    );
};

export default Details;