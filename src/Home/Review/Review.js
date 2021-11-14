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

        <div className='row container-fluid'>

            

        </div>
            
        </>
    );
};

export default Review;