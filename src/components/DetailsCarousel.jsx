import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import coverBooki from '../assets/booki.png';
// import pictures from '../data/pictures.json'


const DetailsCarousel = ({ pictures }) => {

    console.log(pictures);
    // console.log(pictures[0]);

    // const images = [coverBooki, coverBooki, coverBooki];
    return (
        <Carousel autoPlay interval={4000} infiniteLoop showStatus={false} showIndicators={false} >
            {pictures && pictures.map((picture, index) => (

                <div key={index}>
                    <img src={picture} alt="" />
                </div>
            ))}

        </Carousel>
    );
};

export default DetailsCarousel;