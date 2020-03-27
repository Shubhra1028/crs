import React, { Component, Fragment } from 'react'
import { Grid, Box, Paper, TextField, Button} from "@material-ui/core"
import { NavLink } from "react-router-dom"
import Bg from "./signup.png"
import Logo from "./blue-logo.png"



export class CompanySignupForm extends Component {
    render() {
        return (
            <Fragment>
                <Grid style={styles.root} container component={Paper} elevation={0}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Grid style={Object.assign({}, styles.paper, styles.personBg)} container component="div" elevation={0}
                                direction ="column" justify="space-between">
                                <Grid item sm>
                                    <h2 className="heading">Sign up<br/> & hire the best talent</h2>
                                </Grid>
                                <br />
                                <Grid item justify="flex-end">
                                    <small className="small-link">Already a member <a href="/login"><b> Login here</b></a> </small>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={styles.grayBg} item xs={12} sm={12} md={6}>
                        <form style={styles.form}>
                            
                            <TextField 
                                type = "text"
                                variant = "standard"
                                label="Let's start with name"
                                margin = "normal"
                                fullwidth
                                required
                                id= "name"
                                name="name"
                            />
                            <TextField 
                                type = "number"
                                variant = "standard"
                                label="The year you got registered"
                                margin = "normal"
                                fullwidth
                                required
                                id= "year"
                            />
                            <TextField 
                                type = "text"
                                variant = "standard"
                                label="What is your domain"
                                margin = "normal"
                                fullwidth
                                required
                                id= "domain"
                                helperText = "Eg. I.T."
                            />
                            <TextField 
                                type = "email"
                                variant = "standard"
                                label="Email Address"
                                margin = "normal"
                                fullwidth
                                required
                                id= "email"
                            />
                            <TextField
                                margin = "normal"
                                type= "text"
                                variant = "standard"
                                label = "Where are you located?"
                                fullwidth
                                required
                                id="location"
                            />
                            <Box mt={10}>
                            <button
                                    type="submit"
                                    className="signup-btn"
                                    >
                                    Sign Up
                            </button>
                            <p className="link" >Not a company but an institute ? <span>Sign up Here</span> </p>
                            </Box>

                        </form>
                    </Grid>

                </Grid>
            </Fragment>
        )
    }
}

const styles = {
    root: {
        minHeight: "80vh",
        width: "70vw",
        margin : "1rem auto auto",
        boxShadow: "0 10px 30px -5px rgba(54, 202, 142, .16)",
    },

    paper: {
        height: "100%",
        width: "100%",
        padding: "3rem",
    },

    personBg: {
        background: "url('./signup.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    },

    form: {
        width: "100%",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },

    grayBg : {
        background: "#EDF1F4"
    },

    whiteBg: {
        background: "white"
    }
}

export default CompanySignupForm
