
import CarouselProjets from "./CarouselProjets"
import { Link } from "react-router-dom"
import data from '../data/data.json'
import { useEffect, useState } from "react"
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { RiCodeSFill, RiCodeSSlashFill } from "react-icons/ri";
// import iconProjet from '../assets/logos/icon-projet.png';


function ProjetSlide() {
  const [projets, setProjets] = useState([]);
  // const [hovered, setHovered] = useState(false)


  useEffect(() => {
    setProjets(data)
  }, [])

  return (
    < div className="projets">
      <div className="projet-title">
        <h1 id="projets"><RiCodeSFill />Projets réalisés<RiCodeSSlashFill /></h1>
        {/* <img src={iconProjet} alt="icon-projet" /> */}
      </div>

      <CarouselProjets >
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
      </CarouselProjets>
    </div>
  );
}

export default ProjetSlide;
