import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.scss';

const Projets = () => {
    const initialProjectsToShow = 2;
    const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() => {
        // Effectue la requête Axios pour récupérer les projets depuis l'URL spécifiée
        axios.get(process.env.REACT_APP_BDD_PROJECTS)
            .then(response => {
                if (Array.isArray(response.data)) {
                    // Filtrer les éléments nuls de la réponse
                    const filteredProjects = response.data.filter(project => project !== null);
                    // Inverser l'ordre des projets
                    const reversedProjects = filteredProjects.reverse();
                    setAllProjects(reversedProjects);
                }     
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des projets:', error);
            });
    }, []);

    const showAllProjects = () => {
        setProjectsToShow(allProjects.length);
    };

    return (
        <div id='Projets'>
            <p className='title'>Nos projets</p>
            <h2>Retrouvez tous nos derniers projets</h2>
            <p>Architecte du web, maestro du clavier</p>
            {allProjects.length === 0 ? <p className='nothing'>Aucun projet</p> : (
                <div className='projects'>
                {allProjects.slice(0, projectsToShow).map((project, index) => (
                    <a href={project.url} key={index} target='_blank' rel='noreferrer'>
                        <div className='project'>
                            <img src={project.img} alt={project.title} />
                            <p>{project.category}</p>
                            <h3>{project.title}</h3>
                        </div>
                    </a>
                ))}
                </div>
            )}
            {projectsToShow < allProjects.length && (
                <div className='button'>
                    <button onClick={showAllProjects}>Voir tous les projets <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            )}
        </div>
    );
};

export default Projets;
