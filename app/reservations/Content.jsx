import React, { useEffect, useState } from "react";

const Content = ({ searchParams }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [arrival, setArrival] = useState("");
	const [departure, setDeparture] = useState("");
	const [guest, setGuest] = useState("");

	useEffect(() => {
		const { arrivalDate, departureDate, noOfGuest } = searchParams;
		setArrival(arrivalDate);
		setDeparture(departureDate);
		setGuest(noOfGuest);
	}, [searchParams]);

	return (
		<div className="content">
			<div className="container">
				<h3>
					Secure your stay:{" "}
					<span className="text-primary">Reserve your spot now!</span>
				</h3>
				<div className="line-primary"></div>
				<div className="cards">
					<div className="card info">
						<p>
							Welcome to our reservation page, your gateway to an
							unforgettable experience. Booking your stay with us
							is simple and efficient. Enter your desired dates,
							select your room preference, and get ready to
							immerse yourself in comfort and luxury.
						</p>
						<br />

						<p>
							Whether you're planning a relaxing getaway or a
							business trip, our reservation system ensures a
							seamless process, offering real-time availability
							and the best possible rates. Lock in your preferred
							dates and look forward to an exceptional stay with
							us.
						</p>
						<br />
						<p>
							Reserve now to embark on a journey filled with
							luxury, impeccable service, and unforgettable
							moments. Your next adventure awaits!
						</p>
					</div>
					<div className="card form">
						<h5>Get in touch</h5>
						<div className="details">
							<form>
								<div>
									<input
										type="text"
										placeholder="Enter your name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Enter your email address"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div>
									<input
										type="date"
										value={arrival}
										onChange={(e) =>
											setArrival(e.target.value)
										}
										name="arrival"
										id=""
									/>
								</div>
								<div>
									<input
										type="date"
										value={departure}
										onChange={(e) =>
											setDeparture(e.target.value)
										}
										name="departure"
										id=""
									/>
								</div>
								<div>
									<select
										value={guest}
										onChange={(e) =>
											setGuest(e.target.value)
										}
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
								<div>
									<textarea
										placeholder="Enter your message"
										name=""
										id=""
										cols="30"
										rows="10"
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
									></textarea>
								</div>
								<div>
									<button className="btn btn-primary">
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
