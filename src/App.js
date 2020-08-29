import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header";
import Banner from "./components/banner";

function App() {
	return (
		//BEM

		<div className="app">
			<h1>Airbnb Clone </h1>
			<Home />
			<Header />
			<Banner /> {/* Search */}
			{/* Cards */}
			{/* Footer */}
			{/* Search Page */}
			{/* ... */}
		</div>
	);
}

export default App;
