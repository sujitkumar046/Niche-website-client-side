import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import HomeProducts from '../HomeProducts/HomeProducts';

const Homepage = () => {
    return (
        <>
            <NavBar></NavBar>
            <h1>This is the homepage</h1>
            <HomeProducts></HomeProducts>
            
        </>
    );
};

export default Homepage;