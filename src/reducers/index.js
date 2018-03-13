import { combineReducers } from 'redux';	
import counterReducer from './counter_reducer';
import tweetReducer from './tweet_reducer';
import jsHelperReducer from './jshelper_reducer';
	
const rootReducer = combineReducers({	
	count: counterReducer,
	tweets: tweetReducer,
	javascript: jsHelperReducer
});	
	
export default rootReducer;	