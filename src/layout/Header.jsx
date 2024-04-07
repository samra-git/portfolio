// import React from 'react';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import logo from '../assets/logos/icon2.png'

const Header = () => {

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, []);

    const scrollFunction = () => {
        const header = document.querySelector(".header");
        if (header) {
            if (window.scrollY > 80) {
                header.classList.add("hide");
            } else {
                header.classList.remove("hide");
            }
        }
    }

    return (
        <div className='header'>
            <div className='header-row'>
                <div className='header-logo'>
                   <img src={logo} alt="" />
                <h1 className='header-title'>Développeuse Web</h1> 
                </div>
                <Navigation />
            </div>


        </div>
    );
};

export default Header;