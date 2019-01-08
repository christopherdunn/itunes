import React, {Component} from 'react';
import SongsIndex from '../components/SongsIndex'
const SONGSAPI = 'https://itunes.apple.com/us/rss/topsongs/all/limit=100/json'

class songs extends Component {
  constructor(props){
  super(props);
  this.state ={
    songs:[]
  }
}
componentDidMount(){
  fetch(SONGSAPI)
  .then(response => response.json())
  .then(data => this.setState({
    songs: data.feed.entry,
  }));
}
  render() {
    return(
      <div>

      <SongsIndex
        songs={this.state.songs}
      />
      </div>
    );
  }
}

export default songs;
