import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<h3>
					<Link href="/">
						Kojo <span className="text-secondary">Gardens</span>
					</Link>
				</h3>
				<div className="icons">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.instagram.com/kojo_gardens/"
					>
						<FaInstagram className="instagram" />
					</a>
					<a href="/">
						<FaFacebook className="facebook" />
					</a>
				</div>
				<p>&copy; 2024 Kojo Gardens. All Rights Reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
