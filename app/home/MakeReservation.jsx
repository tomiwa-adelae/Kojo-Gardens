"use client";
import Link from "next/link";
import React, { useState } from "react";

const MakeReservation = () => {
	const date = new Date();
	const today =
		date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

	const tomorrow =
		date.getFullYear() +
		"-" +
		(date.getMonth() + 1) +
		"-" +
		(date.getDate() + 1);
	const [arrivalDate, setArrivalDate] = useState(today);
	const [departureDate, setDepartureDate] = useState(tomorrow);
	const [nofGuest, setNoOfGuest] = useState(1);

	const handleSubmit = (e) => {
		e.preventDefault();

		const reservation = {
			arrivalDate,
			departureDate,
			nofGuest,
		};

		console.log(reservation);
	};

	return (
		<div className="make-reservation">
			<div className="container">
				<h3>
					Book <span className="text-secondary">Rooms</span>
				</h3>
				<div className="line-white"></div>

				<div className="boxes">
					<div>
						<h6>Arrival Date</h6>
						<input
							type="date"
							value={arrivalDate}
							onChange={(e) => setArrivalDate(e.target.value)}
							name="arrival"
							id=""
						/>
					</div>
					<div>
						<h6>Departure Date</h6>
						<input
							type="date"
							value={departureDate}
							onChange={(e) => setDepartureDate(e.target.value)}
							name="arrival"
							id=""
						/>
					</div>
					<div>
						<h6>Number of Guest</h6>
						<select
							value={nofGuest}
							onChange={(e) => setNoOfGuest(e.target.value)}
							name="guest"
							id="guest"
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div id="btn">
					<Link
						href={{
							pathname: "/reservations",
							query: { arrivalDate, departureDate, nofGuest },
						}}
					>
						<button
							// onClick={handleSubmit}
							className="btn btn-secondary"
						>
							Send Request
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MakeReservation;
