import { 
	INCREMENT, 
	DECREMENT,
	TWEET_TEXT, 
	SEND_TWEET,
	UPDATE_SEARCH, 
	FETCH_LIBRARY,
	CHANGE_PAGE,
	CHANGE_FOCUS,
	FETCH_TEAMS,
	FETCH_TEST,
	FETCH_GAMES
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
	const rand = Math.floor(Math.random()*1000000)
	const url = `https://raw.githubusercontent.com/coolinmc6/react-playground/master/library.json?${rand}`;
	const request = axios.get(url);

	return {
		type: FETCH_LIBRARY,
		payload: request
	}
}

export function changePage(id) {
	return {
		type: CHANGE_PAGE,
		payload: id
	}
}

export function changeFocus(bool) {
	return {
		type: CHANGE_FOCUS,
		payload: bool
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////
// World Cup 2018

export function fetchTeams() {
	const rand = Math.floor(Math.random()*1000000)
	const url = `https://raw.githubusercontent.com/coolinmc6/react-playground/master/world-cup.json?${rand}`;
	const request = axios.get(url);

	return {
		type: FETCH_TEAMS,
		payload: request
	}
}

export function fetchTest() {
	const rand = Math.floor(Math.random()*1000000)
	const url = `https://raw.githubusercontent.com/coolinmc6/react-playground/master/test.json?${rand}`;
	const request = axios.get(url);

	return {
		type: FETCH_TEST,
		payload: request
	}
}

export function fetchGames() {
	const rand = Math.floor(Math.random()*1000000)
	const url = `https://raw.githubusercontent.com/coolinmc6/react-playground/master/games.json?${rand}`;
	const request = axios.get(url);

	return {
		type: FETCH_GAMES,
		payload: request
	}
}

