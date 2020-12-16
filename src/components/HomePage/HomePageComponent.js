import React, { Component, Fragment } from 'react'
import { Container } from '@material-ui/core';
import Navbar from './Navbar';
import HeroComponent from './HeroComponent';
import WhatWeDo from './whatWeDo';
import Role from "./RoleComponent";
import Footer from './footer';
import "./styles.css";
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

function HomePage() {
        const classes = useStyles();
        return (
            <div className={ classes.bgImg }>
                <Navbar />
                <Container>
                    <HeroComponent />
                    <WhatWeDo />
                </Container>
                <Role />
                <Footer />
            </div>
        )
    }


export default HomePage;
