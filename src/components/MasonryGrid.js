import React from 'react';

const MasonryGrid = ({ items }) => {
	return (
		<div className="masonry-grid">
			{items.map((item, idx) => (
				<div className={`masonry-grid__item item-${idx + 1}`}>
					<img src={item.src} alt={item.alt} key={item.src} />
				</div>
			))}
			<div className="item-0">
				<div className="cta">
					<a href="/">About</a>
				</div>
				<div className="cta">
					<a href="/">Careers</a>
				</div>
			</div>
		</div>
	)
}

export default MasonryGrid
