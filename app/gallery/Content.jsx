import React from "react";
import { v4 as uuidv4 } from "uuid";
import Photo from "./Photo";

const Content = () => {
	const photos = [
		{ id: uuidv4(), url: "./barbeque.jpg", name: "Barbeque" },
		{ id: uuidv4(), url: "./cocktail.jpg", name: "Cocktail" },
		{ id: uuidv4(), url: "./chicken.jpg", name: "Chicken" },
		{ id: uuidv4(), url: "./jollofrice.jpg", name: "Jollof rice" },
	];

	return (
		<div className="content">
			<div className="container">
				<h3>
					ARTISTRY ELEVATED:{" "}
					<span className="text-primary">EXPLORE OUR GALLERY</span>
				</h3>
				<div className="line-primary"></div>

				<div
					className="photos
				"
				>
					{photos.map((photo) => (
						<Photo key={photo.id} photo={photo} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Content;
