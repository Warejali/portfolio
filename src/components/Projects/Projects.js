import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/project')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className='lg:mx-16'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;