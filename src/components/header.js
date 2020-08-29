import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function header() {
	return (
		<div className="header">
			<img
				className="header__icon"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAYX2wELUnjNW7P0hiACzyVF9ekSodLK7h8g&usqp=CAU"
				alt=""
			/>
			<div className="header__center">
				<input type="text" />
				<SearchIcon />
			</div>
			<div className="header__right">
				<p>Become a Host</p>
				<LanguageIcon />
				<ExpandMoreIcon />
				<Avatar />
			</div>
		</div>
	);
}

export default header;
