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
		{ id: uuidv4(), url: "./error.jpg" },
		{ id: uuidv4(), url: "./error-2.jpg" },
		{ id: uuidv4(), url: "./error-3.jpg" },
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
								<span className="text-primary">Error!</span>
							</h1>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Showcase;
