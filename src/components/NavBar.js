import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

	render() {
		return (
			<div>
			   <nav>
			       <div className="nav-wrapper">
			         <Link to="/react-playground/" className="brand-logo">React Playground</Link>
			         <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			         <ul className="right hide-on-med-and-down">
			           <li><Link to="/react-playground/about">About</Link></li>
			           <li><Link to="/react-playground/counter">Counter</Link></li>
			           <li><Link to="/react-playground/tweets">Tweets</Link></li>
			         </ul>
			         <ul className="side-nav" id="mobile-demo">
			           <li><Link to="/react-playground/about">About</Link></li>
			           <li><Link to="/react-playground/counter">Counter</Link></li>
			           <li><Link to="/react-playground/tweets">Tweets</Link></li>
			         </ul>
			       </div>
			     </nav>
			</div>

		);
	}
}

export default NavBar;