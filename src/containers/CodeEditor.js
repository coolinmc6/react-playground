import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCodeLibrary } from '../actions/index';

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

	renderCodeList() {
		return this.props.my_code.library.map(obj => {
			
			return (
				<li className="collection-item" key={obj.id}>{obj.term}</li>
			)
		})
	}

	render() {
		return (
			<div className="js-helper-main">
				<h1>Code Editor!</h1>
				<div className="row">
					<div className="main-editor col s9">
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
	return bindActionCreators({fetchCodeLibrary}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CodeEditor);