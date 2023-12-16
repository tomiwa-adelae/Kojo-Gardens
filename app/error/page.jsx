"use client";
import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";

const page = ({ searchParams }) => {
	return (
		<div className="error-page">
			<Showcase />
			<Content searchParams={searchParams} />
		</div>
	);
};

export default page;
