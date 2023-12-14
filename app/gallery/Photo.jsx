"use client";
import React, { useState } from "react";
import ImageModal from "@/components/ImageModal";

const Photo = ({ photo }) => {
	const [modal, setModal] = useState(false);
	return (
		<div className="photo">
			<div onClick={() => setModal(!modal)} className="image">
				<img src={photo.url} alt={photo.name} />
				<h6>{photo.name}</h6>
			</div>

			{modal && (
				<ImageModal
					image={photo.url}
					name={photo.name}
					onClose={() => setModal(!modal)}
				/>
			)}
		</div>
	);
};

export default Photo;
