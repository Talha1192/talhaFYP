import React from 'react'
import img1 from '../../images/m.c7.jpg'
import img2 from'../../images/c.b7.jpg'
import img3 from '../../images/c.l7.jpg'
import img4 from '../../images/t.p7.jpg'
import {Link} from 'react-router-dom'

const asses7 = () => {
    return (
        <div className='asses7'>
            
    <div className="asses">
    <div className="boxes">
        <div className="box">
            
                <img src={img1}  alt=""></img>
            <h3>128 G.B memory card</h3>
        </div>
        <div className="box">
                <img src={img2}  alt=""></img>
            <h3> camera bag</h3>
        </div>
        <div className="box"> 
                <img src={img3}  alt=""></img>
            <h3> lens </h3>
        </div>
        <div className="box">
            
                <img src={img4}  alt=""></img>
            <h3> tripod stand</h3>
        </div>
               
               
    </div>
        <div className='boxSubmit'>
               <Link to="/register">
        <input type="submit" value="Submit" ></input></Link>
        </div>
 </div>

        </div>
    )
}
export default asses7