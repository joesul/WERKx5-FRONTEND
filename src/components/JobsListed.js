import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Helper from '../utils/Helper';
import '../stylesheets/JobsListed.css';

let uid = localStorage.getItem('uid')

class JobsListed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: uid,
      message: "",
      response: []
    }
  }

  handleJobsListed(event) {
    let user = this.state.username
    console.log(user);
    Helper.listed(user).then((res) => {
      this.setState({
        message: "",
        response: res.data
      });
        console.log("handle list", res.data);
    });
  }

  handleRemoveJob(event, id) {
    let data = {
      username: this.state.username,
      id: id
    }
    Helper.delete(id, data).then((res) => {
      this.setState({
        message: "Job removed!"
      });
    console.log("handle remove", res.data);
    });
  }

  handleEditJob(event, id) {
    console.log("handleEditJob", id);
    localStorage.setItem("jobId", id);
    browserHistory.push("/jobslisted/edit");
  }

  render() {

    const jobs = this.state.response;
    let jobsList = this;

    return (
      <div className="jobs-listed-wrapper">
        <ul className="jobsListed">
          <button className="jListed" onClick={(event) => this.handleJobsListed(event)}>My Posts</button>
          {jobs.map(function(jobs, index){
            return <h2><li key={index}><li>Job Name: {jobs.job_name}</li> <li>Offer: ${jobs.offer}</li> <li>Description: {jobs.description}</li> <button className="jListed" onClick={(event) => jobsList.handleRemoveJob(event, jobs.id)}>Remove Job</button> <button className="jListed" onClick={(event) => jobsList.handleEditJob(event, jobs.id)}>Edit Job</button></li></h2>
          })}
        </ul>
        <div>{!jobs ? "" : this.state.message}</div>
      </div>
    );
  }
}

export default JobsListed;
