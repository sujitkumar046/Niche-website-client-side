import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container-fluid banner-container'>
        
            <div className='col-md-6 col-lg-6 sm-col-12 p-2 ms-auto'>
            <h3 className='text-warning text-start mt-5'>Coffee Factory</h3> <br />
            <h1 className='text-white text-start fs-1 fw-bold'>Enjoy Delicios Coffee</h1>
            <br />
            <h4 className='text-start text-light '>Test heavenly flavour of coffee with the best coffe maker machines in the world! We offer best cappacino, espresso machines and deliver all over the wworld.
        <br />
        <br />
        
        <button className='btn btn-warning'> More About Coffe Machines </button></h4>

             </div>
            
        </div>
    );
};

export default Banner;