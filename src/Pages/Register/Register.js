import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import NavBar from '../../Shared/NavBar/NavBar';










const Register = () => {

    const {RegisterWithEmail, user, authError} = useAuth();

    const [registerdata, Setregisterdata] = useState({})

    const handleOnChange  = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisteredUser = {...registerdata};
        newRegisteredUser[field] = value;
        console.log (newRegisteredUser)
        Setregisterdata(newRegisteredUser)


    
    }

    const handleRegister = (e) => {

        RegisterWithEmail(registerdata.email, registerdata.password)
        // alert('Successfuly Registered')
        e.preventDefault();





    }
    



    return (
        <>
            <NavBar></NavBar>

             <div className='row col-lg-11 col-md-11 col-sm-12 container-fluid ms-3 border my-5 '>
            <h3 className='text success'>Please Register</h3>
            <br />
            <div>
                <form onSubmit={handleRegister}>
                    <label className='text-primary fs-4 me-2' htmlFor="email">Email:</label>
                    <input onChange={handleOnChange} type="email" name="email"  placeholder='Enter Your Email' /> <br /> 
                    <label className='text-primary fs-4 me-2' htmlFor="password">Password:</label>
                    <input onChange={handleOnChange} type="password" name="password" placeholder='Enter password' />
                    <br />
                    <br />
                    {
                    user?.email &&  
                    alert('Successfuly Registered')
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
        </>
    );
};

export default Register;