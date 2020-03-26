import React, { Fragment } from 'react'
import { Box, Grid, Typography } from "@material-ui/core";
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
                    <Typography variant="h2" className="primary-font" style= { styles.whiteText }>Find & Post Jobs</Typography>
                    
                    <Grid container>
                        <PrimaryButton inverted text="Looking for a job" />
                        <Box ml={3}> <PrimaryButton text="Want to hire?" /> </Box>
                    </Grid>
                </Grid>
            </Grid>
            </Fragment>
    )
}

export default HeroComponent;
