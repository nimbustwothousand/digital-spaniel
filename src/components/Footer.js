import React from 'react';
import FooterNav from './FooterNav';

const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="row">
					<div className="col-6 column">
						<div className="section__heading">
							<h2>We're a brand's <br /><span className="section__heading--muted">best friend</span></h2>
						</div>
						<div className="cta">
							<a href="/">Let's talk</a>
						</div>
					</div>
					<div className="col-6 column">
						<FooterNav />
					</div>
				</div>
				<div className="row footer__muted">
					<div className="footer__legal">
						Copyright &copy; Digital Spaniel 2019. All rights reserved.
					</div>
					<div className="footer__social">
						<div><a href="/"><i className="fab fa-facebook-f"></i></a></div>
						<div><a href="/"><i className="fab fa-twitter"></i></a></div>
						<div><a href="/"><i className="fab fa-instagram"></i></a></div>
						<div><a href="/"><i className="fab fa-linkedin-in"></i></a></div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
