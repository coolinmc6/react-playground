import React, { Component } from 'react';

class TweetBox extends Component {
	getInput(text) {
		
	}

	render() {
		return (
			<div>
				<input type="text" onChange={(e) => this.getInput(e.target.value)}/>
				<button>Send Tweet</button>
				<br />
				<h2>Your Tweets</h2>
				<div>

				</div>
			</div>

		)

	}

}

export default TweetBox;
