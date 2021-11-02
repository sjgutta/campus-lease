import React from 'react'
import Page from "../Page/Page"
import "react-toggle/style.css"
import ExploreBanner from "../../images/explorebanner.png";
import "./Explore.css"


const Explore = () => {
	return (
		<Page>
			<div className="banner-container">
                <img src={ExploreBanner} alt="explore-banner" />
            </div>
		</Page>
	);
}

export default Explore;
