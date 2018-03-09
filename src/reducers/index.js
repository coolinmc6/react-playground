import { combineReducers } from 'redux';	
import counterReducer from './counter_reducer';
import tweetReducer from './tweet_reducer';
	
const rootReducer = combineReducers({	
	count: counterReducer,
	tweets: tweetReducer
});	
	
export default rootReducer;	