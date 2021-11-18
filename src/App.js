
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Home/Homepage/Homepage';
import Explore from './Explore/Explore';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Purchase from './Purchase/Purchase';
import Myorders from './Pages/Myorders/Myorders';
import Pay from './Pages/Pay/Pay';
import Customerreview from './Pages/Customerreview/Customerreview';
import Manageallorders from './Pages/Manageallorders/Manageallorders';
import Addaproduct from './Pages/AddAproduct/Addaproduct';
import Manageproducts from './Pages/Manageproducts/Manageproducts';
import Makeadmin from './Pages/Makeadmin/Makeadmin';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">


      <AuthProvider>

      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Homepage></Homepage>
        </Route>
        <Route path='/home'>
          <Homepage></Homepage>
        </Route>
        <Route path='/explore'>
          <Explore></Explore>
        </Route>
        <PrivateRoute path='/purchase/:ID'>
          <Purchase></Purchase>
        </PrivateRoute>
        <Route path='/register'>
          <Register></Register>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/myorder'>
          <Myorders></Myorders>
        </Route>
        <Route path='/pay'>
          <Pay></Pay>
        </Route>
        <Route path='/review'>
          <Customerreview></Customerreview>
        </Route>
        <Route path='/manageallorder'>
         <Manageallorders></Manageallorders>
        </Route>
        <Route path='/addaproduct'>
         <Addaproduct></Addaproduct>
        </Route>
        <Route path='/manageproduct'>
         <Manageproducts></Manageproducts>
        </Route>
        <Route path='/makeadmin'>
         <Makeadmin></Makeadmin>
        </Route>
        <Route path='/dashboard'>
         <Dashboard></Dashboard>
        </Route>
        



      </Switch>
      
      </BrowserRouter>


      </AuthProvider>
      
     
    </div>
  );
}

export default App;
