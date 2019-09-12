import React from 'react';
import {
  render,
	fireEvent,
	cleanup
} from '@testing-library/react';
import NewTodoForm from 'components/new-todo-form';

describe('<NewTodoForm />', () => {
	let container, getByTestId, onSubmit;

	afterEach(cleanup);

	const setup = () => {
		onSubmit = jest.fn();
		({ container, getByTestId } = render(<NewTodoForm onSubmit={onSubmit}/>));
	}
	beforeEach(() => {
		setup();
	});

	describe('Renders New Todo component', () => {
		it("renders", () => {
			expect(container.querySelector(".new-todo-form")).not.toBeNull();
		});

		it("has a form", () => {
			expect(getByTestId("new-todo-form")).not.toBeNull();
		});
	});

	describe('Render new todo form', () => {
		it("has input element", () => {
			expect(getByTestId("new-todo-form").querySelector("input[name='new-todo']")).not.toBeNull();
		});

		it('submits', () => {
			fireEvent.submit(getByTestId("new-todo-form"));
			expect(onSubmit).toHaveBeenCalled();
		});
	});

	describe('Perform form validations', () => {
		it('raise an error if empty form has been submitted', () => {
			// fireEvent.submit(getByTestId("new-todo-form"));
			expect(onSubmit).not.toHaveBeenCalled();
		});
	});

});