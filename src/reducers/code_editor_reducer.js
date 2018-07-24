import {
	FETCH_CODE_LIBRARY
} from '../actions/types';

const defaultJSNotes = {
	focus: false,
	keywords: [],
	library: [],
	list: [],
	page: [],
	search: ''
};

export default function(state = defaultJSNotes, action) {
	switch(action.type) {
		case FETCH_CODE_LIBRARY:
			return {
				...state, 
				library: [...action.payload.data]
			}
		default:
			return state;
	}
}