import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";

export const metadata = {
	title: "Success | Kojo Gardens",
	description:
		"Congratulations on a successful booking at Kojo Gardens! Your reservation is confirmed, and we're thrilled to have you join us. Get ready to experience luxury accommodation and vibrant entertainment. Your journey with us begins here. Thank you for choosing Kojo Gardens, where exceptional experiences await",
	keywords:
		"Kojo Gardens, Kojo, Gardens, food, foods, hotel, bar, resort, resort center, nkwobi, nigerian dishes, nigerian foods, Hotel & Bar, Luxury Accommodation, Live Music, contact kojo gardens, reservations, vacation, experience, memories, accomodations, rooms, book rooms, sleep, rest, comfort, success, granted, checked, style, entertainment",
};

const page = () => {
	return (
		<div className="success-page">
			<Showcase />
			<Content />
		</div>
	);
};

export default page;
