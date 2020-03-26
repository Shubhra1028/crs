import React from 'react'
import HomePage from './HomePageComponent';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    
    bgImg: {
        backgroundImage: "url(assets/bg.png)",
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

}));


function MainComponent() {
    const classes = useStyles();
    return (
        <div className={ classes.bgImg }>
            <HomePage />
        </div>
    )
}

export default MainComponent;
