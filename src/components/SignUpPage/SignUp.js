import React, { Component } from 'react'
import CompanySignupForm from './CompanySignupForm';

class SignUp extends Component {

    constructor(props){
        super(props)

        this.state = {
            step : props.business ? "business" : "institute"
        }
    }

    //set step in state
    handleStep = value => {
        this.setState({
            step : value
        })
    }

    render() {
        const { step } = this.state;
        switch(step){
            case "business":
                return (
                    <CompanySignupForm 
                        handleStep = {this.handleStep}
                    />
                )
            
            case "institute":
                return (
                    <h1>institute</h1>
                )
        }
    }
}

export default SignUp
