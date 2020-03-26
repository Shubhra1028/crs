import React from 'react';
import './App.css';
import Home from './components/home'
import Main from './components/MainComponent'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/company' component={Home} />
        <Route exact path='/university' component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  )
  }


  export default App;