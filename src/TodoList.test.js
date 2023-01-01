import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

test('Render App', () => {
	render(<TodoList />);
});

it('Sould match previous screenshot', () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment).toMatchSnapshot();
});
