import React, { Fragment } from 'react';
import { Grid, Box } from "@material-ui/core";
import PrimaryButton from "../PrimaryButton";

const styles = {
    gray: {
        color: "#7a7a7a",
        '&::after' : {
            background: "#7a7a7a",
        }
    },

    roleBg: {
        background : "url(assets/role.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
    }
}

export default () => {
    return (
        <Fragment>
            <Grid container className="wrapper" style={styles.roleBg} >
                <Grid item sm={3} >

                </Grid>
                <Grid item sm={4}>
                    <h2 className="heading" style={styles.gray}>
                        We Build Lasting Relationships <br /> Between Candidates & Businesses
                    </h2>
                    <Box mt={5}>
                        <p className="para">
                        We believe in perfect matching between the candidates and companies. This is why we were inspired to build this solution so that we can streamline the process of hiring for companies and for institutions as well
                        </p>
                    </Box>
                    <Box mt={5}>
                        <PrimaryButton text="Let's Get Started" inverted/>
                    </Box>
                </Grid>
                <Grid item sm={5}>
                    <img className="img" src="assets/blobs.png" alt="Blobs image"/>
                </Grid>
            </Grid>
        </Fragment>
    )
}
