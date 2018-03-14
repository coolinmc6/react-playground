import {
	UPDATE_SEARCH, 
	FETCH_LIBRARY
} from '../actions/types';

const defaultJSNotes = {
	search: '',
	list: [],
	library: []
};


export default function(state = defaultJSNotes, action) {
	switch(action.type) {
		case FETCH_LIBRARY:
			console.log(action.payload.data)
			return {
				search: state.search,
				list: state.list,
				library: action.payload.data
			}
			
		case UPDATE_SEARCH:
			// if search term is blank, return empty array (otherwise it returns everything)
			if(action.payload === '') {
				return {
					search: '',
					list: [],
					library: state.library
				};
			} else {
				const obj = {
					search: action.payload, 
					list: state.library.filter(obj => obj.term.toLowerCase().includes(action.payload.toLowerCase())), 
					library: state.library
				}
				return obj;	
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
