import React from "react";
import Showcase from "./Showcase";
import Content from "./Content";

export const metadata = {
	title: "Gallery | Kojo Gardens",
	description:
		"Explore the captivating visual journey of Kojo Gardens through our gallery. Immerse yourself in a collection of stunning images showcasing our luxurious accommodations, vibrant bar scenes, exquisite dining, and the essence of our unique ambiance. Get a glimpse of the elegance and allure that awaits you at our establishment. Discover the beauty of Kojo Gardens through our carefully curated gallery.",
	keywords:
		"Kojo Gardens, Kojo, Gardens, food, foods, hotel, bar, resort, resort center, nkwobi, nigerian dishes, nigerian foods, Hotel & Bar, Luxury Accommodation, Live Music, contact kojo gardens, gallery, photos, photo, pictures, experience, memories, stunning images, accomodations, bar scenes, dining",
};

const page = () => {
	return (
		<div className="gallery-page">
			<Showcase />
			<Content />
		</div>
	);
};

export default page;
