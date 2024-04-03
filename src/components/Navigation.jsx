// import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='navigation-row'>
                <NavLink to='/' className="nav-active ">
                    <li>accueil</li>
                </NavLink>

                <li className="nav-portfolio">
                         <NavLink to="/projets">projets</NavLink> 
                </li>
                <li>
                    <Link to="#footer" >contact</Link>
                </li>

            </ul>
        </div>
    );
};

export default Navigation;