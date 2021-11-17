import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeProducts = () => {

    const [products, Setproducts] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/products')
        .then (res => res.json())
        .then (data => Setproducts (data))

    }, [])


    return (
        <div className='container-fluid row my-5'>
            
            {
                products.slice(0,6).map (product => 
                <div className='col-md-6 col-lg-6 col-sm-12 g-4'>
                    <div className='card-group h-100'>
                    <div className='card'>
                    <img className='mx-auto d-block card-img-top' style={{height:'300px', width:"300px"}} src={product.img} alt="..."/>
                    </div>

                    <div className='card-body text-start'>

                    <h3 className="card-title">{product.name}</h3>
                    <h4 className='fw-bold text-danger'> price:$ {product.price}</h4>

                    <p class="card-text">{product.description}</p>
                    <div className='text-center'>
                    <Link to={`/purchase/${product._id}`}>
                    <button className='btn btn-warning text-center' > Buy Now </button>

                    
                    </Link>
                   

                   

                    </div>
                       
                    </div>

                   

                    </div>


                    


                </div>)
            }

            
        </div>
    );
};

export default HomeProducts;