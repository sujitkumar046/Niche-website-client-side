import React from 'react';
import { useState, useEffect } from 'react';




const Review = () => {

    const [reviews, Setreviews] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/reviews')
        .then (res => res.json())
        .then (data => Setreviews(data))
    }, [])





    


    return (
        <>
        <h2 className='text-success bottom-border'>Customer Reviews</h2>

        <div className='row container-fluid my-5'>
            {
                reviews.map (review => 
                <div className='col-md-3 col-lg-3 col-sm-12 g-4 border'>
                    <div>
                        <h4 className='text-primary'>{review.Name}</h4>
                        <h5>{review.profession}</h5>
                        <p>{review.description}</p>


                    </div>




                </div>)
            }

            

        </div>
            
        </>
    );
};

export default Review;