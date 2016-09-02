import React, { Component } from 'react';
import firebaseUtils from '../utils/FirebaseUtils';
import '../stylesheets/Signup.css';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userName: "",
      firstName: "",
      lastname: "",
      phone: 0,
      zipcode: 0
    }
  }

  logOut(event) {
    firebaseUtils.SignOut(event);
    console.log("User has signed out!");
  }

  makeUser(event, email, password, obj) {
      firebaseUtils.SignUp(this.state.email, this.state.password, this.state)
  }

  render() {
    return (
      <div className="signUpForm">
        <div className="font-effect-wallpaper">
          <ul>
            <li className="signup-item"><h3>Sign Up</h3></li>
            <li className="signup-item">Email:<br/><input onChange={e => this.setState({email: e.target.value})}/></li>
            <li className="signup-item">Password:<br/><input onChange={e => this.setState({password: e.target.value})}/></li>
            <li className="signup-item">Username:<br/><input onChange={e => this.setState({userName: e.target.value})}/></li>
            <li className="signup-item">First Name:<br/><input onChange={e => this.setState({firstName: e.target.value})}/></li>
            <li className="signup-item">Last Name:<br/><input onChange={e => this.setState({lastName: e.target.value})}/></li>
            <li className="signup-item">Phone Number:<br/><input onChange={e => this.setState({phone: e.target.value})}/></li>
            <li className="signup-item"><button className="signUp" onClick={(event) => this.makeUser(event)}>Join WERKX5</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Signup;
