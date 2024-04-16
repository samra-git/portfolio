import React from 'react';
import skills from '../data/skills.json';
import { RiCodeSFill, RiCodeSSlashFill } from "react-icons/ri";
import SoftKills from './SoftSkills';


const Competences = () => {
    const extendedSkills = [...skills, ...skills];



    return (
        <div className='competences' id="compétences">
            <div className='competences-title'>
                <h1><RiCodeSFill />Compétences acquises<RiCodeSSlashFill /></h1>
            </div>
            <div>

                {/* <h2>Hard skills</h2> */}
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
                {/* <h2 soft-title>Soft skills</h2> */}
                <div className='softsKills competences-contain'>
                      {/* <SoftKills /> */}
                <ul  className='softsKills-slide'>
                
                    <li>Esprit d'équipe exceptionnel</li>
                    <li>Sens de l'initiative</li>
                    <li>Adaption rapide aux différentes situations</li>
                    <li>Organisation (méthodes agiles)</li>
                    <li>Flexibilité</li>
                    <li>Gestion de projet(kanban)</li>
                    <li>Patience </li>
                    <li>Persévérance</li>
                     {/* <h3>Soft Skills</h3> */}
                </ul>
                </div>
              


            </div>


        </div>
    );
};

export default Competences;