import React from 'react'

const ArrowLeft = ({ onClick, className }) => {
	return (
		<div className={className} onClick={onClick}>
			<i className="fas fa-chevron-left"></i>
		</div>
	)
}

export default ArrowLeft
