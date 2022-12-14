import React from "react";
import styled from "styled-components";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">To-Do List</h1>
			<input />
			<a href="#" className="btn btn-success">
				Submit
			</a>
		</div>
	);
};

export default Home;
