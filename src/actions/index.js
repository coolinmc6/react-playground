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
	FETCH_GAMES,
	FETCH_CODE_LIBRARY,
	CLICK_COLLECTION_ITEM,
	CHANGE_INPUT,
	FETCH_TODOS,
	SAVE_TODO,
	DELETE_TODO
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
	// const url = `http://localhost:3004/code`
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
// JavaScript Helper

export function fetchCodeLibrary()  {
	const rand = Math.floor(Math.random()*1000000)
	// const url = `https://raw.githubusercontent.com/coolinmc6/react-playground/master/library.json?${rand}`;
	const url = `http://localhost:3004/code`
	const request = axios.get(url);

	return {
		type: FETCH_CODE_LIBRARY,
		payload: request
	}
}

export function changeCodeObject(id) {

	return {
		type: CLICK_COLLECTION_ITEM,
		payload: id
	}
}

export function changeInputValue(prop, value) {
	return {
		type: CHANGE_INPUT,
		payload: value,
		prop: prop
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Todos

export function fetchTodos() {

	const port = 3004;
	const url = `http://localhost:${port}/todos`;
	const request = axios.get(url);
	// console.log(request);
	return {
		type: FETCH_TODOS,
		payload: request
	}
}

export function saveTodo(todo) {

	const port = 3004;
	const url = `http://localhost:${port}/todos`;
	const request = axios.post(url, todo)
		.then(function(res) {
			// console.log(res)
		})
		.catch(function(res) {
			console.log("FAIL:", res)
		})

	return {
		type: SAVE_TODO,
		payload: todo
	}


}

export function deleteTodo(id) {
	const port = 3004;
	const url = `http://localhost:${port}/todos/${id}`;
	const request = axios.delete(url, id)
		.then(function(res) {
			// console.log(res)
		})
		.catch(function(res) {
			console.log("FAIL:", res)
		});

	return {
		type: DELETE_TODO, 
		payload: id
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

