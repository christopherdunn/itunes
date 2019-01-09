import React, { Component } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import './home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Songs from './songs';
import Albums from './topalbums';

class home extends Component {

  render() {
    return (
      <div>


      <Toolbar/>

      <div className="maincontent">
        <div className="sidenav"><Sidebar/></div>
      <div className="playlist">


        <Songs/>
        <div className="temp"><Albums/></div>
      </div>

      </div>

      </div>
    );
  }
}

export default home;
