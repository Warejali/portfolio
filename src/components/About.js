import React from 'react';
import warejPhoto from '../assets/Warej-02.jpg'

const About = () => {
    return (
        <div className='lg:mx-16'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src={warejPhoto} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='lg:px-10'>
                        <h1 className="text-xl font-bold text-secondary">I'm a Web Developer</h1>
                        <h1 className="text-3xl font-bold">
                            I Can Develop Anything You Want</h1>
                        <p className="py-6">I am Mr. Warej Ali. Full Stack Web Developer. <br /><br />

                            Hello there! I'm a web Developer, and I'm very passionate and dedicated to my work. With 5 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration. <br /><br />

                            Throughout my workspace, I have been acknowledged as a success-focused professional with the ability to design and develop innovative applications using advanced technologies, in my current role as a Full-stack Developer for Aggregate. Successfully delivered 100 puls full-stack web applications by various platforms.</p>
                        <button className="btn btn-primary">Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;