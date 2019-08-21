import React from 'react';

import { NavBar } from '../common';
import { Spirit } from '../../styles/spirit-styles';

// Custom headings must be React components. You should include the <NavBar /> component
// somewhere in it. You can optionally set the theme of the navbar to `dark` or `light`.
const HomeHeader = () => (
	<div className="gh-bg-home bb b--whitegrey">
		<header className="top-0 left-0 right-0 bg-white fixed z-999">
			<NavBar theme="dark" />
		</header>
		<div
			className={`${
				Spirit.page.xl
			} pb5 pt10 pt15-ns pt20-l pb10-ns pb15-l flex items-between bt bn-ns b--white-10 home-header`}
		>
			<div className="pr3">
				<h1 className="ma0 mt8 pt5 pa0 f2 f1-ns f-headline-l white header-heading-shadow">
					Appbase Documentation
				</h1>
				<p className={`${Spirit.sectionSubHeading} f1 white`}>
					Appbase.io offers the search stack for building modern apps. Import data
					instantly from your favorite sources. Deploy in minutes with a fully managed
					backend. Build amazing search Ux with reactive UI components.
				</p>
				<div className="mt5">
					<a
						href="https://dashboard.appbase.io"
						target="_blank"
						rel="noopener noreferrer"
						className="link button-header pa2 mr4 shadow-3 pl4 pr4 br2 fw5 f5 blue"
					>
						Sign Up
					</a>
					<a className="link button-header pa2 f5 fw5 shadow-3 pl4 pr4 br2 blue">
						Watch Video
					</a>
				</div>
			</div>
			<div className="home-header-graphics">
				<div className="graphic">
					<img src="images/app-cluster@3x.png" />
					<p className={`${Spirit.p} middarkgrey text-center`}>App Cluster</p>
				</div>
				<div className="graphic">
					<img src="images/home-search-relevancy@3x.png" />
					<p className={`${Spirit.p} middarkgrey text-center`}>Set Search relevancy</p>
				</div>
				<div className="graphic">
					<img src="images/home-search@3x.png" />
					<p className={`${Spirit.p} middarkgrey text-center`}>Build Search UI</p>
				</div>
				<div className="graphic">
					<img src="images/home-analytics@3x.png" />
					<p className={`${Spirit.p} middarkgrey text-center`}>Actionable Analytics</p>
				</div>
			</div>
		</div>
	</div>
);

export default HomeHeader;