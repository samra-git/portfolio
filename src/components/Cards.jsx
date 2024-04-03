import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cover, title, description, github, link, id }) => {
    return (
        <div className='card-container' key={id}>
            <Link to={"" + id }  >
                <div>
                  <img src={cover} alt="photo" />  
                </div>
            </Link>
            <div className="content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{github}</p>
                    <p>{link}</p>
                </div>
        </div>
    );
};

export default Cards;