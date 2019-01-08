import React from 'react';
import './SongTile.css'


const SongTile = props => {

  return(

    <div className="tile">


        <div className="listitems"><ul>{props.name}</ul></div>
        <div className="listitems"><ul>{props.artist}</ul></div>
        <div className="listitems"><ul>{props.album}</ul></div>



    </div>
  )
}

export default SongTile
