import React from "react";
import styled from "styled-components";

//create your first component
const Home = () => {
	return (
		<div className="text-center todo">
			<h1 className="text-center mt-5">To-Do List</h1>
			<input />
			<a href="#" className="btn btn-success">
				Submit
			</a>
			<ul>
				<li>Task 1 <span class="delete">delete</span></li>
				<li>Task 2 <span class="delete">delete</span></li>
				<li>Task 3 <span class="delete">delete</span></li>
				<li>Task 4 <span class="delete">delete</span></li>
			</ul>
			<p>Tasks Created: #</p>
			<p>Tasks left: #</p>
			
		</div>
	);
};

export default Home;
