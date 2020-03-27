import React, { Component } from 'react'

class JobCard extends Component {
    render() {
        return (
            <div className="jobCard" >
                <h2 className="jobtitle"> UI/UX Designer Intern  </h2>
                <p>
                    <span className="parameter">Posted by : </span>
                    <span className="paramValue">Samsung Inc.</span>
                </p>
                <p>
                    <span className="parameter">Salary : </span>
                    <span className="paramValue">10 LPA</span>
                </p>
                <p className="linkBtn">view more</p>
            </div>
        )
    }
}

export default JobCard;