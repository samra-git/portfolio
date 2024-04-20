import React from 'react';
import image from '../assets/heroImage.jpg';
import { motion } from 'framer-motion';
import moi from '../assets/moi/moi.png'
import icon from '../../public/logos/icon-projet.png'

const Apropos = () => {
    return (
        <div className='apropos'>
            <motion.div
                // whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.8 }}
                className='apropos-content'>
                <div className='apropos-title'>
                    <div className='apropos-title'>
                        {/* <img src={icon} alt="" /> */}
                        <h1 id="about">
                            À propos...
                        </h1>
                    </div>

                    <div className='apropos-imageContainer'>
                        <img src={moi} alt="portrait" />
                    </div>
                </div>

                <div className='apropos-text'>
                    <p>
                        Après avoir exercé avec dévouement en tant qu'orthoptiste, plongée dans l'univers de la vision et ses mystères, j'ai ressenti un appel vers de nouveaux horizons. Ainsi, guidée par ma passion pour la santé et mon intérêt croissant pour l'informatique, j'ai entrepris une reconversion en tant que développeur web. Cette transition, loin d'être un abandon, représente pour moi une évolution naturelle et enrichissante de ma carrière, que je mène avec assurance et satisfaction.
                    </p>
                    <p>Cette transition n'a pas été simplement un changement de profession, mais plutôt une évolution naturelle qui a été alimentée par ma soif de connaissances et mon engagement envers l'apprentissage continu. J'ai plongé dans l'univers du développement web avec la même détermination et le même dévouement qui ont caractérisé mes années en tant qu'orthoptiste.

                        Au cours de cette transition, j'ai acquis une solide expertise dans les langages de programmation tels que HTML, CSS et JavaScript, ainsi qu'une compréhension approfondie des concepts clés du développement web. En combinant mes compétences techniques avec ma sensibilité pour les besoins des utilisateurs, je suis convaincue de pouvoir apporter une valeur ajoutée significative à tout projet auquel je contribue.

                        Aujourd'hui, je suis enthousiaste à l'idée de poursuivre cette nouvelle voie professionnelle, tout en restant attachée à mes valeurs fondamentales de dévouement, d'empathie et de recherche constante de l'excellence."</p>

                    

                </div>


            </motion.div>
            {/* <motion.div
                className="apropos-image"

            >
                <motion.img
                    whileTap={{ scale: 1.2 }}
                    transition={{ duration: 0.8 }}
                    initial={{
                        perspective: 800,

                    }}
                    src={image} alt="photo d'un ordinateur sur un bureau"
                     />
            </motion.div> */}


        </div>
    );
};

export default Apropos;