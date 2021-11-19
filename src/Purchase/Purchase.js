import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../Hook/UseAuth';
import NavBar from '../Shared/NavBar/NavBar';

const Purchase = () => {
 
    const {ID} = useParams();
    const {user} = useAuth();

    const [productdetails, Setproductdetails] = useState({})

   useEffect (() => {
       fetch (`https://safe-sierra-06219.herokuapp.com/products/${ID}`)
       .then (res => res.json())
       .then (data => Setproductdetails(data) )
   }, [ID])



   const nameRef = useRef();
   const emailRef = useRef();
   const phoneRef =useRef();
   const productRef = useRef();
   const statusRef = useRef();

   const handleOrder = (e) => {

    e.preventDefault ();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const product = productRef.current.value;
        const status = statusRef.current.value

        const newOrder = {name, email, phone, product, status}

        fetch ('https://safe-sierra-06219.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify(newOrder)

        })
        .then (res=> res.json())
        .then (data => {
            if (data.insertedId) {
                alert ('Successfully placed the order')
                e.target.reset()
                
            }

        })

        



   }



    return (
        <>
        <NavBar></NavBar>

<div className='row container-fluid mt-5 '>
            <div className='col-md-6 cole-md-4 col-sm-12 border mb-5'>
            <img className='img-fluid' src={productdetails?.img} alt="" />
            <h2 className='text-primary mt-2'>{productdetails?.name}</h2>
            <h3 className='text-danger'> Price: ${productdetails?.price}</h3>
            <h6 className='text-start'>This is booking {productdetails?.description}</h6>
            </div>

            <div className='col-md-6 cole-md-4 col-sm-12 border mb-5'>
                <h4 className='text-center text-success'>Please fill the required field to place the order!</h4>
                <br />
            <form onSubmit={handleOrder} >
            <input className='w-75' ref={productRef} type="text" value={productdetails?.name} placeholder='name' /> <br /> <br />
            <input className='w-75' ref={nameRef} type="text" value={user?.displayName} placeholder='name' /> <br /> <br />
            <input className='w-75' ref={emailRef} type="text" value={user?.email} placeholder='description' /><br /> <br />
            <input className='w-75' ref={phoneRef} type="text"  placeholder='Phone' required /> <br /> <br />
            <input className='w-75' ref={statusRef} type="hidden" value={productdetails?.status} placeholder='' /> <br /> <br />

            <button className='btn btn-primary' type="submit">Book Now</button>
           
            
            



            </form>
            


            </div>

        </div>

            
        </>
    );
};

export default Purchase;