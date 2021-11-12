import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import NavBar from '../../Shared/NavBar/NavBar';



const Login = () => {
 
    const {LoginWithEmail} = useAuth();


    const [logindata, Setlogindata] = useState({})

    const handleOnChange  = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const loggedUser = {...logindata};
        loggedUser[field] = value;
        Setlogindata(loggedUser)


    
    }

    const handleLogin = (e) => {

       LoginWithEmail(logindata.email, logindata.password)
        alert('Successfuly logged in')
        e.preventDefault();





    }

    return (
        <>
        <NavBar></NavBar>
        <div className='row col-lg-11 col-md-11 col-sm-12 container-fluid ms-3 border my-5'>
            <h3 className='text success'>Please Login</h3>
            <br />
            <div>
                <form onSubmit={handleLogin}>
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
                <p> Don't have an account? <Link to='/register'>Please Register</Link> </p>
                <button className='btn btn-warning' >Google Sign in</button>
                </div>

                
                    
            </div>
        </div>

            
        </>
    );
};

export default Login;