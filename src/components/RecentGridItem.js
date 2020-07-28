import React from 'react'

const RecentGridItem = ({ item }) => {
	return (
		<div className={item.large ? "tile tile-large" : "tile"}>
			<img src={item.src} alt={item.src} />
			<div className="tile__description">
				<h4 className="tile__title">Make Ideas Happen</h4>
				<p className="tile__blurb">A local paper with big ideas needed a sharp new brand to insphire readers</p>
				<div className="cta"><a href="/">Full project</a></div>
			</div>
		</div>
	)
}

export default RecentGridItem
