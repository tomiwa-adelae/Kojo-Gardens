"use client";
import Showcase from "./Showcase";
import Content from "./Content";

const page = ({ searchParams }) => {
	return (
		<div className="reservations-page">
			<Showcase />
			<Content searchParams={searchParams} />
		</div>
	);
};

export default page;
