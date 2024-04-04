import React, { useEffect, useState } from 'react';
import { images } from '../data/data.js';
import Cards from '../components/Cards';

const Projets = () => {
    const [projet, setProjet] = useState([])

    useEffect(() => {
        setProjet(images)
    }, [])


    return (
        <div className='projet-contain'>
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
            
        </div>
    );
};

export default Projets;