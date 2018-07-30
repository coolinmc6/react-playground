import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCodeLibrary, changeCodeObject, changeInputValue } from '../actions/index';

// import CodeObject from '../components/CodeObject';

import '../css/prism.css';
import '../css/materialize.css';

import Prism from 'prismjs';

/*
ToDo's

- Build form for all the fields that I'll need
	- term: STRING - [input]
	- definition: STRING - [textarea]
	- language: STRING - [input]
	- snippets: OBJECT
		- tags: ARRAY (array of strings) - [input]
		- code: ARRAY (array of strings) - [textarea]
- Add event handlers for each one to update the appropriate state; make each input a controlled input
- Add CodeBlocks to Library.json
- Duplicate form for existing items
- Instantiate state:
	constructor() {
		super()
		this.state = {
			existing: false,
			newCodeObject: {
				term: '',
				definition: '', 
				language: '', 
				snipTags: [],
				snipCode: []
			},
			existingCodeObject: {
				term: '',
				definition: '', 
				language: '', 
				snipTags: [],
				snipCode: []
			}
		}
	}




*/

class CodeEditor extends Component {

	constructor() {
		super()
		this.state = {
			existing: false,
			newCodeObject: {
				term: '',
				definition: '', 
				language: '', 
				snipTags: [],
				snipCode: []
			},
			existingCodeObject: {
				term: '',
				definition: '', 
				language: '', 
				snipTags: [],
				snipCode: []
			}
		}
	}

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

	renderCodeInputs() {
		if(!this.state.existing) {
			let existing = false;
			return (
				<div className="row">
					<div className="input-field col s6">
			        	<input type="text"
			        			onChange={(e) => this.changeInput(existing, "term", e.target.value)}
			        			/>
			        	<label htmlFor="term">Term</label>
			        </div>
			        <br />
	        		<div className="input-field col s9">
	                	<textarea className="materialize-textarea" type="text"></textarea>
	                	<label htmlFor="term">Description</label>
	                </div>
	                <br />
    				<div className="input-field col s6">
			        	<input type="text"/>
			        	<label htmlFor="language">Language</label>
			        </div>
			        <br />
			        <div className="input-field col s9">
	                	<textarea className="materialize-textarea" type="text"></textarea>
	                	<label htmlFor="term">Code Snippets</label>
	                </div>
				</div>

			)	
		}
		
	}



	changeInput(existing, property, value) {
		let info = {
			...this.state.newCodeObject
		}
		info[property] = value;
		this.setState({
			...this.state, 
			newCodeObject: {...info}
		})

		console.log(this.state)
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
						{this.renderCodeInputs()}
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