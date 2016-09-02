import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Image from './Image';
import '../stylesheets/App.css';

class App extends Component {

  handleHome(){
    browserHistory.push("/")
  }

  handleSignup(){
    browserHistory.push("/signup")
  }

  handleLogin(){
    browserHistory.push("/login")
  }

  handleAbout(){
    console.log("EVERYTHING IS AWESOME!");
  }

  render() {
    return (
      <div className="app-wrapper">
        <header className="header">
         <h1 className="font-effect-wallpaper">WERKX5</h1><Image />
        </header>
        <div className="navi">
          <button className="app-button" onClick={this.handleHome.bind(this)}><h2 className="font-effect-wallpaper">Home</h2></button>
          <button className="app-button" onClick={this.handleSignup.bind(this)}><h2 className="font-effect-wallpaper">Sign Up</h2></button>
          <button className="app-button" onClick={this.handleLogin.bind(this)}><h2 className="font-effect-wallpaper">Log In</h2></button>
          <button className="app-button" onClick={this.handleAbout.bind(this)}><h2 className="font-effect-wallpaper">About Us</h2></button>
        </div>
       <div>
        {this.props.children}
       </div>
      </div>
    );
  }
}

export default App;
