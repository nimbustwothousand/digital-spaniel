import React from 'react';
import { Section, Container } from './Layout';

const Capabilities = () => {
	return (
		<Section id="capabilities" class="dark">
			<Container>
				<div className="column">
					<div className="section__heading">
						<h2>What are <br /><span className="section__heading--muted">we capable of</span></h2>
					</div>
					<div className="blurb">
						By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we create innovative, sustainable marketing that enhances brand experience and user engagement.
		 				</div>
					<div className="cta">
						<a href="#">Our process</a>
					</div>
				</div>
				<div className="w-50 w-sm-100">
					<div className="capabilities__nav">
						<div className="col-6">
							<span className="capabilities__nav-title">brand</span>
							<ul>
								<a href="#"><li>Brand Strategy<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
								<a href="#"><li>Logo & Name<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
								<a href="#"><li>Identity & Collateral<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
							</ul>
							<span className="capabilities__nav-title">development</span>
							<ul>
								<a href="#"><li>eCommerce<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
								<a href="#"><li>Web Development<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
								<a href="#"><li>Mobile Apps<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
							</ul>
						</div>
						<div className="col-6">
							<span className="capabilities__nav-title">marketing</span>
							<ul>
								<a href="#"><li>Digital<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
								<a href="#"><li>Market Research<span className="chevron"><i className="fas fa-chevron-circle-right"></i></span></li></a>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Capabilities
