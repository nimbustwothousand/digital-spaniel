import React from 'react';
import { Section, Container } from './Layout';
import Testimonial from './Testimonial';
import Avatar0 from '../assets/testimonial_face03.png';
import Avatar1 from '../assets/testimonial_face01.png';
import Avatar2 from '../assets/testimonial_face02.png';

const Testimonials = () => {
	const testimonials = [
		{
			quote: "Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!",
			name: "Paul Simon",
			jobTitle: "Founder, MegaCorp",
			avatar: Avatar0
		},
		{
			quote: "Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.",
			name: "Johnny B. Goode",
			jobTitle: "CEO, Getting Things Done",
			avatar: Avatar1
		},
		{
			quote: "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.",
			name: "Mary Jane",
			jobTitle: "CEO, Design Matters",
			avatar: Avatar2
		}
	]

	return (
		<Section id="testimonials">
			<Container>
				<div className="section__heading">
					<h2>Kind words <br /><span className="section__heading--muted">from our clients</span></h2>
				</div>
			</Container>

			<Container>
				<div className="testimonials-carousel">
					<Testimonial content={testimonials[0]} />
					<Testimonial content={testimonials[1]} focus />
					<Testimonial content={testimonials[2]} />
				</div>
				<div className="testimonials-navigation">
					<div>
						<div className="navigation__nofocus"></div>
						<div className="navigation__focus"></div>
						<div className="navigation__nofocus"></div>
					</div>
				</div>
			</Container>
		</Section>
	)
}

export default Testimonials
