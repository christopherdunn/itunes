import React, { Component } from 'react';
import Toolbar from '../components/Toolbar/Toolbar';
import './home.css';
import Sidebar from '../components/Sidebar/Sidebar';
import Songs from './songs'

class home extends Component {
  render() {
    return (
      <div>


      <Toolbar/>


      <div className="playlists">
        <div className="lists"><Sidebar/></div>

        <Songs/>
      </div>
      </div>
    );
  }
}

export default home;
