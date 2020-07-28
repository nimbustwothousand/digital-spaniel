import React from 'react';

export const Section = (props) => {
	return (
		<section id={props.id} className={props.class}>
			<div className="section-container">
				{props.children}
			</div>
		</section>
	)
}

export const Container = (props) => {
	const classList = props.classList ? " " + props.classList : ""
	return (
		<div className={"container row" + classList}>
			{props.children}
		</div>
	)
}