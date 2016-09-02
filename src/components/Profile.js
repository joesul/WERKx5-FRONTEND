import React, { Component } from 'react';
import { Link } from 'react-router';
import '../stylesheets/Profile.css';

class Profile extends Component {

  render() {
    return (
      <div className="profile-wrapper">
        <ul>
          <li><h2>Welcome</h2></li>
          <li><Link to="/createjobs"><h3 className="font-effect-wallpaper">Post a Job Listing</h3></Link></li>
          <li><Link to="/jobslisted"><h3 className="font-effect-wallpaper">View My Listings</h3></Link></li>
          <li><Link to="/searchjobs"><h3 className="font-effect-wallpaper">Search Jobs</h3></Link></li>
          <li><Link to="/jobstaken"><h3 className="font-effect-wallpaper">My Current Jobs</h3></Link></li>
        </ul>
      </div>
    );
  }
}

export default Profile;
