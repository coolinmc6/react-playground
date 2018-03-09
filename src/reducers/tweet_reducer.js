import  { 
	TWEET_TEXT,
	SEND_TWEET
} from '../actions/types';

const defaultTweets = [
	{id: 1, text: 'Hello!  This is your first tweet!'}
]

export default function(state = {count: defaultTweets.length + 1, tweets: defaultTweets}, action) {

	switch(action.type) {
		case TWEET_TEXT:
			const obj = {
				text: action.payload,
				tweets: state.tweets,
				count: state.count
			}
			return obj;
		case SEND_TWEET:
			const obj2 = {
				text: state.text,
				tweets: [action.payload, ...state.tweets],
				count: state.count++
			}
			console.log(obj2)
			return obj2;
		default:
			return state;	
	}
	
}