import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';



const Login = () => {
 
    const {LoginWithEmail, user, isloading, authError} = useAuth();

    
    const location = useLocation();
    const history = useHistory();


    const [logindata, Setlogindata] = useState({})

    const handleOnChange  = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const loggedUser = {...logindata};
        loggedUser[field] = value;
        Setlogindata(loggedUser)


    
    }

    const handleLogin = (e) => {

       LoginWithEmail(logindata.email, logindata.password, location, history)
        e.preventDefault();





    }

    return (
        <>
        <NavBar></NavBar>
        <div className='container-fluid my-5 border col-lg-6 col-md-6 col-sm-12'>
            <h3 className='text success'>Please Login</h3>
            <br />
            <div>
                <form onSubmit={handleLogin}>
                    <label className='w-50 text-primary fs-4 mb-1 text-start' htmlFor="email">Email:</label>
                    <br /> 
                    <input className='w-50' onChange={handleOnChange} type="email" name="email"  placeholder='Enter Your Email' /> <br /> 
                    <label className='w-50 text-primary fs-4 mb-1 text-start' htmlFor="password">Password:</label>
                    <br />
                    <input className='w-50' onChange={handleOnChange} type="password" name="password" placeholder='Enter password' />
                    <br />
                    <br />


                    {
                    user?.email &&  
                    <p>Hello! You've logged in</p>

                    } 

                    {isloading &&
                    <div className="spinner-border" role="status">
                     <span className="visually-hidden">Loading...</span>
                    </div>
                    }

                    {authError &&  <div className='text-danger'>
                        <p>{authError}</p>
                        <p>{authError.message}</p>
                    </div> }
                    <button className='btn btn-primary' type="submit">Submit</button> <br />
                    
                    

    
                </form>

                <div className='m-2'>
                <p> Don't have an account? <Link to='/register'>Please Register</Link> </p>
                <button className='btn btn-warning' >Google Sign in</button>
                </div>

                
                    
            </div>
        </div>
        <Footer></Footer>

            
        </>
    );
};

export default Login;