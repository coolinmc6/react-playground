import {
	FETCH_TODOS, 
	SAVE_TODO,
	DELETE_TODO,
	MARK_TODO_COMPLETE
} from '../actions/types';

export default function(state = [], action) {
	switch(action.type) {

		case FETCH_TODOS:
			
			// return {
			// 	todos: [...action.payload.data]
			// }

			return [...action.payload.data]
		case SAVE_TODO:
			console.log("SAVE TODO HIT")
			return [...state, action.payload]
		case DELETE_TODO:
			const newState = state.filter(todo => todo.id !== action.payload)
			return [...newState]
		case MARK_TODO_COMPLETE:
			const updatedIndex = state.findIndex(item => item.id === action.payload.id)
			return [
				...state.slice(0,updatedIndex),
				action.payload,
				...state.slice(updatedIndex+1)
			]
			return state;
		default:
			return state;
	}
}