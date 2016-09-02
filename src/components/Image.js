import React, {Component} from 'react'
import logo from '../images/logo.jpg'
import '../stylesheets/images.css'

class Image extends Component{
  render(){
    return(
       <img alt="" src={logo}/>
    )
  }
}

export default Image
