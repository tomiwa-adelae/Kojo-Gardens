import { Oldenburg } from "next/font/google";
import "../styles/styles.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UpIcon from "@/components/UpIcon";

const oldenburg = Oldenburg({ weight: ["400"], subsets: ["latin"] });

export const metadata = {
	title: "Kojo Gardens",
	description: "Generated by create next app",
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
