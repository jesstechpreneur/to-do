import React, {useState, useEffect} from "react";
import Form from "../component/form.jsx";
import TodoList from "./ToDoList.jsx";

//create your first component
const Home = () => {

	const[inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);

	const filterHandler = () => {
		switch(status){
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true))
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed === false))
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	useEffect(() => {
		filterHandler();
	}, [todos, status]);

	return (
		<div className="text-center todo">
			<header>
				<h1 className="text-center mt-5">To-Do List</h1>
			</header>
			<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}  />
			<TodoList  setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
			
		</div>
	);
};

export default Home;
