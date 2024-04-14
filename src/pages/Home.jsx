// import React from 'react';
import Apropos from '../components/Apropos';
// import Carousel from '../components/Carousel';
// import Carrousel from '../components/Carousel';
// import Sliders from '../components/Projets';
import Competences from '../components/Competences';
import ProjetSlide from '../components/ProjetSlide';
import { motion } from "framer-motion";
import Header from '../layout/Header';
import EmailForm from '../components/EmailForm';
import Banner from '../components/Banner';


const Home = () => {
  return (
    <motion.div 
    initial={{ opacity:0}}
    animate={{opacity:1}}
    transition={{
     ease:"linear",
     delay:"0.1", duration:"1"
    }}
    
    ><Header />
    <Banner />
      <ProjetSlide />
      <Competences />
      <Apropos />
      <EmailForm />
    </motion.div>

  );
};

export default Home;