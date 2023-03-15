import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
	return (
		<nav>
			<div className='nav-wrapper container'>
				<NavLink to='/' className='brand-logo'>
					TypeScript TodoList
				</NavLink>
				<ul id='nav-mobile' className='right hide-on-med-and-down'>
					<li>
						<NavLink to='/about'>About</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
