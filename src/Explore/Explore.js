import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import './Explore.css'

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
        
        <div className='container-fluid row my-5'>
            <h1 className='fs-1 fw-bold explore-color'>Hello Here are all the products</h1>
            
            {
                products.map (product => 
                <div className='col-md-6 g-4'>
                    <div className='card'>
                    <img className='mx-auto d-block card-img-top' style={{height:'400px', width:"400px"}} src={product.img} alt="..."/>
                    </div>
                    <div className='card-body'>
                    <h3 className="card-title">{product.name}</h3>
                    <h4 className='fw-bold text-danger'>Price: ${product.price}</h4>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/purchase/${product._id}`}>
                    <button className='btn btn-warning fw-bold'>Buy Now</button>
                    
                    </Link>
                    

                    </div>


                </div>)
            }

            
        </div>
        <Footer></Footer>

        </>
    );
};

export default Explore;