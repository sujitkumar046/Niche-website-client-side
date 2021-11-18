import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';










const Register = () => {

    const {RegisterWithEmail, user, authError} = useAuth();

    const history = useHistory()

    const [registerdata, Setregisterdata] = useState({})

    const handleOnBlur  = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisteredUser = {...registerdata};
        newRegisteredUser[field] = value;
        console.log (newRegisteredUser)
        Setregisterdata(newRegisteredUser)


    
    }

    const handleRegister = (e) => {

        RegisterWithEmail(registerdata.email, registerdata.password, registerdata.name, history)
        e.preventDefault();





    }
    



    return (
        <>
            <NavBar></NavBar>

             <div className='row col-lg-6 col-md-6 col-sm-12 container-fluid border my-5 mx-auto '>
            <h3 className='text success'>Please Register</h3>
            <br />
            <div>
                <form onSubmit={handleRegister}>
                    <label className='w-50 text-primary fs-4 mb-1 text-start' htmlFor="text">Name:</label> <br />
                    <input className='w-50' onBlur={handleOnBlur} name="name"  placeholder='Enter Your Name' /> <br /> 
                    <label className='w-50 text-primary fs-4 mb-1 text-start' htmlFor="email">Email:</label> <br />
                    <input className='w-50' onBlur={handleOnBlur} type="email" name="email"  placeholder='Enter Your Email' /> <br /> 
                    <label className='w-50 text-primary fs-4 mb-1 text-start' htmlFor="password">Password:</label> <br />
                    <input className='w-50' onBlur={handleOnBlur} type="password" name="password" placeholder='Enter password' />
                    <br />
                    <br />
                    {
                    user?.email &&  
                    <p>Hello! You've registered successfully</p>
                    } 

                    {authError &&  <div className='text-danger'>
                        <p>{authError}</p>
                        <p>{authError.message}</p>
                    </div> }
                    <button className='btn btn-primary' type="submit">Submit</button> <br />
                    
                    

    
                </form>

              

                <div className='m-2'>
                <p> Already have an account? <Link to='/login'>Please login</Link> </p>
                <button className='btn btn-warning' >Google Sign in</button>
                </div>

                
                    
            </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Register;