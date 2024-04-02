import {useEffect} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const Carousel = (props) => {
    let deg = 0;
    let nElements;

    window.onresize = ()=>{
        responsiveDisplay();
    }

    useEffect(()=>{
        responsiveDisplay();
    });

    const responsiveDisplay = () => {
        let z;
        if(window.innerWidth < 600)
            z = 190;
        else if(window.innerWidth < 820)
            z = 250;
        else if(window.innerWidth < 1200)
            z = 400;
        else if(window.innerWidth < 1600)
            z = 500;
        else if(window.innerWidth >= 1600)
            z = 600;
        
        const slides = document.querySelectorAll('.carouselBox');
        slides.forEach((element, i)=>{
            nElements = slides.length;
            const valeur = (360/ nElements) * (i+1);
            element.style.transform = 'rotateY(' + valeur + 'deg) translateZ(' + z + 'px)';
        });
    }

    const clickButtonLeft = () =>{
        deg -= 360 / nElements;
        const box = document.querySelector('.box');
        box.style.transform = 'perspective(1000px) rotateY(' + deg + 'deg)';
    }

    const clickButtonRight = () => {
        deg += 360 / nElements;
        const box = document.querySelector('.box');
        box.style.transform = 'perspective(1000px) rotateY(' + deg + 'deg)';
    }

    return(
        <div className="carousel">
            <div className="box">
                {props.children}
            </div>
            <div onClick={clickButtonLeft} className="left"><IoIosArrowBack /></div>
            <div onClick={clickButtonRight} className="right"><IoIosArrowForward /></div>
        </div>
    );
}

export default Carousel;
