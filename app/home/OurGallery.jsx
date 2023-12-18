"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const OurGallery = () => {
	const images = [
		{ id: uuidv4(), url: "./barbeque.jpg", name: "Barbeque" },
		{ id: uuidv4(), url: "./cocktail.jpg", name: "Cocktail" },
		{ id: uuidv4(), url: "./chicken.jpg", name: "Chicken" },
		{ id: uuidv4(), url: "./jollofrice.jpg", name: "Jollof rice" },
		{ id: uuidv4(), url: "./heinkein.jpg", name: "Heinkein" },
		{ id: uuidv4(), url: "./nkowbi.jpg", name: "Nkwobi" },
		{ id: uuidv4(), url: "./pasta.jpg", name: "Pasta" },
		{ id: uuidv4(), url: "./pepsi.jpg", name: "Pepsi" },
		{
			id: uuidv4(),
			url: "./redlabel.jpg",
			name: "Johnnie Walker Red Label",
		},
		{ id: uuidv4(), url: "./wine.jpg", name: "Red wine" },
	];

	return (
		<div className="our-gallery">
			<div className="container">
				<h3>
					Our <span className="text-primary">Gallery</span>
				</h3>
				<div className="line-primary"></div>
				<Swiper
					slidesPerView={3}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					keyboard={{
						enabled: true,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper"
				>
					{images.map((image) => (
						<SwiperSlide className="image" key={image.id}>
							<img src={image.url} alt={image.name} />
							<h6>{image.name}</h6>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default OurGallery;

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
