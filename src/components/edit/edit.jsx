import React from 'react'
import {Link} from 'react-router-dom'

const edit = () => {
    return (
<div  className="daba">
    <div>
    <h3>SERVICES</h3>      
      <input type="file"></input>
    </div>
    <div>
       <label>COLOUR CORRECTION</label>
      <input type="checkbox"></input>
      </div>
      <div>
        <label> BACKGROUND REMOVE</label>
        <input type="checkbox"></input></div>
      <div>
        <label> DRESSING</label>
        <input type="checkbox"></input>
        </div>
        <div>
        <label>RETOUCHING</label>
      <input type="checkbox"></input></div>
        <div>
        <label>RESTORATION</label>
      <input type="checkbox"></input>
      </div>
      <div>
        <label>RESIZING</label>
      <input type="checkbox"></input>
      </div>
      <div>
        <Link to="/register">
        <input type="submit" value="Proceed"></input></Link>
      </div>
    
</div>
    )
}

export default edit
