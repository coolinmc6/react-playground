// React
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';

// Components
import About from './components/About';
import App from './containers/App';
import NavBar from './components/NavBar';
import NoReduxState from './components/NoReduxState';

// Containers
import Basic from './containers/Basic'
import CodeEditor from './containers/CodeEditor';
import Counter from './containers/Counter';
import JSHelper from './containers/JSHelper';
import Todos from './containers/Todos'
import TweetBox from './containers/TweetBox';
import WorldCup from './containers/WorldCup';

// React Router
import {
  BrowserRouter as Router,
  Route
  // Link
} from 'react-router-dom'

// CSS
import './css/styles.css';
import './css/prism.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// Render React App
ReactDOM.render(

	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router>
			<div>
				<NavBar />
				<Route exact path="/react-playground/" component={App}/>
				<Route path="/react-playground/about" component={About}/>
				<Route path="/react-playground/basic" component={Basic}/>
				<Route path="/react-playground/counter" component={Counter}/>
				<Route path="/react-playground/tweets" component={TweetBox}/>
				<Route path="/react-playground/js-cheat-sheet" component={JSHelper}/>
				<Route path="/react-playground/code-editor" component={CodeEditor}/>
				<Route path="/react-playground/world-cup-2018" component={WorldCup}/>
				<Route path="/react-playground/no-redux-state" component={NoReduxState} />
				<Route path="/react-playground/todos" component={Todos} />
			</div>
		</Router>
	</Provider>

	, document.getElementById('root'));
registerServiceWorker();
