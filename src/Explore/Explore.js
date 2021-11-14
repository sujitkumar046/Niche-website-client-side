import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const Explore = () => {

    const [products, Setproducts] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/products')
        .then (res => res.json())
        .then (data => Setproducts (data))

    }, [])


    return (

        <>

        <NavBar></NavBar>
        
        <div className='container-fluid row'>
            <h1>Hello Here are all the products</h1>
            
            {
                products.map (product => 
                <div className='col-md-6 g-4'>
                    <div className='card'>
                    <img className='mx-auto d-block' style={{height:'400px', width:"400px"}} src={product.img} class="card-img-top" alt="..."/>
                    </div>
                    <div className='card-body'>
                    <h3 className="card-title">{product.name}</h3>
                    <h4 className='fw-bold text-danger'>Price: ${product.price}</h4>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/purchase/${product._id}`}>
                    <button className='btn btn-warning'>Buy Now</button>
                    
                    </Link>
                    

                    </div>


                </div>)
            }

            
        </div>

        </>
    );
};

export default Explore;