import React, { useState, useEffect } from 'react';
import { Section, Container } from './Layout';
import RecentGrid from './RecentGrid';
import Whellies from '../assets/whellies01.png';
import Newspaper1 from '../assets/newspaper.png';
import Makerek from '../assets/makerek.png';
import Newspaper2 from '../assets/newspaper02.png';
import Rider from '../assets/rider01.png';
import RecentGridNavigation from './RecentGridNavigation';

const data = [
	[
		{ src: Whellies, alt: "whellies", large: false },
		{ src: Newspaper2, alt: "newspaper", large: false },
		{ src: Makerek, alt: "mackerel tins", large: false },
		{ src: Newspaper1, alt: "newspaper", large: true },
		{ src: Rider, alt: "boy riding a bike", large: false },
	],
	[
		{ src: Newspaper2, alt: "newspaper", large: false },
		{ src: Whellies, alt: "whellies", large: false },
		{ src: Rider, alt: "boy riding a bike", large: false },
		{ src: Newspaper1, alt: "newspaper", large: true },
		{ src: Makerek, alt: "mackerel tins", large: false },
	]
];

const Recent = () => {
	const [sliderPage, setSliderPage] = useState(0);
	const [gridContent, setGridContent] = useState([]);
	const [isFirstPage, setIsFirstPage] = useState(true);
	const [isLastPage, setIsLastPage] = useState(false);
	const handleSliderForward = () => {
		const currPage = sliderPage;
		if (currPage === data.length - 1) {
			return
		} else {
			setSliderPage(currPage + 1);
			setIsFirstPage(false);
			setIsLastPage(currPage + 1 === data.length - 1)
		}
	}
	const handleSliderBack = () => {
		const currPage = sliderPage;
		if (sliderPage === 0) {
			return
		} else {
			setSliderPage(currPage - 1);
			setIsLastPage(false);
			setIsFirstPage(currPage - 1 === 0)
		}
	}
	useEffect(() => {
		setGridContent(data[sliderPage])
	}, [sliderPage])

	return (
		<Section id="recent-projects">
			<Container>
				<div className="col-6 column">
					<div className="section__heading">
						<h2>Some of our <br /><span className="section__heading--muted">recent projects</span></h2>
					</div>
				</div>
			</Container>
			<Container>
				<ul className="tabs">
					<li className="tab active"><h3>All</h3></li>
					<li className="tab"><h3>Branding</h3></li>
					<li className="tab"><h3>Web Design</h3></li>
					<li className="tab"><h3>Digital Marketing</h3></li>
				</ul>
			</Container>
			<Container>
				<RecentGrid items={gridContent} />
			</Container>
			<Container classList="tab__navigation">
				<RecentGridNavigation
					handleSliderForward={handleSliderForward}
					handleSliderBack={handleSliderBack}
					isFirstPage={isFirstPage}
					isLastPage={isLastPage}
				/>
			</Container>
		</Section >
	)
}

export default Recent
