import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos, saveTodo, deleteTodo } from '../actions'
import { generateID } from '../helpers/Helpers'

class Todos extends Component {

	constructor() {
		super()
		this.state = {
			text: ''
		}
	}

	componentDidMount() {
		this.props.fetchTodos();
	}

	renderTodos() {
		if(this.props.todos.length > 0) {
			return this.props.todos.map(todo => {
				// console.log(todo);
				return (
					<li key={todo.id} className="collection-item todo-item">
						{todo.text}
						<i className="material-icons complete-item">check</i>
						<i className="material-icons delete-item" onClick={() => this.deleteTodo(todo.id)}>delete</i>
					</li>
				)
			})	
		} else {
			return <div>Loading...</div>
		}
		
	}

	deleteTodo(id) {
		if(window.confirm('Are you sure want to delete this item?')) {
			this.props.deleteTodo(id)	
		}
		
	}

	changeTodoText(text) {
		this.setState({
			text
		})
	}

	saveTodo() {
		console.log(this.state.text)
		var todo = {
			id: generateID(),
			text: this.state.text,
			complete: false

		}

		this.props.saveTodo(todo);
		this.setState({
			text: ''
		})

		// this.props.fetchTodos()

	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="input-field col s6">
						<input id="todo-text" 
								name="todo-text" 
								placeholder="Enter your todo" 
								type="text"
								onChange={(e) => this.changeTodoText(e.target.value)}
								value={this.state.text}/>
						<label htmlFor="todo-text">Todo Item</label>
						<a className="waves-effect waves-light btn"
							onClick={() => this.saveTodo()}
							>Save Todo
							
						</a>
					</div>
				</div>
				<h5>Your ToDo List</h5>
				<ul className="collection">
					{this.renderTodos()}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchTodos, saveTodo, deleteTodo}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);