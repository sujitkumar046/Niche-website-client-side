
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Home/Homepage/Homepage';
import Explore from './Explore/Explore';

function App() {
  return (
    <div className="App">
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
        


      </Switch>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
