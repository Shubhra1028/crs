import React, { Fragment } from 'react'
import { Box, Grid, Typography, Link } from "@material-ui/core";
import PrimaryButton from "../PrimaryButton";

const styles = {
    whiteText: {
        color: "white",
    },
    bold : {
        fontWeight: "bolder",
    },
    justifyCenter: {
        display: "flex",
        height: "calc(100vh - 100px)",
        alignItems: "center",
    },
    mb : {
        spacing: 8,
    }
}

function HeroComponent() {
    return (
            <Fragment>
            <Grid container style={styles.justifyCenter}>
                <Grid item sm >
                    
                    <Typography variant="subtitle1" style= {styles.whiteText}>Let the best talent be hired</Typography>
                    <h1 className="primary-font hero-heading">Find & post jobs!</h1>
                    
                    <Grid container>
                        <a href="/signup/institute" >
                        <PrimaryButton inverted text="Looking for a job" />
                        </a>

                        <Box ml={3}> 
                            <a href="/signup/company">
                                <PrimaryButton text="Want to hire?" /> 
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            </Fragment>
    )
}

export default HeroComponent;
