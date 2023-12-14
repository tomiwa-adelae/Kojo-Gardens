import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";

const page = () => {
	return (
		<div className="gallery-page">
			<Showcase />
			<Content />
		</div>
	);
};

export default page;
