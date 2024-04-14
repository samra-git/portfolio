import React from 'react';
import skills from '../data/skills.json';
import { RiCodeSFill, RiCodeSSlashFill } from "react-icons/ri";


const Competences = () => {
    const extendedSkills = [...skills, ...skills];



    return (
        <div className='competences' id="compétences">
            <div className='competences-title'>
                <h1><RiCodeSFill />Compétences acquises<RiCodeSSlashFill /></h1>
            </div>
            <div>

                 <h2>hard skills</h2>
            <div className='competences-contain'>
                {extendedSkills.map((item, index) => (
                    <div key={index} className='competences-slide'>
                        {/* <p>{item.title}</p> */}
                        <div className='logo-slide'>
                            <img src={item.logo} alt="logo" title={item.title} />
                        </div>


                    </div>
                ))}
            </div>
            <h2>soft skills</h2>

            </div>
           

        </div>
    );
};

export default Competences;