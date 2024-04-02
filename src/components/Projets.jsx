// import React from 'react';
// import Carousel3D from './Carou';
import argentBank from "../assets/argentBank.png"
import kasa from '../assets/kasa.png'
import booki from '../assets/booki.png'
import ohmyfood from '../assets/ohmyfood.png'
import sophieBluel from '../assets/sophieBluel.png'
import ninaCarducci from '../assets/ninaCarducci.png'
import events from '../assets/724events.png'
import Carousel from "./Carousel"
import { Link } from "react-router-dom"

function Projets() {
  return (
    <div className="projets">
      <h1 id="projets">Projets</h1>

      <Carousel>
        <div className="carouselBox">
          <Link to="/projet1" className="carousel-cover"><img src={booki} />
          <div className="carousel-content">
            <h2 className="carousel-title">Booki</h2>
            <p >Intégrer l'interface  responsive d'une agence de voyage avec HTML et CSS</p>
          </div>
          </Link>
          

        </div>
        <Link to="/projet2" className="carouselBox"><img src={ohmyfood} /></Link>
        <Link to="/projet3" className="carouselBox"><img src={sophieBluel} /></Link>
        <Link to="/projet4" className="carouselBox"><img src={kasa} /></Link>
        <Link to="/projet5" className="carouselBox"><img src={ninaCarducci} /></Link>
        <Link to="/projet6" className="carouselBox"><img src={events} /></Link>
        <Link to="/projet7" className="carouselBox"><img src={argentBank} /></Link>
      </Carousel>
    </div>
  );
}

export default Projets;
