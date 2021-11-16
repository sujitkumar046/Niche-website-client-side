import React, { useRef } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';

const Customerreview = () => {

    
   const nameRef = useRef();
   const professionRef = useRef();
   const descriptionRef =useRef();
   

   const handlereview = (e) => {
       e.preventDefault()


       const Name = nameRef.current.value;
       const profession = professionRef.current.value;
       const description = descriptionRef.current.value;
      

       const newReview= {Name, profession, description}
       fetch ('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify(newReview)

        })
        .then (res=> res.json())
        .then (data => {
            if (data.insertedId) {
                alert ('Successfully posted your review, you can see at the homepage')
                e.target.reset()
                
            }

        })


       



   }


    
    return (
        <>
        <NavBar></NavBar>
        <div className='my-5'>
        <div className='mx-auto col-md-6 cole-md-4 col-sm-12 border mb-5'>
                <h4 className='text-center text-success'>Please fill the required field to post a review</h4>
                <br />
            <form onSubmit={handlereview} >

            <input className='w-75' ref={nameRef} type="text" placeholder='name' /> <br /> <br />
           
            <input className='w-75' ref={professionRef} type="text" placeholder='Your profession' /><br /> <br />

            <textarea className='w-75' ref={descriptionRef} name="" id="" cols="30" rows="10" placeholder='write your review'></textarea> <br /><br />
           

            <button className='btn btn-primary' type="submit">Post Now</button>
           
            
            



            </form>
            


            </div>

        </div>

       
            
        </>
    );
};

export default Customerreview;