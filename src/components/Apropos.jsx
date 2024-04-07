import React from 'react';
import image from '../assets/heroImage.jpg';
import { motion } from 'framer-motion';

const Apropos = () => {
    return (
        <div className='apropos'>
            <div className='apropos-content'>
                <h1>
                    Qui suis-je?
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorum quasi ab perspiciatis a velit sunt inventore accusantium dolore minus debitis ipsam eligendi beatae vel blanditiis hic reprehenderit eum ex soluta tenetur facere quae vero, accusamus dicta. Corporis quam ducimus consequuntur doloremque odit veritatis ipsa adipisci, aliquam quidem labore? Ratione tempora quo quas optio eligendi deleniti quae impedit ducimus, alias, repellat quis explicabo? Voluptate mollitia optio qui ratione consequatur dolores dolore rem ea, quidem iure beatae. Reprehenderit cumque quasi nisi odio consequatur, at magni nesciunt! Reiciendis culpa explicabo nam error temporibus perferendis mollitia veritatis non eum. Voluptates delectus ut laudantium dolor impedit eveniet itaque, recusandae a asperiores atque quis omnis rerum officia cumque iure magni quam magnam in, maxime illo molestiae! Nesciunt esse neque adipisci laudantium pariatur temporibus dolores reiciendis veritatis exercitationem eligendi? Vitae totam sunt unde eligendi, recusandae dolorem quas iure adipisci asperiores, alias repellendus soluta quo exercitationem pariatur distinctio deleniti nulla fugit labore voluptate.</p>
            </div>
            <motion.div 
            className="apropos-image"
            
            >
                <motion.img 
                whileTap={{ scale: 1.2 }}
                initial={{
                    perspective:800,

                }}
                src={image} alt="photo d'un ordinateur sur un bureau"/>
            </motion.div>
                
            
        </div>
    );
};

export default Apropos;