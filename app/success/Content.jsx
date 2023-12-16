import Link from "next/link";
import React from "react";

const Content = () => {
	return (
		<div className="content">
			<div className="container">
				<h3>
					Thank <span className="text-primary">You!</span>
				</h3>
				<div className="line-primary"></div>
				<div className="success">
					<p>
						Your email has successfully landed in our inbox! 🚀 Our
						team is on it and eager to assist. Expect a swift and
						tailored response. Thank you for reaching out—we value
						your message and look forward to connecting with you
						soon!
					</p>
					<Link href="/">
						<button className="btn btn-primary">
							Take me back
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Content;
