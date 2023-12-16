"use client";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Content = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

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
			await axios.post("http://localhost:5000/contact", content, config);

			router.push("/success");
		} catch (err) {
			router.push("/error?q=contact");
		}
	};

	return (
		<div className="content">
			<div className="container">
				<h3>
					Reach out.{" "}
					<span className="text-primary">We're here to serve</span>
				</h3>
				<div className="line-primary"></div>
				<div className="cards">
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
										type="email"
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
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
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
								<p>+234 1 2772700-25 , +234 1 460610</p>
							</div>
							<div>
								<h6>E-mail</h6>
								<p>kojogardens@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
