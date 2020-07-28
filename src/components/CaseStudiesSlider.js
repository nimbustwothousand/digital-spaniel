import React from 'react';
import Dashboard from '../assets/dashboard01.png';
import Lab from '../assets/lab01.png';
import Socks from '../assets/socks.png';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

const CaseStudiesSlider = () => {
	const handleSliderForward = () => {
		console.log('left')
	}
	const handleSliderBack = () => {
		console.log('right')
	}
	return (
		<div className="slider-container">
			<div className="slider">
				<div className="slider__prev">
					<img src={Lab} alt="" />
				</div>
				<div className="slider__focus">
					<div>
						<img src={Dashboard} alt="" />
					</div>
					<div className="slider__content">
						<div className="slider__description">
							<div className="description__title">
								<h3>Project title here</h3>
							</div>
							<div className="description__blurb">Short project description goes here to explain what the project is all about</div>
							<div className="description__cta">
								<a href="#">Read More</a>
							</div>
						</div>
						<div className="slider__navigation">
							<ArrowLeft onClick={handleSliderBack} className="arrow-left inactive" />
							<ArrowRight onClick={handleSliderForward} className="arrow-right" />
						</div>
					</div>
				</div>
				<div className="slider__next">
					<img src={Socks} alt="" />
				</div>
			</div>
		</div>
	)
}

export default CaseStudiesSlider
