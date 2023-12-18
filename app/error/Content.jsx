"use client";
import Link from "next/link";

const Content = ({ searchParams }) => {
	return (
		<div className="content">
			<div className="container">
				<h3>
					<span className="text-primary">Whoops!</span>
				</h3>
				<div className="line-primary"></div>
				<div className="error">
					<p>
						Oops, it seems like your email encountered a temporary
						glitch on its way to us. Don't worry, though! We're here
						and ready to assist. Please double-check your internet
						connection or try resending your message. If the issue
						persists, feel free to reach out through an alternative
						method or contact us directly. We're committed to
						ensuring your message reaches us, and we're standing by
						to help resolve any hiccups in communication. Thank you
						for your patience
					</p>
					<Link
						href={
							searchParams.q === "contact"
								? "/contact"
								: searchParams.q === "reservations"
								? "/reservations"
								: "/"
						}
					>
						<button className="btn btn-primary">Try again</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Content;
