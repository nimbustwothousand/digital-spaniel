import React from 'react';
import RecentGridItem from './RecentGridItem';

const RecentGrid = ({ items }) => {
	return (
		<div className="tab__content" data-transition="left">
			{items.map(item => (<RecentGridItem item={item} key={item.src} />))}
		</div>
	)
}

export default RecentGrid