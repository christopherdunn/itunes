import React, {Component} from 'react';
import SongsIndex from '../components/SongsIndex'
const SONGSAPI = 'https://rss.itunes.apple.com/api/v1/us/itunes-music/top-songs/all/100/explicit.json'

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
    songs: data.feed.results,
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
