import React from 'react';

const ArrowRight = ({ onClick, className }) => {
	return (
		<div className={className} onClick={onClick}>
			<i className="fas fa-chevron-right"></i>
		</div>
	)
}

export default ArrowRight
