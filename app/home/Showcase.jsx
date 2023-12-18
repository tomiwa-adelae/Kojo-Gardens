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
		{ id: uuidv4(), url: "./hotel-bed-3.jpg" },
		{ id: uuidv4(), url: "./bar.jpg" },
		{ id: uuidv4(), url: "./bar-3.jpg" },
		{ id: uuidv4(), url: "./bar-2.jpg" },
		{ id: uuidv4(), url: "./beach.jpg" },
		{ id: uuidv4(), url: "./pool.jpg" },
		{ id: uuidv4(), url: "./drink.jpg" },
		{ id: uuidv4(), url: "./heinkein.jpg" },
		{ id: uuidv4(), url: "./hotel-bed-2.jpg" },
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
					<SwiperSlide key={image.id}>
						<img src={image.url} alt="Showcase Image" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Showcase;
