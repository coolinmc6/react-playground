import React, { Component } from 'react';
import Functional from './Functional';

class NoReduxState extends Component {
	constructor(props) {
		super(props);
		// this.cmRef = React.createRef();
		this.state = {
			tweets: [],
			text: ''
		};

		

		
	}

	getInput(e) {

		this.setState({
			text: e.target.value
		});
	}

	addIt() {
		console.log(this.state.text);
		this.setState({ text: ''});

	}

	render() {
		return (

			<div>
				<h1>Local State - No Redux</h1>
				<input onChange={(e) => {this.getInput(e)}} value={this.state.text}/>
				<button onClick={() => {this.addIt()}}>Add it!</button>
				<Functional />
				<Functional />
				<Functional />
				<Functional />
			</div>

		)
	}
}

export default NoReduxState;