import { 
	INCREMENT, 
	DECREMENT 
} from './types';

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