import React from 'react';
import skills from '../data/skills.json'

const Competences = () => {
    const extendedSkills = [...skills, ...skills];



    return (
        <div className='competences' id="compétences">
            <h1>Compétences</h1>
            <h2>hard skills</h2>
            <div className='competences-contain'>
                {extendedSkills.map((item) => (
                    <div key={item.id} className='competences-slide'>
                        {/* <p>{item.title}</p> */}
                        <div className='logo-slide'>
                            <img src={item.logo} alt="logo" title={item.title}/>
                        </div>
                       

                    </div>
                ))}
            </div>
            <h2>soft skills</h2>


        </div>
    );
};

export default Competences;