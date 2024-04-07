import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import Cards from '../components/Cards';
import { motion } from "framer-motion";


const Projets = () => {
    const [projet, setProjet] = useState([])

    useEffect(() => {
        setProjet(data)
    }, [])


    return (
        <motion.div
            className='projet-contain'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "linear",
                delay: "0.1"
            }}
        >
            <h1>Projets</h1>
            <div className='projet-container'>

                {projet.map((item) => (
                    <Cards
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        cover={item.cover}
                        description={item.description}
                        github={item.github}
                        link={item.link} />
                ))}

            </div>

        </motion.div>
    );
};

export default Projets;