import { server } from "@/config/server";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Content = ({ searchParams }) => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [arrival, setArrival] = useState("");
	const [departure, setDeparture] = useState("");
	const [guest, setGuest] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const { arrivalDate, departureDate, noOfGuest } = searchParams;

		if (searchParams.arrivalDate) {
			setArrival(arrivalDate);
			setDeparture(departureDate);
			setGuest(noOfGuest);
		}
	}, [searchParams]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		const content = {
			name,
			email,
			message,
			arrival,
			departure,
			guest,
		};

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		try {
			await axios.post(`${server}/reservations`, content, config);

			router.push("/success");
			setLoading(false);
		} catch (err) {
			router.push("/error?q=reservations");
			setLoading(false);
		}
	};

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
							<form onSubmit={handleSubmit}>
								<div>
									<input
										type="text"
										placeholder="Enter your name"
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										required
									/>
								</div>
								<div>
									<input
										type="email"
										placeholder="Enter your email address"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										required
									/>
								</div>
								<div>
									<label htmlFor="arrival">
										Arrival Date
									</label>
									<input
										type="date"
										value={arrival}
										onChange={(e) =>
											setArrival(e.target.value)
										}
										name="arrival"
										required
										id="arrival"
									/>
								</div>
								<div>
									<label htmlFor="departure">
										Departure Date
									</label>
									<input
										type="date"
										value={departure}
										onChange={(e) =>
											setDeparture(e.target.value)
										}
										name="departure"
										required
										id="departure"
									/>
								</div>
								<div>
									<label htmlFor="guest">
										Number of Guest
									</label>
									<select
										value={guest}
										onChange={(e) =>
											setGuest(e.target.value)
										}
										name="guest"
										required
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
										{loading ? (
											<AiOutlineLoading3Quarters className="loading" />
										) : (
											"Send Message"
										)}
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
