import React from 'react';
import { useState, useEffect } from 'react';
import Rating from 'react-rating';
import './Review.css'




const Review = () => {

    const [reviews, Setreviews] = useState([])

    useEffect (() => {
        fetch('https://safe-sierra-06219.herokuapp.com/reviews')
        .then (res => res.json())
        .then (data => Setreviews(data))
    }, [])





    


    return (
        <>
        <h2 className='review-color fs-1 fw-bold '>Customer Reviews!</h2>

        <div className='row container-fluid my-5'>
            {
                reviews.map (review => 
                <div className='col-md-3 col-lg-3 col-sm-12 g-4 border'>
                    <div>
                        <h4 className='text-primary'>{review.Name}</h4>
                        <h5>{review.profession}</h5>
                        <p>"{review.description}"</p>
                        <Rating 
                        initialRating={3}

                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        
                        
                        readonly></Rating>


                    </div>




                </div>)
            }

            

        </div>
            
        </>
    );
};

export default Review;