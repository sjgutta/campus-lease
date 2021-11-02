import React from 'react'
import Page from "../Page/Page";
import AboutBanner from "../../images/aboutbanner.png";
import bannerImage from '../../images/campusleasebanner.png'
import "./About.css"
import { Container, Row, Col } from 'react-grid-system';
import { BsFillGearFill } from "react-icons/bs";
import { MdVerified, MdVisibility } from "react-icons/md";
import { AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { GiProcessor } from "react-icons/gi";
import StartNow from "../StartNow/StartNow"



const AboutGridItem = (props) => {
    return (
        <>
            <p className="about-grid-icon-paragraph">
                {props.Icon}
            </p>
            <h4 className="about-grid-item-header">{props.headerText}</h4>
            <p className="about-grid-item-paragraph">{props.paragraphText}</p>
        </>
    )
}


const About = () => {
    return (
        <Page>
            <div className="banner-container">
                <img src={AboutBanner} alt="about-banner" />
            </div>
            <p className="about-one-liner-paragraph">
                CampusLease is a 2-sided marketplace where students can list their apartment for sublease or find their next home.
            </p>
            <div className="banner-image-container">
                <img src={bannerImage} alt="banner-image" />
            </div>
            <div className="founding-story-div">
                <p className="founding-story-paragraph">
                    College life is unpredictable. At any time, students can be forced to move away from their college campus for any number of reasons including graduating early, studying abroad, or even the unexpected COVID-19 pandemic.
            </p>
                <p className="founding-story-paragraph">
                    Unfortunately, many students sign leases for a full calendar year, as required by management companies around campus. This means they might be moving away while their lease is still in progress leaving two choices. Students may either sublease their apartment to another student, or be stuck paying for a place where they are not living. CampusLease was founded with the mission of helping college students connect with other students to sublease their apartment. Students should never be left paying for an apartment they aren't living in.
            </p>
                <p className="founding-story-paragraph">
                    Furthermore, CampusLease is perfect for a college student seeking a new place to live. Subleasing your new apartment from another student can lead to discounted rent while helping a fellow student out. We provide a focused inventory of verified, high quality listings from real students. With CampusLease, you can find your new college home.
            </p>
            </div>
            <div className="about-grid-container">
                <h2>
                    Our Services
                </h2>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <AboutGridItem Icon={<BsFillGearFill />} headerText="Smooth Listing Process" paragraphText="Listing your apartment is smooth and easy. Just click the button at the top right of the page and fill out the form!" />
                        </Col>
                        <Col sm={4}>
                            <AboutGridItem Icon={<MdVerified />} headerText="Listing Verification" paragraphText="All listings on CampusLease are from actual, verified students and are approved as being high quality." />
                        </Col>
                        <Col sm={4}>
                            <AboutGridItem Icon={<AiOutlineSearch />} headerText="Focused Inventory" paragraphText="Unlike housing aggregator websites, CampusLease has a focused inventory of college apartment options." />
                        </Col>
                    </Row>
                    <Row style={{marginTop: "50px"}}>
                        <Col sm={4}>
                            <AboutGridItem Icon={<MdVisibility />} headerText="High Visibility" paragraphText="Your listing on CampusLease will receive high visibility, as students know to search here for their next home." />
                        </Col>
                        <Col sm={4}>
                            <AboutGridItem Icon={<GiProcessor />} headerText="Advanced Search" paragraphText="CampusLease provides advanced search and discovery options which will allow you to find your perfect new home." />
                        </Col>
                        <Col sm={4}>
                            <AboutGridItem Icon={<AiFillTag />} headerText="Discounted Rent" paragraphText="Subleasing from another student provides an opportunity to reach a deal and receive discounted rent." />
                        </Col>
                    </Row>
                </Container>
            </div>
            <StartNow />
        </Page>
    )
}

export default About;
