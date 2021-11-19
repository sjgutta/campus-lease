import React, { useState, useEffect } from 'react'
import axios from "axios";
import Page from "../Page/Page"
import "react-toggle/style.css"
import ExploreBanner from "../../images/explorebanner.png";
import "./Explore.css"
import { Container, Row, Col } from 'react-grid-system';
import Button from "../Button/Button"
import StartNow from "../StartNow/StartNow"


const listingData = [
	{
		name: "The Clubhouse",
		address: "1201 W 30th St",
		city: "Los Angeles",
		state: "CA",
		zip_code: "90006",
		description: "Available from November to May, open house starting this saturday at 3PM",
		amenities: "3 bed, 3 bath house with a nice view of an alley in the back. Pets welcome, Bruins not",
		email: "maxfried@usc.edu",
		image_url: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
	},
	{
		name: "Shrine Apartment",
		address: "3025 Shrine Pl",
		city: "Los Angeles",
		state: "CA",
		zip_code: "90007",
		description: "This is an amazing 1 bedroom, 1 bathroom unit in the prestigious Shrine collection. The apartment is spacious and perfect for 1-2 people!",
		amenities: "Washer and Dryer Full Kitchen and appliances Bathroom with shower, tub, toilet, and sink Two full-size closets",
		email: "gutta@usc.edu",
		image_url: "https://element2595.com/images/preview-video-penthouse-mobile.jpg"
	}
]

const Listing = (props) => {
	return (
		<div className="listing-container">
			<Container>
				<img className="listing-image" src={props.image_url} alt="listing-image" />
			</Container>
			<Container className="listing-content-container">
				<Row>
					<Col sm={6}>
						<div className="listing-name">{props.name}</div>
						<p className="listing-paragraph">{props.address}</p>
						<p className="listing-paragraph">{props.city}</p>
						<p className="listing-paragraph">{props.state}</p>
						<p className="listing-paragraph">{props.zip_code}</p>
						<a href={`mailto:${props.email}?subject=Inquiry about your Campus Lease listing: ${props.name}`}>
							<Button>Contact Lister</Button>
						</a>
					</Col>
					<Col sm={6}>
						<h2 className="listing-small-header">Description</h2>
						<p className="listing-paragraph">{props.description}</p>
						<h2 className="listing-small-header" style={{ marginTop: "10px" }}>Amenities</h2>
						<p className="listing-paragraph">{props.amenities}</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

const Explore = () => {
	const [listings, setListings] = useState([]);
	
	useEffect(() => {
		axios.get('http://api.campuslease.com:5000/listings').then(res => {
        const listings = res.data;
        setListings(listings.listings);
      })
	}, []);

	let noListingsMessage;
	if(listings.length === 0) {
		noListingsMessage = <div style={{"margin-top": "40px"}}>No Listings Currently!</div>;
	}

	return (
		<Page>
			<div className="banner-container">
				<img src={ExploreBanner} alt="explore-banner" />
				{noListingsMessage}
				{listings.map((listing) =>
					<Listing {...listing} />
				)}
			</div>
			<StartNow />
		</Page>
	);
}

export default Explore;
