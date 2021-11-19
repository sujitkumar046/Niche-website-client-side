import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import './NavBar.css'

const NavBar = () => {

    const {user} = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand" href="#">
                    <img height='50px' width='150px' className='img-fluid' src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png" alt=""  class="d-inline-block align-text-top"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                          
                            <li className="nav-item">
                             <Link to='/home' id='item-color' className="nav-link active fw-bold items" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/explore' id='item-color' className="nav-link fw-bold items" >Explore</Link>
                            </li>
                            {user.email && <li className="nav-item">
                                <Link to='/dashboard' id='item-color' className="nav-link fw-bold items" >Dashboard</Link>
                            </li>}
                           

                    {user?.email  ? <li className="nav-item mx-auto">

                    <span className="nav-link items text-warning fw-bold" >Hello ! {user.displayName}</span>

                    </li> :
                    <li className="nav-item fw-bold">
                    <Link to='/login' id='item-color' className="nav-link items" >Login</Link>
                    </li>}


                            

                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;