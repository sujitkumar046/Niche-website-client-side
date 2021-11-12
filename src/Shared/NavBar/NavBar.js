import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const NavBar = () => {

    const {user, logOut} = useAuth();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                             <Link to='/home' className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/explore' className="nav-link" >Explore</Link>
                            </li>

                            {
                                user?.email ? 
                                <li className="nav-item dropdown">
                             <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Dashboard
                            </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" >Pay</Link></li>
                                    <li><Link className="dropdown-item" >My Orders</Link></li>
                                    <li><Link className="dropdown-item" >Review</Link></li>
                                    <li>
                                       
                                        <button  onClick={logOut} className='dropdown-item btn btn-danger'>Log Out</button>
                                       
                                        
                                    </li>
                                </ul>
                            </li>
                            :
                            <li className="nav-item">
                            <Link to='/register' className="nav-link" >Register</Link>
                            </li>


                            }
                           
                            

                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;