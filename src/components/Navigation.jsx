// import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { HiMiniXMark } from "react-icons/hi2";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isMark, setIsMark] = useState(false)

    const toggleMark = () => {
        setIsMark(!isMark)
    }




    return (
        <div className="navigation">
            <ul className='navigation-row'  >

                <div className='navigation-display'  >
                    <Link to="#projets"><li>Projets</li></Link>
                    <Link to="#compétences" ><li>Compétences</li></Link>
                    <Link to="#compétences" ><li>À propos</li></Link>
                    <Link to="#footer" ><li>Contact</li></Link>

                </div>


                {isOpen ?
                    (<div className="menu-responsive" onMouseEnter={() => setIsOpen(false)} onMouseLeave={() => setIsOpen(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>) :
                    (
                       
                         (<div className='menu-col' >
                            <HiMiniXMark className='nav-mark' onClick={toggleMark} />
                            <Link to="#projets"><li>Projets</li></Link>
                            <Link to="#compétences" ><li>Compétences</li></Link>
                            <Link to="#compétences" ><li>À propos</li></Link>
                            <Link to="#footer" ><li>Contact</li></Link>
                        </div>)
                      
                        


                    )}


                {/* <div className={"isOpen" ? "menu-responsive navigation-display" : "menu responsive"}> */}

            </ul>

        </div>
    );
};

export default Navigation;