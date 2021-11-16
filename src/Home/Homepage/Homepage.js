import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import HomeProducts from '../HomeProducts/HomeProducts';
import Review from '../Review/Review';

const Homepage = () => {
    return (
        <>
            <NavBar></NavBar>
            <h1>This is the homepage</h1>
            <HomeProducts></HomeProducts>
            <Review></Review>
            
        </>
    );
};

export default Homepage;