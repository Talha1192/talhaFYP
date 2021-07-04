import React from 'react'

import img1 from '../../images/m.c3.jpg'
import img2 from'../../images/c.b3.jpg'
import img3 from '../../images/c.l3.jpg'
import img4 from '../../images/t.p3.jpg'
import {Link} from 'react-router-dom'

const asses3 = () => {
    return (
        <div className='asses3'>
               <div className="asses">
    <div className="boxes">
        <div className="box">
            
                <img src={img1}  alt=""></img>
            <h3>64 G.B memory card</h3>
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
               <Link to="../registration/registration.html">
        <input type="submit" value="Submit" ></input></Link>
        </div>

    </div>
        </div>
    )
}

export default asses3
