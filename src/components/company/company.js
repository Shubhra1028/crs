import React, { Component, Fragment } from 'react'
import './style.scss'
import logo from './../../assets/logo.png'
import work from './../../assets/workDig.svg'
import { Tabs, Tab, Drawer, TextField, Button } from "@material-ui/core"
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
                variant="permanent"
                classes={{
                    paper: "postJobForm",
                }}
                anchor="right"
            >
                <p className="links">Post Job</p>
                <form action="" className="postJob" >
                    <TextField id="jobPosition" name="jobPosition" label="Job Position" type="text" variant="outlined" />
                    <TextField id="eligibility" name="eligibility" label="Eligibility criteria" type="text" variant="outlined" />
                    <TextField id="vacancy" name="vacancy" label="Number of Vacancies" type="number" variant="outlined" />
                    <TextField id="location" name="location" label="Location of the Job" type="text" variant="outlined" />
                    <TextField id="file" name="file" label="" type="file" variant="outlined" />
                    <Button type="submit" variant="contained" >Post job</Button>
                </form>
            </Drawer>
            </Fragment>
        )
    }
}

export default Company;