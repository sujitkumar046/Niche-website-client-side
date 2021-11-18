import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const Manageproducts = () => {

const [allproducts, Setallproducts] = useState([])

useEffect(() => {
    fetch('https://safe-sierra-06219.herokuapp.com/products')
    .then (res=>res.json())
    .then (data => Setallproducts(data))
}, [])

const handleProductDelete = (id) => {

    const proceedtoDelete = window.confirm('Be careful! After delete that product will not appear on the explore page.')
    if (proceedtoDelete) {
        fetch(`https://safe-sierra-06219.herokuapp.com/products/${id}`, {
        method: 'DELETE'
    })
    .then (res=> res.json())
    .then (data => {
        if (data.deletedCount > 0) {
            alert('Deleted Successfully')
            const remainingProducts = allproducts.filter (deleteproduct => deleteproduct._id !==id)
            Setallproducts(remainingProducts)
        }
    })


    }
}



    return (
        <>


        {/* <NavBar></NavBar> */}

        <div className='row container-flud'>

        {
            allproducts.map(singleproduct => 
            <div className='col-md-3 col-lg-3 col-sm-6 g-4 my-5' >
                <div>
                    <img className='img-fluid' style={{height:'200px', width:'200px'}} src={singleproduct.img} alt="" />
                </div>
                <div>
                    <h4>{singleproduct.name.slice(0,15)}</h4>
                    <h3 className='text-danger'>${singleproduct.price}</h3>
                    <p>{singleproduct.description.slice(0,70)}</p>
                    {<button onClick= {() => {handleProductDelete(singleproduct?._id)}} className='btn btn-danger'>Delete Product</button> }
                </div>



            </div>)
        }



        </div>

        {/* <Footer></Footer> */}
            
        </>
    );
};

export default Manageproducts;