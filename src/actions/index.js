import { 
	INCREMENT, 
	DECREMENT,
	TWEET_TEXT, 
	SEND_TWEET,
	UPDATE_SEARCH, 
	FETCH_LIBRARY
} from './types';

import axios from 'axios';

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


///////////////////////////////////////////////////////////////////////////////////////////////////
// JavaScript Helper

export function updateSearch(text) {
	return {
		type: UPDATE_SEARCH,
		payload: text
	}
}


export function fetchLibrary()  {
	const url = '../library.json';
	const request = axios.get(url);

	return {
		type: FETCH_LIBRARY,
		payload: request
	}
}

