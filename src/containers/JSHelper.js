import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearch, fetchLibrary } from '../actions/index';

class JSHelper extends Component {
	componentDidMount() {
		this.props.fetchLibrary();
	}

	renderSearch() {
		return this.props.javascript.list.map((item) =>  {
			return (
				<div key={item.id}>
					<h3>{item.term}</h3>
					<p>{item.definition}</p>
				</div>
			)
		});
	}

	render() {
		return (
			<div className="js-helper-main">
				<h1>JavaScript Cheat Sheet</h1>
				<div className="container">
					<input type="text" className="search" placeholder="JavaScript concept or function" 
						value={this.props.javascript.search}
						onChange={(e) => this.props.updateSearch(e.target.value)}/>
					<ul className="results">
						{this.renderSearch()}
					</ul>
				</div>
			</div>
		);
	}

}


function mapStateToProps(state) {
	return {
		javascript: state.javascript
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ updateSearch, fetchLibrary }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(JSHelper);