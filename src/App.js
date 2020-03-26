import React from 'react';
import './App.css';
import Home from './components/home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/company' component={Home} />
        <Route exact path='/university' component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
