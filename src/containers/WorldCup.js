import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeams } from '../actions/index';

class WorldCup extends Component {
	componentDidMount() {
		this.props.fetchTeams();
	}

	render() {
		return (
			<div className="container">
				WorldCup
			</div>
		)
	}

}

function mapStateToProps(state) {
	return {
		worldcup: state.worldcup
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchTeams }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldCup);