import { combineReducers } from 'redux';	
import counterReducer from './counter_reducer';
	
const rootReducer = combineReducers({	
	count: counterReducer
	// tweetInput
});	
	
export default rootReducer;	