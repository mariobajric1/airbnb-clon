import React from "react";
import "./Home.css";
import Banner from "../components/banner";
import Card from "../components/Card";
// rfce
// ES7 snippets

function Home() {
	return (
		<div className="home">
			<Banner />
			<div className="home__section">
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im+w=720"
					title="Unique Stays"
					description="Unique activites we can do together, lead by a world of hosts,"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im+w=720"
					title="Unique Stays"
					description="Unique activites we can do together, lead by a world of hosts,"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im+w=720"
					title="Unique Stays"
					description="Unique activites we can do together, lead by a world of hosts,"
				/>
			</div>
			<div className="home__section">
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im+w=720"
					title="Unique Stays"
					description="Unique activites we can do together, lead by a world of hosts,"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im+w=720"
					title="Unique Stays"
					description="Unique activites we can do together, lead by a world of hosts,"
				/>
				<Card
					src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im+w=720"
					title="Unique Stays"
					description="Unique activites we can do together, lead by a world of hosts,"
				/>
			</div>
		</div>
	);
}

export default Home;
