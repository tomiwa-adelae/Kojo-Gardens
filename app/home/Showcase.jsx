"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Showcase = () => {
	const images = [
		{ id: uuidv4(), url: "./hotelbed.jpg" },
		{ id: uuidv4(), url: "./hotelbed-2.jpg" },
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
				// pagination={{
				// 	clickable: true,
				// }}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
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
