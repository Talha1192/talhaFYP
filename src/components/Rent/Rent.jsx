import React from 'react'
import img1 from '../../images/cm1.jpg'
import img2 from '../../images/cm2.jpg'
import img3 from '../../images/cm3.jpg'
import img4 from '../../images/cm4.jpg'
import img5 from '../../images/cm5.jpg'
import img6 from '../../images/cm6.jpg'
import img7 from '../../images/cm7.jpg'
import img8 from '../../images/cm8.jpg'
import img9 from '../../images/cm9.jpg'

import {Link} from 'react-router-dom'
const Rent = () =>  {
    return (

        <div >
          
        <div>
             <div className="rent">
    <div class="search">
        <input type="search" placeholder="search"></input>
        <input type="button" value="search"></input>
    </div>
    <div className="boxes">
        <div className="box">
            <Link to="/asses1"> 
                <img src={img1}  alt=""></img>
            </Link>
            <h3>Canon DSLR D-564</h3>
            <h6>Rent: 1500Rs.</h6>
        </div>
        <div className="box">
            <Link to="/asses2"> 
                <img src={img2}   alt=""></img>
            </Link>
            <h3>Canon DSLR D-1087</h3>
            <h6>Rent: 1700Rs.</h6>
        </div>
        <div className="box">
            <Link to="/asses3"> 
                <img src={img3}   alt=""></img>
            </Link>
            <h3>Canon DSLR S-8292</h3>
            <h6>Rent: 1900Rs.</h6>
        </div>
        <div class="box">
            <Link to="/asses4"> 
                <img src={img4}   alt=""></img>
            </Link>
            <h3>Canon DSLR D-9200</h3>
            <h6>Rent: 2100Rs.</h6>
        </div>
        <div class="box">
            <Link to="/asses5"> 
                <img src={img5}   alt=""></img>
            </Link>
            <h3>Canon DSLR E-5682</h3>
            <h6>Rent: 2500Rs.</h6>
        </div>
        <div class="box">
            <Link to="/asses6"> 
                <img src={img6}   alt=""></img>
            </Link>
            <h3>Canon DSLR E-1191</h3>
            <h6>Rent: 2700Rs.</h6>
        </div>
        <div class="box">
            <Link to="/asses7"> 
                <img src={img7}   alt=""></img>
            </Link>
            <h3>Canon DSLR E-3300</h3>
            <h6>Rent: 2800Rs.</h6>
        </div>
        <div class="box">
            <Link to="/asses8"> 
                <img src={img8}   alt=""></img>
            </Link>
            <h3>Canon DSLR E-3233-7D</h3>
            <h6>Rent: 3000Rs.</h6>
        </div>
        <div class="box">
            <Link to="/asses9"> 
                <img src={img9}   alt=""></img>
            </Link>
            <h3>Canon DSLR F-3366- 8D</h3>
            <h6>Rent: 3200Rs.</h6>
        </div>
        </div>
        </div>
    </div>
        </div>
    )
}
export default Rent
