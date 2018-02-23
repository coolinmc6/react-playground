import React from 'react';
import ReactDOM from 'react-dom';

// CSS
// import './index.css';
// import './css/materialize.css';

// Components
import NavBar from './components/NavBar';
import App from './containers/App';
import About from './components/About';

import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render(
	<Router>
		<div>
			<NavBar />
			<Route exact path="/" component={App}/>
			<Route exact path="/about" component={About}/>
		</div>
	</Router>

	, document.getElementById('root'));
registerServiceWorker();
