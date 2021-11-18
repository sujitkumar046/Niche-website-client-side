import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';
import './NavBar.css'

const NavBar = () => {

    const {user, admin, logOut} = useAuth();

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

                            

                            


                           

                            {/* {
                            user?.email && !admin &&
                             
                            <li className="nav-item dropdown">
                             <Link  className="nav-link dropdown-toggle items item-color" id="navbarDropdownMenuLink item-color" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <span className='item-color fw-bold me-2'>Dashboard</span> 
                            </Link>
                           
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/pay' className="dropdown-item fw-bold" >Pay</Link></li>
                                    <li><Link to='/myorder' className="dropdown-item fw-bold" >My Orders</Link></li>
                                    <li><Link to='/review' className="dropdown-item fw-bold" >Review</Link></li>
                                    <li>
                                       
                                        <button  onClick={logOut} className='dropdown-item btn btn-danger fw-bold'>Log Out</button>
                                       
                                        
                                    </li>
                                </ul>
                            </li>
                            
                            } */}

                            {/* {admin &&
                                
                            <li className="nav-item dropdown">
                             <Link className="nav-link dropdown-toggle items item-color" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className='item-color fw-bold'>Dashboard</span> 
                            </Link>
                           
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/manageallorder' className="dropdown-item fw-bold" >Manange All Orders</Link></li>
                                    <li><Link to='/addaproduct' className="dropdown-item fw-bold" >Add A Product</Link></li>
                                    <li><Link to='/makeadmin' className="dropdown-item fw-bold" >Make Admin</Link></li>
                                    <li><Link to='/manageproduct' className="dropdown-item fw-bold" >Manage Product</Link></li>
                                    <li>
                                       
                                        <button  onClick={logOut} className='dropdown-item btn btn-danger fw-bold'>Log Out</button>
                                       
                                        
                                    </li>
                                </ul>
                            </li>
                           } */}

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