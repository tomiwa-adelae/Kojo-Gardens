import AboutUs from "./home/AboutUs";
import MakeReservation from "./home/MakeReservation";
import Showcase from "./home/Showcase";

export default function Home() {
	return (
		<div className="home-page">
			<Showcase />
			<MakeReservation />
			<AboutUs />
		</div>
	);
}
