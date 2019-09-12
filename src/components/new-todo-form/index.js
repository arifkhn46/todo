import React, { Component } from 'react';

class NewTodoForm extends Component {
  render () {
    return (
      <div className='new-todo-form'>
				<form id="new-todo-form" onSubmit={this.props.onSubmit} data-testid="new-todo-form">
					<input type="text" name="new-todo" required />
				</form>
      </div>
    )
  }
}

export default NewTodoForm;
