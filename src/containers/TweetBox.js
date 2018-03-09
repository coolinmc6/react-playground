import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText, addTweet } from '../actions/index';
import { bindActionCreators } from 'redux';

class TweetBox extends Component {
	getInput(text) {
		this.props.updateText(text);
	}

	addTweet() {
		var tweet = {};
		tweet.text = this.props.tweets.text;
		tweet.id = this.props.tweets.count
		//Math.floor(Math.random()*1000000);
		// export const generateID = () => Math.floor(Math.random()*1000000);
		this.props.addTweet(tweet);
		this.renderTweets();
	}

	renderTweets() {
		return this.props.tweets.tweets.map(twt => <div key={twt.id}>{twt.text}</div>)
	}

	render() {
		return (
			<div className="tweet-box-main">
				<div className="container">
					<div className="row">
						<div className="input-field">
							<textarea type="text" name="tweet"
									placeholder="What's happening?" 
									onChange={(e) => this.getInput(e.target.value)}
									className="col s12 m8 materialize-textarea"></textarea>
							<a className="waves-effect waves-light btn"
								onClick={() => this.addTweet()}
								>Send Tweet 
								<i className="material-icons right">send</i>
							</a>
						</div>
					</div>
					
					<br />
					{/*<h2>Your Tweets</h2> */}
					<div>
						{this.renderTweets()}
					</div>
				</div>
			</div>

		)

	}

}

function mapStateToProps(state) {
	return { tweets: state.tweets }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ updateText, addTweet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetBox);
