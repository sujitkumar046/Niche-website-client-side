import React, { useEffect, useState } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';

const Manageallorders = () => {


const [allorder, Setallorder] = useState([])

useEffect(() => {
    fetch('http://localhost:5000/orders')
    .then(res => res.json())
    .then (data => Setallorder(data))
}, [])


const handleOrders = (id) => {

    const proceed = window.confirm ('Are you sure to delete')
    if (proceed) {
        fetch(`http://localhost:5000/orders/${id}`, 
    {
        method: 'DELETE'
    })
    .then (res =>res.json())
    .then (data => {
        if (data.deletedCount > 0) {
            alert('order cancelled SuccessfullY')
            const restOrders = allorder.filter (all => all._id !== id)
            Setallorder(restOrders)
        }
    })

    }

    
}


    return (
        <>
        <NavBar></NavBar>

        

        <div className='row container-fluid'>
        <h2>Here are all the orders</h2>

            
        {
            allorder.map(singleorder => 
            <div className='col-md-3 col-lg-3 col-sm-6 border'>
                <h4>Hello <span className='text-success'>{singleorder?.name} </span>  </h4>
                    <h5>Your Order: <span className='text-primary'>{singleorder?.product}</span> </h5>
                    <button onClick={() => {handleOrders(singleorder._id)}} className='btn btn-danger'>Delete</button>

                



            </div>)
        }


        </div>

            
        </>
    );
};

export default Manageallorders;