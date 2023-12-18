import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";

export const metadata = {
	title: "Contact | Kojo Gardens",
	description:
		"Got questions or need assistance? We're here to help! Contact us for inquiries, reservations, or any special requests. Our dedicated team at Kojo Gardens is committed to ensuring your experience with us is seamless and memorable. Reach out via phone, email, or simply fill out the form below. We can't wait to hear from you!",
	keywords:
		"Kojo Gardens, Kojo, Gardens, food, foods, hotel, bar, resort, resort center, nkwobi, nigerian dishes, nigerian foods, Hotel & Bar, Luxury Accommodation, Live Music, contact kojo gardens, contact, reach out, call, send email",
};

const page = () => {
	return (
		<div className="contact-page">
			<Showcase />
			<Content />
		</div>
	);
};

export default page;
