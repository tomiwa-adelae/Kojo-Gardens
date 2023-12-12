import React from "react";

const AboutUs = () => {
	return (
		<div className="about-us">
			<div className="container">
				<h3>
					Welcome to{" "}
					<span className="text-primary">Kojo Gardens</span>
				</h3>
				<div className="line-primary"></div>

				<div className="content">
					<div className="img">
						<img
							src="./flowerpot.jpg"
							alt="Three Flowers inside 3 different flower pot"
						/>
					</div>
					<div className="about">
						<h6>About us</h6>
						<h5>The best resort center on the Island of Lagos</h5>
						<p>
							Welcome to{" "}
							<span className="text-primary">Kojo Gardens</span>,
							where luxury meets tranquility amidst breathtaking
							landscapes. Nestled in the heart of Lagos, our
							resort embodies the perfect fusion of opulence,
							comfort, and natural beauty. At our resort, we pride
							ourselves on offering an unparalleled guest
							experience. From the moment you arrive, our
							dedicated staff is committed to ensuring your stay
							is nothing short of exceptional. Immerse yourself in
							a world of lavish amenities, from elegantly
							appointed rooms and suites to indulgent spa
							treatments that rejuvenate both body and soul.
							Indulge your palate at our world-class restaurants,
							where culinary artistry meets local flavors,
							promising a gastronomic journey like no other. For
							those seeking adventure, our resort offers a
							plethora of activities, from water sports along the
							pristine coastline to guided tours exploring the
							rich cultural heritage of the region.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
