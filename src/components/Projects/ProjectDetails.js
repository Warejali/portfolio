import React from 'react';
import { useParams } from 'react-router-dom';
import useProjectDetails from '../../hooks/useProjectDetails';

const ProjectDetails = () => {

    const { id } = useParams();
    const [project] = useProjectDetails(id)
    const { name, img, description } = project;

    return (
        <div className='lg:mx-16 my-24'>
            <h1 className="text-3xl font-bold text-secondary text-center uppercase my-10">{name}</h1>
            <div className="hero my-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <img src={img} className=" rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='lg:mx-32'>
                        <h1 className="text-2xl font-bold">Box Office News!</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="hero my-32">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:mx-32'>
                        <h1 className="text-2xl font-bold">Box Office News!</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div>
                        <img src={img} className="rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
            </div>

            <div className="hero my-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div><img src={img} className="rounded-lg shadow-2xl" alt='' /></div>
                    <div className='lg:mx-32'>
                        <h1 className="text-2xl font-bold">Box Office News!</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;