import React from 'react';
import SongTile from './SongTile';
import './SongIndex.css';

const SongsIndex = props => {
  let songs = props.songs.map(song => {
    return(
      <li><SongTile
        key={song.id}
        id={song.id}
        name={song.name}
        artist={song.artistName}
        album={song.collectionName}
      /></li>
    )
  })

  return(
    <div className="Songlist">
    <div className="songheaders">
    <div className="ranksort">Rank</div><div className="equil"/>
    <div className="songsort">Song Title</div><div className="equil"/>
    <div className="songsort">Artist</div><div className="equil"/>
    <div className="songsort">Album</div>
    </div>
    <ol >
      {songs}
    </ol>
  </div>
  )
}

export default SongsIndex
