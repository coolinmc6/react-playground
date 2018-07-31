import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCodeLibrary, changeInputValue, saveNewCodeObject, updateCodeObject } from '../actions/index';
import { generateID } from '../helpers/Helpers'

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
				id: generateID(),
				term: '',
				description: '', 
				language: '',
				snipRawCode: '', 
				snipRawTags: '',
				snipTags: [],
				snipCode: []
			},
			existingCodeObject: {
				term: '',
				description: '', 
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
				<div key={Math.floor(Math.random()*10000000000)}
					dangerouslySetInnerHTML={this.createMarkup(html)}></div>
			);
		})
	}

	saveCodeObject() {
		this.props.saveNewCodeObject(this.state.newCodeObject)
		this.setState({
			...this.state, 
			newCodeObject: {
				id: generateID(),
				term: '',
				description: '', 
				language: '',
				snipRawCode: '',
				snipRawTags: '', 
				snipTags: [],
				snipCode: []
			}
		})	
	}

	updateCodeObject() {
		this.props.updateCodeObject(this.state.existingCodeObject)
		this.setState({
			...this.state,
			existing: false,
			existingCodeObject: {
				id: 0,
				term: '',
				description: '', 
				language: '',
				snipRawCode: '',
				snipRawTags: '', 
				snipTags: [],
				snipCode: []
			}
		})
	}

	loadExistingCodeObject(id) {
		const code_obj = this.props.my_code.library.filter(obj => obj.id === id)[0];
		console.log(code_obj);
		if(code_obj.hasOwnProperty('snippets')) {
			this.setState({
				...this.state,
				existing: true,
				existingCodeObject: {
					id: code_obj.id,
					term: code_obj.term,
					description: code_obj.definition,
					language: '',
					snipRawCode: code_obj.snippets[0].code.join('\n'),
					snipRawTags: code_obj.snippets[0].tags.join(', '),
					snipCode: code_obj.snippets.code,
					snipTags: code_obj.snippets.tags
				}
			})	
		} else {
			this.setState({
				...this.state,
				existing: true,
				existingCodeObject: {
					id: code_obj.id,
					term: code_obj.term,
					description: code_obj.description,
					language: code_obj.language,
					snipRawCode: code_obj.snipRawCode,
					snipRawTags: code_obj.snipRawTags,
					snipCode: code_obj.snipCode ? code_obj.snipCode : [],
					snipTags: code_obj.snipTags ? code_obj.snipTags : []
				}
			})
		}

		console.log(this.state.existingCodeObject)
		
	}

	renderCodeInputs() {
		if(!this.state.existing) {
			let existing = false;
			return (
				<div className="row">
					<h5>Create New Code Snippet</h5>
					<div className="input-field col s6">
			        	<input type="text"
			        			onChange={(e) => this.changeInput('newCodeObject', existing, "term", e.target.value)}
			        			value={this.state.newCodeObject.term}
			        			/>
			        	<label htmlFor="term">Term</label>
			        </div>
			        <br />
	        		<div className="input-field col s9">
	                	<textarea className="materialize-textarea" type="text"
	                				onChange={(e) => this.changeInput('newCodeObject', existing, "description", e.target.value)}
	                				value={this.state.newCodeObject.description}
	                	></textarea>
	                	<label htmlFor="term">Description</label>
	                </div>
	                <br />
    				<div className="input-field col s6">
			        	<input type="text"
			        			onChange={(e) => this.changeInput('newCodeObject', existing, "language", e.target.value)}
			        			value={this.state.newCodeObject.language}
			        			/>
			        	<label htmlFor="language">Language</label>
			        </div>
			        <br />
			        <div className="input-field col s9">
	                	<textarea className="materialize-textarea" type="text"
	                				onChange={(e) => this.changeInput('newCodeObject', existing, "snippet", e.target.value)}
	                				value={this.state.newCodeObject.snipRawCode}
	                				onKeyDown={(e) => e.keyCode == 9 && e.preventDefault()}
	                	></textarea>
	                	<label htmlFor="term">Code Snippets</label>
	                </div>
	                <div className="input-field col s6">
			        	<input type="text"
			        			onChange={(e) => this.changeInput('newCodeObject', existing, "tags", e.target.value)}
			        			value={this.state.newCodeObject.snipRawTags}
			        			/>
			        	<label htmlFor="term">Tags</label>
			        </div>
	                <div className="col s12">
	                <a className="waves-effect waves-light btn"
	                	onClick={() => this.saveCodeObject()}
	                	>Save Snippet
	                </a>
	                </div>
				</div>

			)	
		} else {
			let existing = true;
			console.log(this.state.existingCodeObject)
			console.log("EXISTING SHOWN")
			return (
				<div className="row">
					<h5>Create New Code Snippet</h5>
					<div className="input-field col s6">
			        	<input type="text"
			        			onChange={(e) => this.changeInput('existingCodeObject', existing, "term", e.target.value)}

			        			value={this.state.existingCodeObject.term}
			        			/>
			        	<label className="active" htmlFor="term">Term</label>
			        </div>
			        <br />
	        		<div className="input-field col s9">
	                	<textarea className="materialize-textarea" type="text"
	                				onChange={(e) => this.changeInput('existingCodeObject', existing, "description", e.target.value)}
	                				value={this.state.existingCodeObject.description}
	                	></textarea>
	                	<label className="active" htmlFor="term">Description</label>
	                </div>
	                <br />
    				<div className="input-field col s6">
			        	<input type="text"
			        			onChange={(e) => this.changeInput('existingCodeObject', existing, "language", e.target.value)}
			        			value={this.state.existingCodeObject.language}
			        			/>
			        	<label className="active" htmlFor="language">Language</label>
			        </div>
			        <br />
			        <div className="input-field col s9">
	                	<textarea className="materialize-textarea" type="text"
	                				onChange={(e) => this.changeInput('existingCodeObject', existing, "snippet", e.target.value)}
	                				value={this.state.existingCodeObject.snipRawCode}
	                				onKeyDown={(e) => e.keyCode == 9 && e.preventDefault()}
	                	></textarea>
	                	<label className="active" htmlFor="term">Code Snippets</label>
	                </div>
	                <div className="input-field col s6">
			        	<input type="text"
			        			onChange={(e) => this.changeInput('existingCodeObject', existing, "tags", e.target.value)}
			        			value={this.state.existingCodeObject.snipRawTags}
			        			/>
			        	<label className="active" htmlFor="term">Tags</label>
			        </div>
	                <div className="col s12">
	                <a className="waves-effect waves-light btn"
	                	onClick={() => this.updateCodeObject()}
	                	>Update Snippet
	                </a>
	                </div>
				</div>

			)
		}
		
	}


	changeInput(codeType, existing, property, value) {
		console.log(property, value);
		let info = {
			...this.state[codeType]
		}
		if(property != 'snippet' && property != 'tags') {
			info[property] = value;
		} else if(property == 'snippet') {
			// let array = value.split('\n')
			// info['snipCode'] = array;
			info['snipRawCode'] = value;
		} else if(property == 'tags') {
			// let array = value.split(', ');
			// info['snipTags'] = array;
			info['snipRawTags'] = value;
		}

		info['snipCode'] = info['snipRawCode'].split('\n')
		info['snipTags'] = info['snipRawTags'].split('\n')

		let fakeState = {...this.state};
		fakeState[codeType] = info;

		this.setState({
			...fakeState
		});

		console.log(this.state)
		
		
		
	}

	renderCodeList() {
		if(this.props.my_code) {
			return this.props.my_code.library.map(obj => {
				
				return (
					<li className="collection-item" key={obj.id} onClick={() => this.loadExistingCodeObject(obj.id)}>{obj.term} </li>
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
	return bindActionCreators({
		fetchCodeLibrary, 
		changeInputValue, 
		saveNewCodeObject,
		updateCodeObject
	}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);