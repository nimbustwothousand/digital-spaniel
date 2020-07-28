import React from 'react';
import { Section, Container } from './Layout';
import CaseStudiesSlider from './CaseStudiesSlider';
const CaseStudies = () => {
	return (
		<Section id="case-studies">
			<Container>
				<div>
					<div className="section__heading">
						<h2>Case Studies</h2>
					</div>
					<div className="blurb">
						<p>
							Every project is different. We like to work collaboratively with our clients, tailoring each project to suit the needs of you and your business.
					</p>
					</div>
				</div>
			</Container>
			<CaseStudiesSlider />
		</Section>
	)
}

export default CaseStudies
