import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/header";
import Footer from "./components/Footer";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		//BEM

		<div className="app">
			<Router>
				<Header />

				<Switch>
					<Route path="/search">
						<SearchPage />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
