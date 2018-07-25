import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCodeLibrary, changeCodeObject, changeInputValue } from '../actions/index';

// import CodeObject from '../components/CodeObject';

import '../css/prism.css';
import '../css/materialize.css';

import Prism from 'prismjs';


class CodeEditor extends Component {
	componentDidMount() {
		this.props.fetchCodeLibrary();
	}

	createMarkup(html) {
	  return {__html: html};
	  // const code = "const data = { data: ['1,2,3,4,5] }";
	  // const html = Prism.highlight(code, Prism.languages.javascript);
	  // <div dangerouslySetInnerHTML={this.createMarkup(html)} />

	}

	renderCode(codeArray) {
		return codeArray.map((line) => {
			const html = Prism.highlight(line, Prism.languages.javascript);
			return (
				<div key={Math.floor(Math.random()*10000)}
					dangerouslySetInnerHTML={this.createMarkup(html)}></div>
			);
		})
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	  }

	// requires the id of the item I am showing
	renderCodeObject(id) {
		// if id = new, show the unpopulated form
		// console.log(id);
		const item = id === 'new' ? {...this.props.my_code} : this.props.my_code.library.find(item => item.id === id)
		// const item = {...this.props.my_code}
		// console.log(item)
		return (
			<div className="row">
				<div className="input-field col s4">
		        	<input placeholder="Placeholder" defaultValue={item.term} onChange={(e) => this.changeInput('term', e.target.value)} type="text"/>
		        	<label htmlFor="term">Term</label>
		        </div>
			</div>
		)
		
	}

	changeInput(prop, value) {
		this.props.changeInputValue(prop, value)
	}

	changeCodeObject(id) {
		this.props.changeCodeObject(id)
	}

	renderCodeList() {
		if(this.props.my_code) {
			return this.props.my_code.library.map(obj => {
				
				return (
					<li className="collection-item" key={obj.id} onClick={() => this.changeCodeObject(obj.id)}>{obj.term} </li>
				)
			})	
		}
		
	}

	render() {
		return (
			<div className="js-helper-main">
				<h1>Code Editor!</h1>
				<div className="row">
					<div className="main-editor col s9">
						{this.renderCodeObject(this.props.my_code.id)}
					</div>
					<div className="main-collection col s3">
						<ul className="collection">
							{this.renderCodeList()}
						</ul>
					</div>
				</div>
			</div>
		);
	}

}


function mapStateToProps(state) {
	return {
		my_code: state.my_code
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchCodeLibrary, changeCodeObject, changeInputValue}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);