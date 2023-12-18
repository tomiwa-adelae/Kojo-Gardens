"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const Showcase = () => {
	const images = [
		{ id: uuidv4(), url: "./hotelbed.jpg" },
		{ id: uuidv4(), url: "./barbeque.jpg" },
		{ id: uuidv4(), url: "./cocktail.jpg" },
		{ id: uuidv4(), url: "./flowerpot.jpg" },
		{ id: uuidv4(), url: "./chicken.jpg" },
		{ id: uuidv4(), url: "./jollofrice.jpg" },
		{ id: uuidv4(), url: "./heinkein.jpg" },
		{ id: uuidv4(), url: "./bar-2.jpg" },
		{ id: uuidv4(), url: "./hotel-bed-3.jpg" },
		{ id: uuidv4(), url: "./nkowbi.jpg" },
		{ id: uuidv4(), url: "./pasta.jpg" },
		{ id: uuidv4(), url: "./pepsi.jpg" },
		{ id: uuidv4(), url: "./drink.jpg" },
		{
			id: uuidv4(),
			url: "./redlabel.jpg",
			name: "Johnnie Walker Red Label",
		},
		{ id: uuidv4(), url: "./hotel-bed-2.jpg" },
		{ id: uuidv4(), url: "./wine.jpg" },
		{ id: uuidv4(), url: "./bar.jpg" },
	];

	return (
		<div className="showcase">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}
				className="mySwiper"
			>
				{images.map((image) => (
					<SwiperSlide className="showcase-content" key={image.id}>
						<img src={image.url} alt="Showcase Image" />
						<div className="intro">
							<h1>
								Our{" "}
								<span className="text-primary">Gallery</span>
							</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Showcase;
