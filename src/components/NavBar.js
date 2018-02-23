import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

	render() {
		return (
			<div>
			   <nav>
			       <div className="nav-wrapper">
			         <a href="/" className="brand-logo">React Playground</a>
			         <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
			         <ul className="right hide-on-med-and-down">
			           <li><Link to="/about">About</Link></li>
			         </ul>
			         <ul className="side-nav" id="mobile-demo">
			           <li><Link to="/about">About</Link></li>
			         </ul>
			       </div>
			     </nav>
			</div>

		);
	}
}

export default NavBar;