import React from 'react';
import AlbumTile from './AlbumTile';
import './SongIndex.css';

const AlbumsIndex = props => {
  let albums = props.albums.map(album => {
    return(
      <li><AlbumTile
        key={album.id}
        id={album.id}
        name={album['im:name']['label']}
        artist={album['im:artist']['label']}
        genre={album['category']['attributes']['label']}
      /></li>
    )
  })

  return(
    <div className="Songlist">
    <div className="songheaders">
    <div className="ranksort">Rank</div><div className="equil"/>
    <div className="songsort">Album</div><div className="equil"/>
    <div className="songsort">Artist</div><div className="equil"/>
    <div className="songsort">Genre</div>
    </div>
    <ol >
      {albums}
    </ol>
  </div>
  )
}

export default AlbumsIndex
