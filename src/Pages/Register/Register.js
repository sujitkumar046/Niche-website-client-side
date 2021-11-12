import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';










const Register = () => {

    const {RegisterWithEmail} = useAuth();

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
        e.preventDefault();





    }
    



    return (
        <>
             <div className='row col-lg-11 col-md-11 col-sm-12 container-fluid ms-3 border '>
            <h3 className='text success'>Please login</h3>
            <br />
            <div>
                <form onSubmit={handleRegister}>
                    <label className='text-primary fs-4 me-2' htmlFor="email">Email:</label>
                    <input onChange={handleOnChange} type="email" name="email"  placeholder='Enter Your Email' /> <br /> 
                    <label className='text-primary fs-4 me-2' htmlFor="password">Password:</label>
                    <input onChange={handleOnChange} type="password" name="password" placeholder='Enter password' />
                    <br />
                    <br />

                    {/* <div className='text-danger'>
                        <p>{error}</p>
                        <p>{error.message}</p>
                    </div> */}
                    <button className='btn btn-primary' type="submit">Submit</button> <br />
                    
                    

    
                </form>

                <div className='m-2'>
                <p> Don't have an account? <Link to='/register'>Create Account</Link> </p>
                <button className='btn btn-warning' >Google Sign in</button>
                </div>

                
                    
            </div>
        </div>
        </>
    );
};

export default Register;