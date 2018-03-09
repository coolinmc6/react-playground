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
			<div className='counter-main'>
				<h1>Counter</h1>
				<div className="count-parent">
					<a onClick={() => this.props.decrement(this.props.count)} className="btn-floating btn-large waves-effect waves-light red">
						<i class="material-icons">expand_more</i>
					</a>
					<div className="count">{this.props.count}</div>
					<a onClick={() => this.add()} className="btn-floating btn-large waves-effect waves-light red">
						<i class="material-icons">expand_less</i>
					</a>
				</div>
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