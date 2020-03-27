import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './HomePage/HomePageComponent';
import SignUp from "./SignUpPage/SignUp";
import Login from "./LoginPage/Login";
import Company from "./company/company"

function MainComponent() {
    
    return (
        <div>
                <Switch>
                    <Route path="/home" component={ () => <HomePage /> } />
                    <Route exact path="/signup/company" component={ () => <SignUp business />} />
                    <Route exact path="/signup/institute" component={ () => <SignUp institute />} />
                    <Route exact path="/login" component={ () => <Login /> } />
                    <Route exact path="/company" component={ Company } />
                    <Route exact path="/institute" component={ Company } />
                    <Redirect to="/home" />
                </Switch>
            
        </div>
    )
}

export default MainComponent;
