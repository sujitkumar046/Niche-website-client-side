import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import HomeProducts from '../HomeProducts/HomeProducts';
import Percentageoff from '../Percentageoff/Percentageoff';
import Review from '../Review/Review';

const Homepage = () => {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Percentageoff></Percentageoff>
            <Review></Review>
            <Footer></Footer>
            
        </>
    );
};

export default Homepage;