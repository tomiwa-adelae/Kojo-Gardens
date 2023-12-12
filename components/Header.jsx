import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<Link href="/">
					<h3>Kojo Gardens</h3>
				</Link>
			</div>
			<nav className="links">
				<ul>
					<li>
						<Link href="/gallery">Gallery</Link>
					</li>
					<li>
						<Link href="/about">About us</Link>
					</li>
					<li>
						<Link href="/contact">Contact us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
