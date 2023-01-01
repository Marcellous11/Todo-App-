import React, { useState } from 'react';
import Todo from './Todo.js';
import NewTodoForm from './NewTodoFrom';
import './TodoList.css';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
	// Array of Objects
	const [ todos, setTodo ] = useState([]);

	//Passed down to "form" for adding Todos
	const addTodo = (newTodo) => {
		setTodo((todos) => [ ...todos, { ...newTodo } ]);
	};

	//? How is this finding the right id
	//Passed down to "Todos" for removing todos
	const removeTodo = (id) => {
		setTodo((todos) => todos.filter((todo) => todo.id !== id));
	};

	//creates all todos
	//! I had to extract id and send it down
	let listOfTodo = todos.map(({ todo, id }) => <Todo todo={todo} key={uuid()} removeTodo={removeTodo} id={id} />);

	return (
		<div className="TodoList">
			<h1>Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<ul>{listOfTodo}</ul>
		</div>
	);
};

export default TodoList;

//* Its important to know the difference between the id in the object and the html id
