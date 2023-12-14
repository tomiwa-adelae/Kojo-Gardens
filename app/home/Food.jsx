"use client";
import React, { useState } from "react";
import ImageModal from "@/components/ImageModal";

const Food = ({ food }) => {
	const [modal, setModal] = useState(false);
	return (
		<div className="food">
			<div onClick={() => setModal(!modal)} className="image">
				<img src={food.url} alt={food.name} />
				<h6>{food.name}</h6>
			</div>

			{modal && (
				<ImageModal
					image={food.url}
					name={food.name}
					onClose={() => setModal(!modal)}
				/>
			)}
		</div>
	);
};

export default Food;
