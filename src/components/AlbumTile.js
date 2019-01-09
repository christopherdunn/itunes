import React from 'react';
import './SongTile.css'


const AlbumTile = props => {

  return(

    <div className="tile">


        <div className="listitems"><ul>{props.name}</ul></div>
        <div className="listitems"><ul>{props.artist}</ul></div>
        <div className="listitems"><ul>{props.genre}</ul></div>



    </div>
  )
}

export default AlbumTile
