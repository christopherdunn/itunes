import React from 'react';
import './Slider.css'


const Slider = props => {
  return(

<div class="slidecontainer">
  <input type="range" min="1" max="100" value="50" />
</div>

  )
}

export default Slider;
