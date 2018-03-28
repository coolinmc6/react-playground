import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTeams, fetchTest, fetchGames } from '../actions/index';

class WorldCup extends Component {
	componentDidMount() {
		this.props.fetchTeams();
		this.props.fetchTest();
		this.props.fetchGames();
	}

	renderSingleGroup(group) {
		return (
			<div className="group-parent" key={group}>
				{this.props.worldcup[group].map(team => {

					return (
						<div className="country" key={team.Name}>{team.Name}
							<img src={team.Flag}/>
						</div>
					)
				})}
			</div>
		);
	}

	renderAllGroups() {
		const groups = ["GroupA", "GroupB","GroupC","GroupD","GroupE","GroupF","GroupG","GroupH"];
		return groups.map(group => {
			return this.renderSingleGroup(group);
		})
	}

	render() {
		return (
			<div className="container world-cup-main">
				<div className="stage-parent">
					<h2>Group Stage</h2>
					<div className="all-groups-parent">
						{this.renderAllGroups()}
					</div>
				</div>
				<div className="stage-parent">Round of 16</div>
				<div className="stage-parent">Quarter-finals</div>
				<div className="stage-parent">Semi-finals</div>
				<div className="stage-parent">Final</div>
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
	return bindActionCreators({ fetchTeams, fetchTest, fetchGames }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorldCup);