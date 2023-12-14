import AboutUs from "./home/AboutUs";
import ContactUs from "./home/ContactUs";
import MakeReservation from "./home/MakeReservation";
import OurFoods from "./home/OurFoods";
import OurGallery from "./home/OurGallery";
import Showcase from "./home/Showcase";

export default function Home() {
	return (
		<div className="home-page">
			<Showcase />
			<MakeReservation />
			<AboutUs />
			<OurFoods />
			<OurGallery />
			<ContactUs />
		</div>
	);
}
