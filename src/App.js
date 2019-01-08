import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import home from './containers/home';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import {

  faBackward,
  faForward,
  faPlay,
  faSearch
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faApple,
  faApple,
  faBackward,
  faForward,
  faPlay,
  faSearch
)





class App extends Component {
  render() {
    return (

        <BrowserRouter>
      <div>

        <Switch>
          <Route exact path="/" component={home} />




        </Switch>
      
      </div>
  </BrowserRouter>

    );
  }
}


export default App;
