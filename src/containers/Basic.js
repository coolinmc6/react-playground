import React, { Component } from 'react';

import BasicFunctional from '../components/BasicFunctional';

class Basic extends Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<h1>Basic!!</h1>
				<BasicFunctional name="Colin" />
			</div>

		)
	}

}

export default Basic;