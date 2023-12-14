import React from "react";
import { v4 as uuidv4 } from "uuid";
import Food from "./Food";

const OurFoods = () => {
	const foods = [
		{ id: uuidv4(), url: "./barbeque.jpg", name: "Barbeque" },
		{ id: uuidv4(), url: "./cocktail.jpg", name: "Cocktail" },
		{ id: uuidv4(), url: "./chicken.jpg", name: "Chicken" },
		{ id: uuidv4(), url: "./jollofrice.jpg", name: "Jollof rice" },
	];

	return (
		<div className="our-foods">
			<div className="container">
				<h3>
					Our <span className="text-primary">Foods</span>
				</h3>
				<div className="line-primary"></div>

				<div className="food-images">
					{foods.map((food) => (
						<Food food={food} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OurFoods;
