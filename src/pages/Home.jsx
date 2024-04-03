// import React from 'react';
import Apropos from '../components/Apropos';
// import Carousel from '../components/Carousel';
// import Carrousel from '../components/Carousel';
// import Sliders from '../components/Projets';
import Competences from '../components/Competences';
import ProjetSlide from '../components/ProjetSlide';

const Home = () => {
  return (
    <div>
      <Apropos />
      <ProjetSlide />
      <Competences />
    </div>

  );
};

export default Home;