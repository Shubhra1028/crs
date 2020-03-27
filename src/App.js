import React from 'react';
import './App.css';
import Home from './components/home'
import Main from './components/MainComponent'
import Company from './components/company/company'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/company' component={Company} />
        <Route exact path='/university' component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  )
  }


  export default App;