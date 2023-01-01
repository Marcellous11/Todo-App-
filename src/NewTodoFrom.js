import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
	//!every todo needed an id in the object for removal
	const INITAL_FORM_STATE = {
		id: uuid(),
		todo: ''
	};

	//Sets the value of the inputs
	const [ formData, setFormData ] = useState(INITAL_FORM_STATE);

	//Updates from values in real time
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({
			...formData,
			[name]: value
		}));
	};

	// When from is submitted, data added to todo array, and reset
	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo({ ...formData });
		setFormData(INITAL_FORM_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todo">Enter Todo: </label>
			<input type="text" placeholder="here" name="todo" id="todo" onChange={handleChange} value={formData.todo} />
			<button>Add</button>
		</form>
	);
};

export default NewTodoForm;
