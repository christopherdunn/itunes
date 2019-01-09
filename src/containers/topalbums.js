import React, {Component} from 'react';
import AlbumsIndex from '../components/AlbumsIndex'
const ALBUMSAPI = 'https://itunes.apple.com/us/rss/topalbums/all/limit=100/json'

class topalbums extends Component {
  constructor(props){
  super(props);
  this.state ={
    albums:[]
  }
}
componentDidMount(){
  fetch(ALBUMSAPI)
  .then(response => response.json())
  .then(data => this.setState({
    albums: data.feed.entry,
  }));
}
  render() {
    return(
      <div>

      <AlbumsIndex
        albums={this.state.albums}
      />
      </div>
    );
  }
}

export default topalbums;
