import React from 'react';
import { Section, Container } from './Layout';
import HeroImageSm from '../assets/Spaniel01_gradient.png';

const Hero = () => {
	return (
		<Section id="hero">
			<Container>
				<div className="col-6 column pt">
					<div className="hero__services">brand, dev, ecom, marketing</div>
					<div className="section__heading">
						<h2>We unleash <br /><span className="section__heading--muted">business potential</span></h2>
					</div>
					<div className="blurb">
						We create brand experiences which are memorable and distinct. Our experienced team create and develop brands with personality and resonance.
		 				</div>
					<div className="cta">
						<a href="/">Let's talk</a>
					</div>
				</div>
				<div className="col-6 mt-">
					<img src={HeroImageSm} alt="digital spaniel" />
				</div>
			</Container>
		</Section>
	)
}

export default Hero
