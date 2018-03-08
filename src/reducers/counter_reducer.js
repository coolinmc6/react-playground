import { INCREMENT, DECREMENT } from '../actions/types';

export default function(state = 0, action) {
	switch(action.type) {
		case INCREMENT:
			return action.payload + 1;
		case DECREMENT:
			return action.payload - 1;
		default:
			console.log('Reducer default:' + state);
			return state;
	}
}
