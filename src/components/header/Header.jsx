import React, { useState, useEffect } from 'react'
import logo from '../../images/2.jpg'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const { pathname } = useLocation()
	
	let [home, setHome] = useState(false)
	let [services, setServices] = useState(false)
	let [about, setAbout] = useState(false)
	let [contact, setContact] = useState(false)

	useEffect(() => {
		if (pathname === '/') {

			setHome(true)
			setServices(false)
			setAbout(false)
			setContact(false)
		}
		else if (pathname === '/about') {

			setHome(false)
			setServices(false)
			setAbout(true)
			setContact(false)
		}
		else if (pathname === '/contact') {
			setHome(false)
			setServices(false)
			setAbout(false)
			setContact(true)
		}
		else if (pathname === '/services') {
			setHome(false)
			setServices(true)
			setAbout(false)
			setContact(false)
		}

	}, [pathname])



	return (
		<header >
			<div className="logo">
				<img src={logo} />
			</div>
			<div className="links">
				<ul>
					<li><Link className={`${home ? 'active' : ''}`} to='/'>Home</Link></li>
					<li><Link className={`${services ? 'active' : ''}`} to="/services">Services</Link></li>
					<li><Link className={`${about ? 'active' : ''}`} to="/about">About</Link></li>
					<li><Link className={`${contact ? 'active' : ''}`} to="/contact">Contact</Link></li>
				</ul>
			</div>
			<div className="be">
				<Link to="/register" className="btn">Register</Link>
				<Link to="/signin" className="btn">sign in</Link>
			</div>
		</header>
	)
}

export default Header
