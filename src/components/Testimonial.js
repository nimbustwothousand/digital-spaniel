import React from 'react'

const Testimonial = ({ focus, content }) => {
	let focusClass;
	if (focus) {
		focusClass = "test-item test-item__focus"
	} else {
		focusClass = "test-item test-item__nofocus"
	}
	return (
		<div className={focusClass} >
			<div className="test-item__quote">
				<div className="quote__open">“</div>
				{content.quote}
				<div className="quote__close">”</div>
			</div>
			<div className="test-item__avatar">
				<img src={content.avatar} alt="avatar" />
			</div>
			<div className="test-item__info">
				<div className="test-item__name">{content.name}</div>
				<div className="test-item__job-title">{content.jobTitle}</div>
			</div>
		</div >
	)
}

export default Testimonial
