import React from 'react';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Box } from '@material-ui/core';

const SignUpBtn = withStyles( theme => ({ 
    root : {
        padding: "8px 50px",
        border: "none",
        borderRadius: "0",
        outline: "none",
        background: "white",
        color: "#36CA8E",
        marginLeft: theme.spacing(5),
        boxShadow: "0 10px 30px -5px rgba(54, 202, 142, .16)",
        "&:hover" : {
            background: "#36CA8E",
            color: "white"
        }
    }
}))(Button);

const useStyles = makeStyles( theme => ({
    root: {
        flexGrow: 1,
    },

    navbar : {
        minHeight: "100px",
        background: "transparent",
        boxShadow: "none",
        justifyContent: "center"
    },

    justifyCenter : {
        display: "flex",
        justifyContent:"space-between",
        alignItems: "center",
    },

    title: {
        display: "flex",
        justifyContent: "flex-end",
    },

}));

export default function FixedContainer() {

    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar  className={classes.navbar} position="static">
        <Container  className={classes.justifyCenter}  >
                <Toolbar className={classes.title}>
                        <img className={classes.logo} src="assets/logo.png" alt="Logo" />
                </Toolbar>
                <Box>
                    <Button color="inherit">Login</Button>
                    <SignUpBtn className={classes.btn}>Sign Up</SignUpBtn>
                </Box>
            
        </Container>
      </AppBar>
    </div>
  );
}