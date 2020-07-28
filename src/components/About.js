import React from 'react';
import { Section, Container } from './Layout';
import MasonryGrid from './MasonryGrid';
import Office from '../assets/office01.png';
import Office2 from '../assets/office02.png';
import Office3 from '../assets/office03.png';
import Office4 from '../assets/office04.png';


const About = () => {
	const gridItems = [
		{ src: Office, alt: "meeting table" },
		{ src: Office3, alt: "people meeting in an office" },
		{ src: Office4, alt: "office motivational poster" },
		{ src: Office2, alt: "office hallway" }
	]
	return (
		<>
			<Section id="about-title">
				<Container>
					<div className="section__heading">
						<h2>What are <br /><span className="section__heading--muted">we all about?</span></h2>
					</div>
				</Container>
			</Section>
			<Section id="about-content" class="dark">
				<Container>
					<MasonryGrid items={gridItems} />
				</Container>
			</Section>
		</>
	)
}

export default About
