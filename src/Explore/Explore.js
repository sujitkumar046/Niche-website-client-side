import React, { useEffect, useState } from 'react';
import NavBar from '../Shared/NavBar/NavBar';

const Explore = () => {

    const [products, Setproducts] = useState([])

    useEffect (() => {
        fetch('/Products.json')
        .then (res => res.json())
        .then (data => Setproducts (data))

    }, [])


    return (

        <>

        <NavBar></NavBar>
        
        <div className='container-fluid row'>
            
            {
                products.map (product => 
                <div className='col-md-6 g-4'>
                    <div className='card'>
                    <img className='mx-auto d-block' style={{height:'400px', width:"400px"}} src={product.img} class="card-img-top" alt="..."/>
                    </div>
                    <div className='card-body'>
                    <h2 class="card-title">{product.name}</h2>
                    <p class="card-text">{product.description}</p>

                    </div>


                </div>)
            }

            
        </div>

        </>
    );
};

export default Explore;