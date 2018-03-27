import {
	FETCH_TEAMS, FETCH_TEST, FETCH_GAMES
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_TEAMS:
			console.log(action.payload.data)
			return {
				...state,
				team: [...action.payload.data]
			}
		case FETCH_TEST:
			console.log(action.payload.data)
			return {
				...state, 
				test: [...action.payload.data]
			}
		case FETCH_GAMES:
			return {
				...state, 
				games: [...action.payload.data]
			}	
		default: 
			return state;
	}
}