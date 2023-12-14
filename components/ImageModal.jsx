import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const ImageModal = ({ image, name, onClose }) => {
	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === "Escape") {
				event.preventDefault();

				// 👇️ your logic here
				onClose();
			}
		};

		document.addEventListener("keydown", keyDownHandler);

		// 👇️ clean up event listener
		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, [onClose]);

	return (
		<div className="modal">
			<span className="close" onClick={onClose}>
				<AiOutlineClose size={40} />
			</span>
			<div className="modal-container">
				<img className="modal-content" src={image} alt={name} />
				<h6 className="caption">{name}</h6>
			</div>
		</div>
	);
};

export default ImageModal;
