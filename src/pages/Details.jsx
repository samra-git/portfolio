import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json'

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

    return (
        <div>
           
                  <h1> hello {title}</h1>
                  <img src={cover} alt="image" />
                  <p>{description}</p>
                   {/* {cardId && cardId.map((item) => (
                <p>{item.title}</p> */}
                   {/* )
                   )} */}
        </div>
    );
};

export default Details;