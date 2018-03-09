import { 
	INCREMENT, 
	DECREMENT,
	TWEET_TEXT, 
	SEND_TWEET 
} from './types';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Counter
export function increment(count) {
	console.log('Action Creator: ' + count);
	return {
		type: INCREMENT,
		payload: count
	}
}

export function decrement(count) {
	return {
		type: DECREMENT, 
		payload: count
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// Tweet

export function updateText(text) {
	console.log('Tweet Action Creator:' + text);
	return {
		type: TWEET_TEXT,
		payload: text
	};
}

export function addTweet(tweet) {
	console.log('Tweet Action Creator: ' + tweet);
	return {
		type: SEND_TWEET,
		payload: tweet
	}
}