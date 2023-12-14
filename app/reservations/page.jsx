"use client";
import React, { useEffect, useState } from "react";
import Showcase from "./Showcase";
import Content from "./Content";

const page = ({ searchParams }) => {
	const [arrivalDate, setArrivalDate] = useState();
	const [departureDate, setDepartureDate] = useState();
	const [noOfGuest, setNoOfGuest] = useState();

	useEffect(() => {
		const { arrivalDate, departureDate, noOfGuest } = searchParams;
		setArrivalDate(arrivalDate);
		setDepartureDate(departureDate);
		setNoOfGuest(noOfGuest);
	}, []);

	const details = {
		arrivalDate,
		departureDate,
		noOfGuest,
	};

	return (
		<div className="reservations-page">
			<Showcase />
			<Content searchParams={searchParams} />
		</div>
	);
};

export default page;
