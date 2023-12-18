"use client";
import { server } from "@/config/server";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactUs = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		const content = {
			name,
			email,
			message,
		};

		const config = {
			headers: {
				"Content-type": "application/json",
			},
		};

		try {
			await axios.post(`${server}/contact`, content, config);

			router.push("/success");
			setLoading(false);
		} catch (err) {
			router.push("/error?q=contact");
			setLoading(false);
		}
	};

	return (
		<div className="contact-us">
			<div className="container">
				<h3>
					Contact <span className="text-primary">Us</span>
				</h3>
				<div className="line-primary"></div>
				<div className="cards">
					<div className="card info">
						<h5>Information</h5>
						<div className="details">
							<div>
								<h6>Address</h6>
								<p>
									Plot 1415 Adetokunbo Ademola Street, PMB
									12724, Victoria Island, Lagos Nigeria
								</p>
							</div>
							<div>
								<h6>Phone</h6>
								<p>
									<a href="tel:+234 802 3194 868">
										+234 802 3194 868
									</a>
									,{" "}
									<a href="tel:+234 703 4006 454">
										+234 703 4006 454
									</a>
								</p>
							</div>
							<div>
								<h6>E-mail</h6>
								<p>
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="mailto:kojogardens@gmail.com"
									>
										kojogardens@gmail.com
									</a>
								</p>
							</div>
						</div>
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
										required
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
										required
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<div>
									<textarea
										placeholder="Enter your message"
										name=""
										id=""
										required
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

export default ContactUs;
