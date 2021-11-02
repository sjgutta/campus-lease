import React from 'react'
import Page from "../Page/Page";
import AboutBanner from "../../images/aboutbanner.png";
import bannerImage from '../../images/campusleasebanner.png'
import "./About.css"


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
        </Page>
    )
}

export default About;
