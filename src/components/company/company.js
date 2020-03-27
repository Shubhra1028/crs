import React, { Component, Fragment } from 'react'
import './style.scss'
import logo from './../../assets/logo.png'
import work from './../../assets/workDig.svg'
import { Tabs, Tab, Drawer } from "@material-ui/core"
import JobCard from './jobCard'

class Company extends Component {
    render() {
        return (
            <Fragment>
            <div className="main" >
                <img src={logo} alt="hired."/>
                <div className='contentBlock' >
                    <h4 className="title">DashBoard</h4>
                    <div className="banner">
                        <div>
                            <h2 className="alertTitle">Welcome back!</h2>
                            <p className="subtitle">Let's get you started</p>
                            <p className="links">Need help ?</p>
                        </div>
                        <div>
                            <img src={work} alt=""/>
                        </div>
                    </div>
                </div>

                <div className='contentBlock' >
                    <h4 className="title">Pending</h4>
                    <Tabs
                        value={null}
                        onChange={null}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="pending jobs cards"
                        className="scrollableTabs"
                        >
                        <Tab label={<JobCard />} />
                        <Tab label={<JobCard />} />
                        <Tab label={<JobCard />} />
                        <Tab label={<JobCard />} />
                        <Tab label={<JobCard />} />
                        <Tab label={<JobCard />} />
                        <Tab label={<JobCard />} />
                    </Tabs>
                </div>
            </div>
            <Drawer
                // className={classes.drawer}
                variant="permanent"
                // classes={{
                // paper: classes.drawerPaper,
                // }}
                anchor="right"
            >
                hello
            </Drawer>
            </Fragment>
        )
    }
}

export default Company;