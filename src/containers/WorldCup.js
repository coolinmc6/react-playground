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

	renderGroupGames(games) {

		return (
			<div className="games-list">
			{games.map(game => {
				const hFlag = this.props.worldcup.teams && this.props.worldcup.teams.filter(tm => tm.Name == game.home)['Flag']

				return (
					<div key={game.matchID}>______ {game.home}<img src={hFlag}/> vs. {game.away} ______</div>
				)
			})}

			</div>
		)
		
	}

	renderSingleGroup(group) {
		const games = this.props.worldcup.games['Group-Stage'] && this.props.worldcup.games['Group-Stage'].filter(game => game.group === group.charAt(5))
		const gameFlags = games && games.map(game => {
			return {
				matchID: game.matchID,
				home: this.props.worldcup.teams.filter(tm => tm.Name == game.home)[0],
				away: this.props.worldcup.teams.filter(tm => tm.Name == game.away)[0]
			}
		})

		console.log(gameFlags)
		return (
			<div className="group-parent" key={group}>
				{games && this.renderGroupGames(games)}
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



/*
{this.props.worldcup[group].map(team => {
	
	
	return (
		<div className="country" key={team.Name}>{team.Name}
			<img src={team.Flag}/>
		</div>
	)
})}
*/