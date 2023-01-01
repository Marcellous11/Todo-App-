import React from 'react';
import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoFrom';

test('Render App', () => {
	render(<NewTodoForm />);
});

it('Sould match previous screenshot', () => {
	const { asFragment } = render(<NewTodoForm />);
	expect(asFragment).toMatchSnapshot();
});
