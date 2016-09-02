import React, {Component} from 'react';
import Video from '../components/Video';
import '../stylesheets/Video.css';

class Home extends Component {
  render(){
    return(
    <div className="video">
      <Video />
    </div>
  )
  }
}

export default Home;
