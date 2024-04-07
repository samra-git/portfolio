// import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='navigation-row'>
                <NavLink to='/' className="nav-active ">
                    <li>Accueil</li> </NavLink>
                <NavLink to="/projets"><li>Projets</li></NavLink>
                <Link to="#footer" ><li>Contact</li></Link>


            </ul>
        </div>
    );
};

export default Navigation;