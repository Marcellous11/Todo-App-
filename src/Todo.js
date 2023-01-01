import React from 'react';

const Todo = ({ todo, removeTodo, id }) => {
	const remove = (e) => {
		removeTodo(id);
	};

	return (
		<li>
			<p>
				{todo} <button onClick={() => remove()}>X</button>
			</p>
		</li>
	);
};

export default Todo;
