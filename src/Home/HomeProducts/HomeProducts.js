import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeProducts = () => {

    const [products, Setproducts] = useState([])

    useEffect (() => {
        fetch('/Products.json')
        .then (res => res.json())
        .then (data => Setproducts (data))

    }, [])


    return (
        <div className='container-fluid row my-5'>
            
            {
                products.slice(0,6).map (product => 
                <div className='col-md-6 g-4'>
                    <div className='card'>
                    <img className='mx-auto d-block' style={{height:'400px', width:"400px"}} src={product.img} class="card-img-top" alt="..."/>
                    </div>
                    <div className='card-body'>

                    <h3 className="card-title">{product.name}</h3>
                    <h4 className='fw-bold text-danger'> price:$ {product.price}</h4>

                    <p class="card-text">{product.description}</p>
                    <Link to={`/purchase/${product._id}`}>
                    <button className='btn btn-warning' > Buy Now </button>

                    
                    </Link>

                   

                    </div>


                </div>)
            }

            
        </div>
    );
};

export default HomeProducts;