import React from 'react';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';

const RecentGridNavigation = ({ handleSliderForward, handleSliderBack, isFirstPage, isLastPage }) => {
	return (
		<>
			<div className="cta">
				<a href="#">See all work</a>
			</div>
			<div className="tab__navigation-arrows">
				<ArrowLeft className={isFirstPage ? "arrow-left inactive" : "arrow-left"} onClick={handleSliderBack} />
				<ArrowRight className={isLastPage ? "arrow-right inactive" : "arrow-right"} onClick={handleSliderForward} />
			</div>
		</>
	)
}

export default RecentGridNavigation
