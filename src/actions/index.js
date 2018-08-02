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
	DELETE_TODO,
	MARK_TODO_COMPLETE,
	UPDATE_TODO,
	SAVE_NEW_CODE_OBJECT,
	UPDATE_EXISTING_CODE_OBJECT,
	DELETE_CODE_OBJECT
} from './types';

import axios from 'axios';

// JSON SERVER VARIABLES
const port = 3004;
const todosURL = `http://localhost:${port}/todos`;
const codeEditorURL = `http://localhost:${port}/code`;

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
// Code Editor

export function fetchCodeLibrary()  {
	const rand = Math.floor(Math.random()*1000000)
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

export function saveNewCodeObject(code_obj) {

	const request = axios.post(codeEditorURL, code_obj)
		.then(function(res) {
			console.log("SUCCESS")
		})
		.catch(function(res) {
			console.log("FAIL: ", res);
		})

	return {
		type: SAVE_NEW_CODE_OBJECT,
		payload: code_obj
	}
}

export function updateCodeObject(code_obj) {
	const url = `${codeEditorURL}/${code_obj.id}`
	const request = axios.put(url, code_obj)
		.then(function(res) {
			// console.log(res)
		})
		.catch(function(res) {
			console.log("FAIL:", res)
		});

	return {
		type: UPDATE_EXISTING_CODE_OBJECT,
		payload: code_obj
	}
}

export function deleteCodeObject(id) {
	const url = `${codeEditorURL}/${id}`

	const request = axios.delete(url, id)
		.then(function(res) {
			// console.log(res)
		})
		.catch(function(res) {
			console.log("FAIL:", res)
		});
	return {
		type: DELETE_CODE_OBJECT,
		payload: id
	}
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Todos

export function fetchTodos() {
	// const url = `http://localhost:${port}/todos`;
	const request = axios.get(todosURL);
	// console.log(request);
	return {
		type: FETCH_TODOS,
		payload: request
	}
}

export function saveTodo(todo) {

	// const url = `http://localhost:${port}/todos`;
	const request = axios.post(todosURL, todo)
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
	// const port = 3004;
	// const url = `http://localhost:${port}/todos/${id}`;
	const url = `${todosURL}/${id}`
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

// I need more than the id; I need the entire todo
export function markTodoComplete(todo) {
	const url = `${todosURL}/${todo.id}`
	const request = axios.put(url, todo)
		.then(function(res) {
			// console.log(res)
		})
		.catch(function(res) {
			console.log("FAIL:", res)
		});

	return {
		type: MARK_TODO_COMPLETE,
		payload: todo
	}

}

export function updateTodo(todo){
	const url = `${todosURL}/${todo.id}`
	const request = axios.put(url, todo)
		.then(function(res) {
			// console.log(res)
		})
		.catch(function(res) {
			console.log("FAIL:", res)
		});

	return {
		type: UPDATE_TODO,
		payload: todo
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

