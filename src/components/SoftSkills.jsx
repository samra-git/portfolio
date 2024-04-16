import React, { useEffect } from 'react';
import { GoContainer } from 'react-icons/go';
// import Mindmap from 'mindmap';

const SoftSkills = () => {
    useEffect(() => {
        window.onload = () => {

             const data = {
            id: "1",
            topic:"Soft Skils",
            children: [
                { id: "2", topic: "Esprit d'équipe exceptionnel" },
                { id: "3", topic: "Sens de l'initiative innovant" },
                { id: "4", topic: "Adaption rapide aux différentes situations" },
                { id: "5", topic: "Organisation/gestion de projet (méthodes agiles)" },
                { id: "6", topic: "Flexibilité" },
                { id: "7", topic: "Patience et persévérance" }
            ]
        };

        const options = {
            container: 'softSkillsMap',
            data: data
        };

        const mindmap = new Mindmap(options);

        return () => mindmap.destroy()
        }
       
    }, [])

    return (
        <div id="softSkillsMap">
            SK
        </div>
    );
};

export default SoftSkills;