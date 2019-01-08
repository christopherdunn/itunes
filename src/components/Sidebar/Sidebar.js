import React from 'react';
import './Sidebar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple,faReact } from '@fortawesome/free-brands-svg-icons';
import genres from './genres.png';
import {
  faCalendarAlt,
  faTv,
  faArrowCircleDown,
  faFolderOpen,
  faMusic,
  faMicrophone,
  faBackward,
  faForward,
  faPlay,
  faBars,
  faCogs,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faCalendarAlt,
  faArrowCircleDown,
  faFolderOpen,
  faTv,
  faBars,
  faMicrophone,
  faMusic,
  faReact,
  faApple,
  faBackward,
  faForward,
  faCogs,
  faPlay,
  faSearch
)

const sidebar = props => (
<div className="sidebar">
  Library
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'calendar-alt']} size="1x" /><span className="playlist-names">Recently Added</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'microphone']} size="1x" /><span className="playlist-names">Artists</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'folder-open']} size="1x" /><span className="playlist-names">Albums</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'music']} size="1x" /><span className="playlist-names">Songs</span></div>
  <div className="playlist-items"><img height="25px" src={genres}/> Genres</div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'tv']} size="1x" /><span className="playlist-names">Music Videos</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'arrow-circle-down']} size="1x" /><span className="playlist-names">Downloaded</span></div>
  Music playlists
  <div className="playlist-items"><FontAwesomeIcon icon={['fab', 'react']} size="1x" /><span className="playlist-names">Genius</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'bars']} size="1x" /><span className="playlist-names">Purchased</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'cogs']} size="1x" /><span className="playlist-names">Top 100 Songs</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'cogs']} size="1x" /><span className="playlist-names">Top 100 Country Songs</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'cogs']} size="1x" /><span className="playlist-names">Top 100 Albums</span></div>
  <div className="playlist-items"><FontAwesomeIcon icon={['fas', 'cogs']} size="1x" /><span className="playlist-names">Top 100 Country Albums</span></div>

</div>

)
export default sidebar
