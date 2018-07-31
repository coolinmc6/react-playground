import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos, saveTodo, deleteTodo, markTodoComplete, updateTodo } from '../actions'
import { generateID } from '../helpers/Helpers'

class Todos extends Component {

	constructor() {
		super()
		this.state = {
			existing: false,
			text: '',
			todo: {
				text: '',
				id: '',
				complete: false
			}

		}
	}

	componentDidMount() {
		this.props.fetchTodos();
	}

	renderTodos() {
		if(this.props.todos.length > 0) {
			return this.props.todos.map(todo => {

				const completed = todo.complete ? 'complete' : 'incomplete'
				return (
					<li key={todo.id} className={`collection-item todo-item ${completed}`}>
						{todo.text}
						<i className={`material-icons edit-item ${completed}`} onClick={() => this.editTodo(todo.id)}>edit</i>
						<i className={`material-icons complete-item ${completed}`} onClick={() => this.markTodoComplete(todo.id)}>check</i>
						<i className={`material-icons delete-item ${completed}`} onClick={() => this.deleteTodo(todo.id)}>delete</i>
					</li>
				)
			})	
		} else {
			return <div>Loading...</div>
		}
		
	}

	editTodo(id) {
		console.log(id)
		let todo = this.props.todos.filter(item => item.id === id)[0]
		this.setState({
			existing: !this.state.existing,
			todo: {
				text: todo.text,
				id: todo.id,
				complete: todo.complete
			}
		})
	}

	markTodoComplete(id) {
		console.log(id);
		let todo = this.props.todos.filter(item => item.id === id)[0]
		todo.complete = !todo.complete
		this.props.markTodoComplete(todo)
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

	changeExistingTodoText(text) {
		this.setState({
			todo: { 
				...this.state.todo,
				text 
			}
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

	updateTodo() {
		var todo = {
			id: this.state.todo.id,
			text: this.state.todo.text,
			complete: this.state.todo.complete
		}
		this.setState({
			existing: false
		})
		this.props.updateTodo(todo)
	}

	renderInputs() {
		if(!this.state.existing) {
			return (
				<div>
					<input id="todo-text" 
							name="todo-text" 
							placeholder="Enter your todo" 
							type="text"
							onKeyDown={(e) => e.keyCode === 13 && this.saveTodo()}
							onChange={(e) => this.changeTodoText(e.target.value)}
							value={this.state.text}/>
					<label htmlFor="todo-text">Todo Item</label>
					<a className="waves-effect waves-light btn"
						onClick={() => this.saveTodo()}
						>Save Todo
					</a>
				</div>
			)
		} else {
			return (
				<div>
					<input id="todo-text" 
							name="todo-text" 
							placeholder="Edit your todo" 
							type="text"
							onKeyDown={(e) => e.keyCode === 13 && this.updateTodo()}
							onChange={(e) => this.changeExistingTodoText(e.target.value)}
							value={this.state.todo.text}/>
					<label htmlFor="todo-text">Todo Item</label>
					<a className="waves-effect waves-light btn"
						onClick={() => this.updateTodo()}
						>Update Todo
					</a>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="input-field col s6">
						{this.renderInputs()}
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
	return bindActionCreators({ fetchTodos, saveTodo, deleteTodo, markTodoComplete, updateTodo}, dispatch );
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);