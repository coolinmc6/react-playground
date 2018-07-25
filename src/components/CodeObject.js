import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CodeObject extends Component {

	renderObject() {
		if(this.props.object) {
			console.log()
			return (
				<div className="row">
					
					<div className="input-field col s4">
			        	<input placeholder="Placeholder" defaultValue={this.props.object.term} type="text"/>
			        	<label htmlFor="term">Term</label>
			        </div>
				</div>
			)
		}
	}

	render() {
		return (
			<div>
				{this.renderObject()}
			</div>
		)

	}

}

export default CodeObject;

// import React from 'react';

// export default (props) => {

// 	return (

// 		<div className="row">
// 			<div class="input-field col s6">
// 				<input placeholder="Placeholder" type="text" class="validate" />
// 				<label for="first_name">First Name</label>
// 	        </div>

// 		</div>
// 	);


// }