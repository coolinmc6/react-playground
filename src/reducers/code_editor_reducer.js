import {
	FETCH_CODE_LIBRARY,
	CLICK_COLLECTION_ITEM,
	CHANGE_INPUT
} from '../actions/types';

const defaultJSNotes = {
	library: [],		// the library => all my code
	id: 'new',				// current ID
	term: '',			// the term input field
	definition: '',		// the definition text area
	languages: [],		// the languages the code is relevant for
	snippets: []		// the code snippets
};

export default function(state = defaultJSNotes, action) {
	switch(action.type) {
		case FETCH_CODE_LIBRARY:
			// console.log(action.payload.data)
			return {
				...state, 
				library: [...action.payload.data]
			}
		case CLICK_COLLECTION_ITEM:
			return {
				...state,
				id: action.payload
			}
		case CHANGE_INPUT:
			let prop = action.prop
			return {
				...state,
				prop: action.value
			}
		default:
			return state;
	}
}