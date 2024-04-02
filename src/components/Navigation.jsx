// import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className='navigation-row'>
                <NavLink to='/' className="nav-active ">
                    <li>accueil</li>
                </NavLink>

                <li className="nav-portfolio">
                   <a href="#projets">projets</a> 

                    {/* <ul className="nav-projects">
                        <NavLink to='/projet1' className="nav-active ">
                            <li>projet 1</li>
                        </NavLink>
                        <NavLink to='/projet2' className="nav-active">
                            <li>projet 2</li>
                        </NavLink>
                        <NavLink to='/projet3' className="nav-active">
                            <li>projet 3</li>
                        </NavLink>
                        <NavLink to='/projet4' className="nav-active ">
                            <li>projet 4</li>
                        </NavLink>
                        <NavLink to='/projet5' className="nav-active">
                            <li>projet 5</li>
                        </NavLink>
                        <NavLink to='/projet6' className="nav-active">
                            <li>projet 6</li>
                        </NavLink>
                        <NavLink to='/projet7' className="nav-active hover">
                            <li>projet 7</li>
                        </NavLink>
                    </ul> */}
                </li>
                <li>
                    <a href="#footer" >contact</a>
                </li>

            </ul>
        </div>
    );
};

export default Navigation;