import React, { Component, Fragment } from 'react'
import { Container } from '@material-ui/core';
import Navbar from './navbar/Navbar';
import HeroComponent from './hero-text/HeroComponent';
import WhatWeDo from './whatWeDo/whatWeDo';
import Role from "./role/RoleComponent";
import Footer from './footer';

class HomePage extends Component {

    render() {
        return (
            <Fragment>
                <Navbar />
                <Container>
                    <HeroComponent />
                    <WhatWeDo />
                </Container>
                <Role />
                <Footer />
            </Fragment>
        )
    }
}


export default HomePage;
