import Card from "../shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
	return (
		<Card>
			<div className="about">
				<h1>AboutPage</h1>
				<p>This is a mini project in React to leave feedback for a product or service</p>
				<p>Version 1.0.0</p>
				<Link to="/">
					<p>Back to Home</p>
				</Link>
			</div>
		</Card>
	);
};

export default AboutPage;
