import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/index';
import { bindActionCreators } from 'redux';

class Counter extends Component {

	add() {
		this.props.increment(this.props.count)
	}

	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
				<button onClick={() => this.add()}>+</button>
				<button onClick={() => this.props.decrement(this.props.count)}>-</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		count: state.count
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ increment, decrement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);