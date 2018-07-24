import { combineReducers } from 'redux';	
import counterReducer from './counter_reducer';
import tweetReducer from './tweet_reducer';
import jsHelperReducer from './jshelper_reducer';
import WCReducer from './world_cup_reducer';
import CodeReducer from './code_editor_reducer'
	
const rootReducer = combineReducers({	
	count: counterReducer,
	tweets: tweetReducer,
	javascript: jsHelperReducer,
	worldcup: WCReducer,
	my_code: CodeReducer
});	
	
export default rootReducer;	