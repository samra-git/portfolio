import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ cover, title, description, github, link, id }) => {
    console.log(cover);
    return (
        <div className='card-container' key={id}>
            <Link to={"projet/" + id} className='card-link' >
                <div>
                    <img src={cover} alt="photo" />
                </div>
                <div className="card-content">
                    <span>{title}</span>
                    <span>{description}</span>
                </div>

                {/* <p>{github}</p>
                <p>{link}</p> */}
            </Link>
        </div>
    );
};

export default Cards;