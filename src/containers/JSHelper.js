import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class JSHelper extends Component {

	render() {
		return (
			<div className="js-helper-main">
				<h1>JavaScript Cheat Sheet</h1>
				<div className="container">
					<input type="text" className="search" placeholder="JavaScript concept or function" />
					<ul className="results">

					</ul>
				</div>
			</div>
		);
	}

}



export default JSHelper;