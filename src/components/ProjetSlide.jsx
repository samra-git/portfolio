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
import data from '../data/data.json'
import { useEffect, useState } from "react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

function ProjetSlide() {
  const [projets, setProjets] = useState([]);
  const [hovered, setHovered] = useState(false)


  useEffect(() => {
    setProjets(data)
  }, [])

  return (
    < div className="projets">
      <h1 id="projets">Projets réalisés</h1>

      <Carousel>
        {projets.map((projet) => (
          <Link key={projet.id} to={`/projets/projet/${projet.id}`} className="carouselBox">
            <div className="carouselBox-overlayWrapper">
              <div>
                <img src={projet.cover} alt={projet.title} />
              </div>
              <div className="carouselBox-overlay">
                <p>{projet.title}</p>
                <FaArrowUpRightFromSquare />
              </div>
            </div>


          </Link>





        ))
        }
      </Carousel>


      {/* <Carousel>
        <Link to="/projets/projet/1" className="carouselBox"><img src={booki} /></Link>
        <Link to="/projets/projet/2" className="carouselBox"><img src={ohmyfood} /></Link>
        <Link to="/projets/projet/3" className="carouselBox"><img src={sophieBluel} /></Link>
        <Link to="/projets/projet/4" className="carouselBox"><img src={kasa} /></Link>
        <Link to="/projets/projet/5" className="carouselBox"><img src={ninaCarducci} /></Link>
        <Link to="/projets/projet/6" className="carouselBox"><img src={events} /></Link>
        <Link to="/projets/projet/7" className="carouselBox"><img src={argentBank} /></Link>
      </Carousel> */}
    </div>
  );
}

export default ProjetSlide;
