import React from 'react';
import { useRef } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';

const Addaproduct = () => {

    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();
    const imgRef =useRef();

    const handlePost = (e) => {
        e.preventDefault ();
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
        const img = imgRef.current.value;

        const newProducts = {name, price, description, img}
        fetch ('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify(newProducts)

        })
        .then (res=> res.json())
        .then (data => {
            if (data.insertedId) {
                alert ('Successfully created the products')
                e.target.reset()
            }
        } )



    }



    return (
        <>
        <NavBar></NavBar>
        <div className='container-fluid my-5'>
           <h1> Add A Product Here!</h1> 
            <form onSubmit={handlePost}>
            <input className='w-50' type="text" ref={nameRef} placeholder='name' /> <br /> <br />
            <input className='w-50' type="text" ref={priceRef} placeholder='price' /> <br /> <br />

            <textarea className='w-50' ref={descriptionRef} name="" id="" cols="30" rows="5" placeholder='Description'></textarea> <br /><br />
            
    
            <input className='w-50' type="text" ref={imgRef} placeholder='img URL' /> <br /> <br />
            <button className='btn btn-primary' type="submit">Click to Add</button>



            </form>
            



            
        </div>
            

        </>
    );
};

export default Addaproduct;