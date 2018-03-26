import {
	FETCH_TEAMS
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_TEAMS:
			console.log(action.payload.data)
			return {
				...state,
				team: [...action.payload.data]
			}
		default: 
			return state;
	}
}