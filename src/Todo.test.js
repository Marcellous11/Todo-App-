import React from 'react';
import { render } from '@testing-library/react';
import Todo from './Todo';

test('Render App', () => {
	render(<Todo />);
});

it('Sould match previous screenshot', () => {
	const { asFragment } = render(<Todo />);
	expect(asFragment).toMatchSnapshot();
});
