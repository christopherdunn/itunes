import React from 'react';
import './Toolbar.css';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Slider from '../VSlider/Slider';
import {

  faBackward,

  faListUl,
  faForward,
  faPlay,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import airplay from './airplay.png';

library.add(
  faApple,
  faListUl,
  faBackward,
  faForward,
  faPlay,
  faSearch
)



const toolbar = props => (
  <div className="toolbar">
      <nav className="toolbar__navigation">
        <div className="dots">
          <div className="dot1"/>
          <div className="dot2"/>
          <div className="dot3"/>
        </div>

        <span className="arrows"><FontAwesomeIcon icon={['fas', 'backward']} size="2x" /></span>
        <span className="icons"><FontAwesomeIcon icon={['fas', 'play']} size="2x" /></span>
        <span className="arrows"><FontAwesomeIcon icon={['fas', 'forward']} size="2x" /></span>
        <div className="toolbar__logo"><Slider/></div>
        <div className="toolbar__airplay"><button><img height="25px" src={airplay}/></button></div>
        <div className="spacer">
          <div className="screen" align="center" vertical="middle">
          <FontAwesomeIcon icon={['fab', 'apple']} size="3x" />
        </div>
      </div>
        <div className="toolbar__toggle-button">
        {/* <DrawerToggleButton click={props.drawerToggleClickHandler}/> */}
        </div>
        <div className="toolbar__navigation-items">
          <ul>
            <li><button><FontAwesomeIcon icon={['fas', 'list-ul']} size="2x" /></button></li>
            <li><div className="searchbar"><FontAwesomeIcon icon={['fas', 'search']} size="1x" />Search Bar</div></li>

          </ul>
        </div>
      </nav>

    </div>




  )

  export default toolbar
