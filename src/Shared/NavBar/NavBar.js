import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const NavBar = () => {

    const {user, admin, logOut} = useAuth();

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

                            {user?.email  ? <li className="nav-item mx-auto">

                            <span className="nav-link" >Hello ! {user.displayName}</span>

                            </li> :
                            <li className="nav-item">
                            <Link to='/register' className="nav-link" >Register</Link>
                            </li>}

                            


                           

                            {
                            user?.email && !admin &&
                             
                            <li className="nav-item dropdown">
                             <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Dashboard
                            </Link>
                            {/* <span>{user.email}</span> */}
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/pay' className="dropdown-item" >Pay</Link></li>
                                    <li><Link to='/myorder' className="dropdown-item" >My Orders</Link></li>
                                    <li><Link to='/review' className="dropdown-item" >Review</Link></li>
                                    <li>
                                       
                                        <button  onClick={logOut} className='dropdown-item btn btn-danger'>Log Out</button>
                                       
                                        
                                    </li>
                                </ul>
                            </li>
                            
                            }

                            {admin &&
                                
                            <li className="nav-item dropdown">
                             <Link className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 Admin Panel
                            </Link>
                           
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to='/manageallorder' className="dropdown-item" >Manange All Orders</Link></li>
                                    <li><Link to='/addaproduct' className="dropdown-item" >Add A Product</Link></li>
                                    <li><Link to='/makeadmin' className="dropdown-item" >Make Admin</Link></li>
                                    <li><Link to='/manageproduct' className="dropdown-item" >Manage Product</Link></li>
                                    <li>
                                       
                                        <button  onClick={logOut} className='dropdown-item btn btn-danger'>Log Out</button>
                                       
                                        
                                    </li>
                                </ul>
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