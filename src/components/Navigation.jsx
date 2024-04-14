// import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { HiMiniXMark } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    // const [isMark, setIsMark] = useState(false)

    const toggleMark = () => {
        setIsOpen(!isOpen);
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

                <div >
                    {isOpen ? (<HiMiniXMark className='nav-mark menu-responsive' onClick={toggleMark} />) :
                        (<FiMenu className="menu-responsive" onClick={toggleMark}/>)}

                </div>
                {isOpen && (<div className='menu-col'>

                    
                        <Link to="#projets"><li>Projets</li></Link>
                        <Link to="#compétences" ><li>Compétences</li></Link>
                        <Link to="#compétences" ><li>À propos</li></Link>
                        <Link to="#footer" ><li>Contact</li></Link>
                  

                </div>)}








                {/* <div className={"isOpen" ? "menu-responsive navigation-display" : "menu responsive"}> */}

            </ul>

        </div>
    );
};

export default Navigation;