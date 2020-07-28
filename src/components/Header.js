import React, { useState } from 'react';
import Logo from '../assets/DigitalSpanielLogo.png'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMobileMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<header>
			<div className="header-container">
				<div className="logo">
					<img src={Logo} alt="Digital Spaniel Logo" />
				</div>
				<div className="navigation">
					<nav>
						<ul>
							<li><a href="/">Services</a></li>
							<li><a href="/">Work</a></li>
							<li><a href="/">About</a></li>
							<li><a href="/">Blog</a></li>
							<li><a href="/">Contact</a></li>
						</ul>
					</nav>
				</div>
				<div className="hamburger" onClick={toggleMobileMenu}>
					{isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}

				</div>
				<div className={isOpen ? "mobile-navigation open" : "mobile-navigation"}>
					<nav>
						<ul>
							<a href="/"><li>Services</li></a>
							<a href="/"><li>Work</li></a>
							<a href="/"><li>About</li></a>
							<a href="/"><li>Blog</li></a>
							<a href="/"><li>Contact</li></a>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
