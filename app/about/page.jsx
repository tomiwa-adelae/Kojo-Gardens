import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";
import VisionAndMission from "./VisionAndMission";
import OurValues from "./Values";

export const metadata = {
	title: "About | Kojo Gardens",
	description:
		"Discover the story behind Kojo Gardens. Rooted in a passion for hospitality and a love for exceptional experiences, our journey began with a vision to redefine luxury accommodation and vibrant entertainment. Learn about our commitment to providing unparalleled service, our dedication to curating memorable stays, and our role in shaping the pulse of Lagos. Meet our team of enthusiasts dedicated to creating an inviting space where guests become part of our extended family. Join us as we share our history, values, and the essence of what makes Kojo Gardens a distinctive destination in the heart of Lagos!",
	keywords:
		"Kojo Gardens, Kojo, Gardens, food, foods, hotel, bar, resort, resort center, nkwobi, nigerian dishes, nigerian foods, Hotel & Bar, Luxury Accommodation, Live Music, contact kojo gardens, know more about kojo gardens, learn more about kojo, about",
};

const page = () => {
	return (
		<div className="about-page">
			<Showcase />
			<Content />
			<VisionAndMission />
			<OurValues />
		</div>
	);
};

export default page;
