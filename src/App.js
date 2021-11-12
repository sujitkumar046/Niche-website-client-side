
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Home/Homepage/Homepage';
import Explore from './Explore/Explore';
import Register from './Pages/Register/Register';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

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
        
        <PrivateRoute path='/explore'>
          <Explore></Explore>
        </PrivateRoute>
        <Route path='/register'>
          <Register></Register>
        </Route>
        
        <Route path='/login'>
          <Login></Login>
        </Route>
        


      </Switch>
      
      </BrowserRouter>


      </AuthProvider>
      
     
    </div>
  );
}

export default App;
