import React from 'react';
// import Review from '../../Components2/Review/Review';


import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../Carousel/Carousel';
import Naill from '../Naill/Naill';
import Naill1 from '../Naill/Nail1';
import ReviewHome from '../../Components/ReviewHome/ReviewHome'

import Product from '../Product/Product';


const Header = () => {
    return (
        <div style={{fontFamily:"Besley"}}>
            <Navbar></Navbar>
            <Carousel></Carousel>
            <Product></Product>
            <Naill1></Naill1>

            <ReviewHome></ReviewHome>


            <Naill></Naill>
            
              <Footer></Footer>

            
      
            
           
        </div>
    );
};

export default Header;