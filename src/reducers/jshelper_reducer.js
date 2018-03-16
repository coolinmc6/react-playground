import {
	UPDATE_SEARCH, 
	FETCH_LIBRARY,
	CHANGE_PAGE
} from '../actions/types';

const defaultJSNotes = {
	keywords: [],
	library: [],
	list: [],
	page: [],
	search: ''
};


export default function(state = defaultJSNotes, action) {
	switch(action.type) {
		case FETCH_LIBRARY:
			return {
				...state,
				library: [...action.payload.data]
			}
			
		case UPDATE_SEARCH:
			// if search term is blank, return empty array (otherwise it returns everything)
			if(action.payload === '') {
				return {
					...state, 
					list: [],
					search: ''
				};
			} else {
				

				// state.library.filter(obj => obj.snippets.filter(item => item.tags.includes(action.payload.toLowerCase()))),
				const obj = {
					...state,
					keywords: [],
					list: state.library.filter(obj => obj.term.toLowerCase().includes(action.payload.toLowerCase()) && obj.term.toLowerCase() !== "template"), 
					search: action.payload 
				}
				console.log(obj)
				return obj;	
			}
		case CHANGE_PAGE:
			if(action.payload === 0) {
				return {
					...state,
					page: [],
					search: ''
				}
			} else {
				return {
					...state,
					keywords: [],
					list: [],
					page: state.library.filter(obj => obj.id === action.payload)
				}
			}
		default:
			return state;
	}
};

/*

JavaScript Helper State:

{
	helpers: [
		{
			term: 'Map',
			examples: [
				{
					code: '.....',
					description: '....',
					terms: '....'
				}
			],
			summary: '.....'
		}
	]
}




*/
