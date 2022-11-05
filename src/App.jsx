import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideBar from './components/sidebar/SideBar';
import Content from './components/content/Content';
import './assets/scss/index.scss';
import classNames from 'classnames';

const App = () => {
	const [sidebarIsMerged, setSidebarIsMerged] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const resizeWindow = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', resizeWindow);
		return () => window.removeEventListener('resize', resizeWindow);
	});

	useEffect(() => {
		windowWidth <= 768 ? setSidebarIsMerged(true) : setSidebarIsMerged(false);
	}, [windowWidth]);

	return (
		<Router>
			<div
				className={classNames('App wrapper', {
					'flex-column': sidebarIsMerged,
				})}
			>
				<SideBar />
				<Content />
			</div>
		</Router>
	);
};

export default App;
