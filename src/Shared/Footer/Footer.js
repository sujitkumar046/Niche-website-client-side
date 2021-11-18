import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid border-top pt-5 bg-dark'>
        <div className='row g-3'>
            <div className='col-md-4 col-lg-4 ms-3 col-sm-12' >
                


                <p className='mt-3 ms-1 text-start text-white'>
                © 2021 CORRETTO, All Rights Reserved
                </p>

              
           
                

            </div>


            <div className='col-md-4 col-lg-4 col-sm-12 ms-3'>
               <h3 className='text-start text-warning'>Our Location</h3>
               <p className='text-start text-white'>
               Broadway & Morris St, New York
               </p>
               <p className='text-start text-white' >
                    E-mail: <span className='fw-bold text-underline text-white'>corretto@code.com</span> 
                    <br />

                    Phone: 1562 837 5209
               </p>


           </div>

        

            <div className='col-md-3 col-lg-3 col-sm-6 ms-3'>
                 <div className="d-flex text-center fs-3 ms-1 text-white ">
                  <div className='ms-3'>
                  <i className="fab fa-facebook ms-3"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-twitter"></i>
                  </div>
                  <div className="ms-2">
                    <i className="fab fa-youtube"></i>
                  </div>
                </div>

            </div>


        </div>
 
  
      
    </div>
    );
};

export default Footer;