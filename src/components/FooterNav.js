import React from 'react'

const FooterNav = () => {
	return (
		<div className="footer-menu-container">
			<ul class="footer-menu">
				<span className="footer-menu__title">explore</span>
				<li className="footer-menu__item">
					<a href="/">
						Services<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span>
					</a>
				</li>
				<li className="footer-menu__item">
					<a href="/">Work<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></a>
				</li>
				<li className="footer-menu__item">
					<a href="/">About<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></a>
				</li>
				<li className="footer-menu__item">
					<a href="/">Blog<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></a>
				</li>
				<li className="footer-menu__item">
					<a href="/">Careers<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></a>
				</li>
			</ul>
			<ul class="footer-menu">
				<span className="footer-menu__title">services</span>
				<li className="footer-menu__item">
					<a href="/">Brand<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></a>
				</li>
				<li className="footer-menu__item">
					<a href="/">Development<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></a>
				</li>
				<li className="footer-menu__item">
					<a href="/">Marketing<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></a>
				</li>
			</ul>
			<ul class="footer-menu">
				<span className="footer-menu__title">questions?</span>
				<li className="footer-menu__item">
					<div>Call Us</div>
					<div className="muted">0121 345 678</div>
				</li>
				<li className="footer-menu__item">
					<div>Email Us</div>
					<div className="muted">info@digitalspaniel.co.uk</div>
				</li>
			</ul>
		</div>
	)
}

export default FooterNav
