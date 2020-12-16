import React, { Fragment } from 'react';
import { Grid, Paper, Box } from "@material-ui/core";

function WhatWeDo() {
    return (
        <Fragment>
            <Grid container className="wrapper">
                <Grid item sm>
                    <img className="img" src="assets/work.svg" alt="Work" />
                </Grid>
                <Grid item sm>
                    <h2 className="heading">What we do</h2>
                    <Paper className="paper">
                        <Box mx={5} mt={5} pt={5}>
                            <h3 className="sub-heading">Connect people with the right jobs.</h3>
                        </Box>
                        <Box mx={5} pt={2}>
                            <p className="para">If you are an educational institution whose looking for better placement opportunities then you've come the right place.</p>
                        </Box>
                        <Box mx={5} pt={2} pb={5}>
                            <a href="#" className="link">Get started</a>
                        </Box>
                    </Paper>
                    <Paper className="paper" >
                        <Box mx={5} mt={5} pt={5}>
                            <h3 className="sub-heading">Get you job postings & info out to the world.</h3>
                        </Box>
                        <Box mx={5} pt={2}>
                            <p className="para">If you are a company looking for the best and fresh talent, then look no further and try us today!</p>
                        </Box>
                        <Box mx={5} pt={2} pb={5}>
                            <a href="#" className="link">Get started</a>
                        </Box>
                    </Paper>
                </Grid>
                
            </Grid>

        </Fragment>
    )
}

export default WhatWeDo;
