import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";
import VisionAndMission from "./VisionAndMission";
import OurValues from "./Values";

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
