import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Makeadmin from '../Makeadmin/Makeadmin';
import Dashboardhome from './DashboardHome/Dashboardhome';
import NavBar from '../../Shared/NavBar/NavBar';
import Manageallorders from '../Manageallorders/Manageallorders';
import Manageproducts from '../Manageproducts/Manageproducts';
import Footer from '../../Shared/Footer/Footer';
import Addaproduct from '../AddAproduct/Addaproduct';
import useAuth from '../../Hook/UseAuth';
import Myorders from '../Myorders/Myorders';
import Pay from '../Pay/Pay';
import Customerreview from '../Customerreview/Customerreview';

const Dashboard = () => {


  const {user, admin, logOut} = useAuth();

    let { path, url } = useRouteMatch();
    return (
        <>
        <NavBar></NavBar>
        <div className='row'>
            <div className='col-md-2 col-lg-2 col-sm-6 d-flex flex-column border-end dash-container'>
                <Link to={`${url}`} className='items-dash text-white fw-bold'>Dashboard</Link>

                {admin && 
                <div className='d-flex flex-column text-white'>
                    <Link to={`${url}/manageallorder`} className='items-dash text-warning fw-bold'>Manage All orders</Link>
                    <Link to={`${url}/makeadmin`} className='items-dash text-warning fw-bold'>Make Admin</Link>
                    <Link to={`${url}/manageproduct`} className='items-dash text-warning fw-bold'>Manage Product</Link>
                    <Link to={`${url}/addaproduct`} className='items-dash text-warning fw-bold'>Add A Product</Link>
                    
                    </div>}

                    { user?.email && !admin && 
                    <div className='d-flex flex-column '>
                    <Link to={`${url}/pay`} className='items-dash text-warning fw-bold'>Pay</Link>
                    <Link to={`${url}/myorder`} className='items-dash text-warning fw-bold'>My Orders</Link>
                    <Link to={`${url}/review`} className='items-dash text-warning fw-bold'>Review</Link>
                    </div>}
            
                <button onClick={logOut} className='btn btn-light items-dash'>Log Out</button>
             
               

            </div>
            <div className='col-md-10 col-lg-10 col-sm-6'>
            <Switch>
                <Route exact path={path}>
                    <Dashboardhome></Dashboardhome>
                 
                </Route>
                <Route path={`${path}/makeadmin`}>
                    <Makeadmin></Makeadmin>
               
                </Route>
                <Route path={`${path}/manageallorder`}>
                    <Manageallorders></Manageallorders>
               
                </Route>
                <Route path={`${path}/manageproduct`}>
                    <Manageproducts></Manageproducts>
               
                </Route>
                <Route path={`${path}/addaproduct`}>
                    <Addaproduct></Addaproduct>
               
                </Route>
                <Route path={`${path}/myorder`}>
                   <Myorders></Myorders>
               
                </Route>
                
                <Route path={`${path}/pay`}>
                   <Pay></Pay>
               
                </Route>
                <Route path={`${path}/review`}>
                   <Customerreview></Customerreview>
               
                </Route>


                </Switch>

            </div>

        </div>

        <Footer></Footer>
            
        </>
    );
};

export default Dashboard;