import React, { Component } from 'react';

class NewTodoForm extends Component {
	state = {
		todo: '',
	}

	onSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	handleOnChange = (e) => {
		this.setState({
			todo: e.target.value,
		})
	}

  render () {
    return (
      <div className='new-todo-form'>
				<form id="new-todo-form" className="w-full max-w-sm p-2" onSubmit={this.props.onSubmit || this.onSubmit} data-testid="new-todo-form">
					<div className="flex item-center border-b border-b-2 border-blue-500 py-2">
						<input type="text" onChange={this.handleOnChange} name="new-todo" className="appearence-none bg-transparent border-none w-full text-grey-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
						<button type="submit" className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
							ADD
						</button>
					</div>
				</form>
      </div>
    )
  }
}

export default NewTodoForm;
