"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
	const [openNav, setOpenNav] = useState(false);

	return (
		<header>
			<div className="container">
				<div className="logo">
					<Link href="/">
						<h3>Kojo Gardens</h3>
					</Link>
				</div>
				<nav className={openNav ? "links open" : "links"}>
					<ul>
						<Link href="/gallery">
							<li>Gallery</li>
						</Link>
						<Link href="/about">
							<li>About us</li>
						</Link>
						<Link href="/contact">
							<li>Contact us</li>
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
