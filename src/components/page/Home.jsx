import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
           <div className="main">
	<div className="title">
		<h1>
		 CLOUD PHOTOGRAPHY
		</h1>	
	</div>
	<div className="buttons">
		<Link to="/rent" className="btn">RENT ACCESSORIES</Link>
		<Link to="/edit" className="btn">EDIT MY IMAGE</Link>
		<Link to="/cloud"className="btn">CLOUD PHOTOGRAPHY</Link>
	</div>
</div>
</div>
       
    )
}

export default Home
