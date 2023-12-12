import React from "react";

const MakeReservation = () => {
	return (
		<div className="make-reservation">
			<div className="container">
				<h3>
					Book <span className="text-secondary">Rooms</span>
				</h3>
				<div className="line-white"></div>

				<div className="boxes">
					<div>
						<h6>Arrival Date</h6>
						<input type="date" name="arrival" id="" />
						{/* <h5>10 December, 2023</h5> */}
					</div>
					<div>
						<h6>Departure Date</h6>
						<input type="date" name="arrival" id="" />
					</div>
					<div>
						<h6>Number of Guest</h6>
						<select name="guest" id="guest">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div id="btn">
					<button className="btn btn-secondary">Send Request</button>
				</div>
			</div>
		</div>
	);
};

export default MakeReservation;
