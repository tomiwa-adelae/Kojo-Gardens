"use client";
import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";

// export const metadata = {
// 	title: "Error | Kojo Gardens",
// 	description:
// 		"Oops, it seems like you've reached a page that's taking a detour! But don't worry, we're here to guide you back on track. Our team is on the lookout for this glitch, working hard to ensure you find what you're looking for. In the meantime, why not explore more of our offerings or return to the home page? We apologize for the inconvenience and appreciate your patience as we navigate this hiccup together.",
// 	keywords:
// 		"Kojo Gardens, Kojo, Gardens, food, foods, hotel, bar, resort, resort center, nkwobi, nigerian dishes, nigerian foods, Hotel & Bar, Luxury Accommodation, Live Music, contact kojo gardens, contact, reach out, call, send email, error, mistake",
// };

const page = ({ searchParams }) => {
	return (
		<div className="error-page">
			<Showcase />
			<Content searchParams={searchParams} />
		</div>
	);
};

export default page;
