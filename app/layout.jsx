import { Oldenburg } from "next/font/google";
import "../styles/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UpIcon from "@/components/UpIcon";
require("dotenv").config();

const oldenburg = Oldenburg({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
	title: "Kojo Gardens",
	description:
		"Welcome to Kojo Gardens – where luxury accommodation meets vibrant entertainment. Discover a haven of elegance and excitement in the heart of Lagos. Explore our exquisite rooms, exceptional dining, and lively bar scenes. Experience the perfect fusion of comfort, style, and sophistication at Kojo Gardens.",
	keywords:
		"Kojo, Kojo gardens, hotel, resort, bar, foods, party, accomodation, sleep, rest, enjoy",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={oldenburg.className}>
				<Header />
				{children}
				<UpIcon />
				<Footer />
			</body>
		</html>
	);
}
