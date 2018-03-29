import {
	FETCH_TEAMS, FETCH_TEST, FETCH_GAMES
} from '../actions/types';

const defaultWorldCupState = {
	GroupA: [],
	GroupB: [],
	GroupC: [],
	GroupD: [],
	GroupE: [],
	GroupF: [],
	GroupG: [],
	GroupH: [],
	Round16: [],
	Quarters: [],
	Semis: [],
	Final: [],
	team: [],
	test: [],
	games: []
}

export default function(state = defaultWorldCupState, action) {
	switch(action.type) {
		case FETCH_TEAMS:
			console.log('FETCH_TEAMS:', action.payload.data)
			return {
				...state,
				team: [...action.payload.data],
				GroupA: [...action.payload.data.filter(team => team.Group === "A")],
				GroupB: [...action.payload.data.filter(team => team.Group === "B")],
				GroupC: [...action.payload.data.filter(team => team.Group === "C")],
				GroupD: [...action.payload.data.filter(team => team.Group === "D")],
				GroupE: [...action.payload.data.filter(team => team.Group === "E")],
				GroupF: [...action.payload.data.filter(team => team.Group === "F")],
				GroupG: [...action.payload.data.filter(team => team.Group === "G")],
				GroupH: [...action.payload.data.filter(team => team.Group === "H")]
			}
		case FETCH_TEST:
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