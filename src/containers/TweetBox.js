import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateText, addTweet } from '../actions/index';
import { bindActionCreators } from 'redux';

import guy1 from '../artwork/guy-1.jpg';

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
		this.props.updateText('');
	}

	renderTweets() {
		return this.props.tweets.tweets.map((twt) => {
			return (
				<div key={twt.id} className="tweet-parent">
					<img className="profile-img" src={guy1} alt={`This is alt text for tweet #${twt.id}`}/>
					<div className="tweet-text">{twt.text}</div>					
				</div>
			)
		});
	}

	render() {
		return (
			<div className="tweet-box-main">
				<div className="container tweet-feed">
					<div className="row">
						<div className="input-field">
							<textarea type="text" name="tweet"
									placeholder="What's happening?" 
									onChange={(e) => this.getInput(e.target.value)}
									className="col s12 m8 materialize-textarea"
									value={this.props.tweets.text}></textarea>
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
