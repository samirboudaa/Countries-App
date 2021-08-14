

import  NotFound  from './pages/NotFound';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path = "/" exact component = {Home}  />
      <Route path = "/a-propos" exact component = {About}  />
      <Route component = {NotFound}  />
      
    </Switch>
    
    </BrowserRouter>
      
   
  );
};

export default App;
