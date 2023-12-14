"use client";
import React, { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa6";

const UpIcon = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const changeHeaderBg = () => {
			if (window.scrollY >= 300) {
				setShow(true);
			} else {
				setShow(false);
			}
		};

		window.addEventListener("scroll", changeHeaderBg);
	}, []);

	return (
		show && (
			<div
				onClick={() => {
					window.scroll({
						top: 0,
						behavior: "smooth",
					});
				}}
				className="up-icon"
			>
				<FaAngleUp />
			</div>
		)
	);
};

export default UpIcon;
