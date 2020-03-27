import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './HomePage/HomePageComponent';
import SignUp from "./SignUpPage/SignUp";
import Login from "./LoginPage/Login";

function MainComponent() {
    
    return (
        <div>
                <Switch>
                    <Route path="/home" component={ () => <HomePage /> } />
                    <Route exact path="/signup/company" component={ () => <SignUp business />} />
                    <Route exact path="/signup/institute" component={ () => <SignUp institute />} />
                    <Route exact path="/login" component={ () => <Login /> } />
                    <Redirect to="/home" />
                </Switch>
            
        </div>
    )
}

export default MainComponent;
