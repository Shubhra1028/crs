import React, { Component, Fragment } from 'react'
import CompanySignupForm from './CompanySignupForm';
import { Box, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Logo from "./blue-logo.png"

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

        return (
            <Fragment>
                <Box mt={3}>
                <Grid container justify="center">
                    <Grid item>
                        <NavLink to="/">
                            <img src={Logo} alt="Logo" />
                        </NavLink>
                    </Grid>
                </Grid>
                </Box>
                {
                    step==="business" ?
                    <CompanySignupForm 
                        handleStep = {this.handleStep}
                    />
                    : <h1>institute</h1>
                }
            </Fragment>
        )
    }
}

export default SignUp
