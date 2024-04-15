import React from 'react';
import image from '../assets/heroImage.jpg';
import { motion } from 'framer-motion';
import moi from '../assets/moi/moi.png'

const Apropos = () => {
    return (
        <div className='apropos'>
            <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.8 }}
                className='apropos-content'>
                    <div className='apropos-title'>
                         <h1>
                    À propos...
                </h1>
                <div className='apropos-imageContainer'>
                    <img src={moi} alt="portrait" />
                </div>
                    </div>
               
                <div className='apropos-text'>
                    <p>
                        Après avoir exercé avec dévouement en tant qu'orthoptiste, plongée dans l'univers de la vision et ses mystères, j'ai ressenti un appel vers de nouveaux horizons. Ainsi, guidée par ma passion pour la santé et mon intérêt croissant pour l'informatique, j'ai entrepris une reconversion en tant que développeur web. Cette transition, loin d'être un abandon, représente pour moi une évolution naturelle et enrichissante de ma carrière, que je mène avec assurance et satisfaction.
                    </p>
                    <p>De nouveaux horizons s'ouvrent à moi, et c'est avec optimisme que je souhaite développer mes capacités dans ce domaine</p>
                    <p>Suite à une reconversion professionnelle, j'ai suivi mon instinct en me dirigeant naturellement vers les métiers du numérique, tout en conservant mes racines dans le domaine de la santé. En effet, après avoir exercé avec passion en tant qu'orthoptiste, métier dédié à la rééducation visuelle, j'ai découvert une nouvelle passion dans l'informatique. Ainsi, je poursuis mon chemin avec détermination, donnant vie à cette nouvelle facette de ma carrière sans aucun regret.</p>
                    <p>Après avoir exercé avec dévouement en tant qu'orthoptiste, plongée dans l'univers de la rééducation visuelle, j'ai ressenti un appel vers de nouveaux horizons. Ainsi, guidée par ma passion pour la santé et mon intérêt croissant pour l'informatique, j'ai entrepris une reconversion vers les métiers du numérique. Cette transition, loin d'être un abandon, représente pour moi une évolution naturelle et enrichissante de ma carrière, que je mène avec assurance et satisfaction.</p>
                    <p>
                        Suite à une reconversion professionnelle, je me suis naturellement dirigée vers un métier du numérique. En effet,
                        En effet, mes appétences primitives sont la santé et le domaine de l'informatique, après avoir réalisé le premier, je concrétise le second. C'est sans regret...</p>
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