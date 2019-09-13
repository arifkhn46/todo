import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewTodoForm extends Component {
	state = {
		todo: '',
		error: '',
	}

	onSubmit = (e) => {
		e.preventDefault();

	}

	handleOnChange = (e) => {
		if (!e.target.value) {
			this.setState({
				error: "Todo can not be blank!"
			});
			return;
		}

		this.setState({
			todo: e.target.value,
			error: ''
		})
	}

  render () {
    return (
      <div className='new-todo-form'>
				<form id="new-todo-form" className="w-full max-w-sm p-2" onSubmit={this.props.onSubmit || this.onSubmit} data-testid="new-todo-form">
					<div className="flex item-center border-b border-b-2 border-blue-500 py-2">
						<input type="text" onChange={this.handleOnChange} name="new-todo" className="appearence-none bg-transparent border-none w-full text-grey-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
						<button type="submit" className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">
							ADD
						</button>
					</div>
					{
						this.state.error.length !== 0 &&
						(
							<p className="text-red-500 text-xs italic mt-3">{ this.state.error }</p>
						)
					}
				</form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const mapStateToProps = state => {
	console.log(state);
	return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
