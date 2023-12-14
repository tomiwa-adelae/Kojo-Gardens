import React from "react";

const ContactUs = () => {
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
								<p>+234 1 2772700-25 , +234 1 460610</p>
							</div>
							<div>
								<h6>E-mail</h6>
								<p>kojogardens@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="card form">
						<h5>Get in touch</h5>
						<div className="details">
							<form>
								<div>
									<input
										type="text"
										placeholder="Enter your email address"
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder="Enter your name"
									/>
								</div>
								<div>
									<textarea
										placeholder="Enter your message"
										name=""
										id=""
										cols="30"
										rows="10"
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

export default ContactUs;
