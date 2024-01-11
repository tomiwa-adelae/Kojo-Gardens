"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		const keyDownHandler = (event) => {
			if (openNav && event.key === "Escape") {
				event.preventDefault();

				// 👇️ your logic here
				setOpenNav(!openNav);
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, [openNav]);

	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link onClick={() => setOpenNav(false)} href="/">
						<h3>Kojo Gardens</h3>
					</Link>
				</div>
				<nav className={openNav ? "links open" : "links"}>
					<ul>
						<Link
							onClick={() => setOpenNav(!openNav)}
							href="/about"
						>
							<li>About us</li>
						</Link>
						<Link
							onClick={() => setOpenNav(!openNav)}
							href="/contact"
						>
							<li>Contact us</li>
						</Link>
						<Link
							onClick={() => setOpenNav(!openNav)}
							href="/gallery"
						>
							<li>Our Gallery</li>
						</Link>
						<Link
							onClick={() => setOpenNav(!openNav)}
							href="/reservations"
						>
							<li>Make Reservations</li>
						</Link>
					</ul>
				</nav>

				<div onClick={() => setOpenNav(!openNav)} className="burger">
					{openNav ? (
						<AiOutlineClose size={40} />
					) : (
						<LiaBarsSolid size={40} />
					)}
				</div>
			</div>
		</header>
	);
};


export default Header;
