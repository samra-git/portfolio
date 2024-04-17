// import React from 'react';
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import logo from '../../public/logos/icon2.png'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

// useEffect(() => {
//         const handleScroll= () => {
//             if(window.scrollY > 70) {
//                 setIsScrolled(true)
//             } else {
//                 setIsScrolled(false)
//             }
//         }

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//           window.removeEventListener("scroll", handleScroll);
//         };
    
//     }, []);


    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, []);

    const scrollFunction = () => {
        const header = document.querySelector(".header");
        if (header) {
            if (window.scrollY > 250) {
                header.style.top = "0px";
                header.style.transition = "600ms"
            
            } else {
                header.style.top = "-120px";
                header.style.transition = "800ms";
                // header.style.opacity = "0"
            }
        
        }
       
    }

    return (
        <div>
<div className='header'>
            <div className='header-row'>
                <div className='header-logo'>
                   <img src={logo} alt="" />
                {/* <h1 className='header-title'>Développeuse Web</h1>  */}
                </div>
                <Navigation />
            </div>


        </div>
             
        </div>
    
       
    );
};

export default Header;