// import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='navigation-row'>
                {/* <NavLink to='/' className="nav-active ">
                    <li>Accueil</li> </NavLink> */}
                <Link to="#projets"><li>Projets</li></Link>
                <Link to="#compétences" ><li>Compétences</li></Link>
                <Link to="#compétences" ><li>À propos</li></Link>
                <Link to="#footer" ><li>Contact</li></Link>


            </ul>
        </div>
    );
};

export default Navigation;