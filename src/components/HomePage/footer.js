import React from 'react';
import { Grid, Box} from "@material-ui/core";

export default function footer() {
    return (
        <div className="footer">
            
                <Grid container >
                    <Grid item sm={2}></Grid>
                    <Grid item sm={2}>
                        <img src="assets/blue-logo.png" alt = "Logo"/>
                    </Grid>
                    <Grid item sm={2}>
                        <h3 className="sub-heading">Contact us</h3>
                        <Box mt={2}></Box>
                        <a href="mailto:info@hired.com">
                            <p className="para">info@hired.com</p>
                        </a>
                    </Grid>
                    <Grid item sm={6}>
                        <h5 className="sub-heading">Subscribe to our newsletter!</h5>
                        <Box mt={2}></Box>
                        <form className="form" autoComplete>
                            <input className="form-control" type="email" name="email" placeholder="Enter email id"/>
                            <button className="form-btn">Send </button>
                        </form>
                    </Grid>
                </Grid>
                <Box mt={10}>
                    <p>&copy; Copyrights Reserved. {new Date().getFullYear()} </p>
                </Box>
        </div>
    )
}
