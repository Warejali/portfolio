import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/1.jpg'

const Banner = () => {
    const navigate = useNavigate()
    const downloadResume = () => {
        navigate('')
    }
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no - repeat',
        }}>
            <div className='lg:px-16'>
                <div className="hero min-h-50">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className='lg:px-16'>
                            <h1 className="text-xl font-bold text-primary">Develope Your Business</h1>
                            <h1 className="text-2xl font-bold">To See A World Powered With Result-Driven Web Solutions.</h1>
                            <p className="py-6">To See A World Powered With Result-Driven Web Solutions.</p>
                            <button onClick={downloadResume} className="btn btn-primary">Download Resume</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/VtGhpH3/Banner.webp" className=" rounded-lg" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;