import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearch, fetchLibrary, changePage } from '../actions/index';

import '../css/prism.css';

import Prism from 'prismjs';


class JSHelper extends Component {
	componentDidMount() {
		this.props.fetchLibrary();
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

	renderExamples(snippets) {

		return snippets.map((snip) => {
			return (
				<div key={Math.floor(Math.random()*10000)} className="code-block">
					<pre><code className="language-javascript">
						{this.renderCode(snip.code)}
					</code></pre>
				</div>
			)
		})
	}

	// Renders the search results
	renderSearch() {
		return this.props.javascript.list.map((item) =>  {
			
			return (
				<div className="search-result" key={item.id} onClick={() => this.props.changePage(item.id)}>
					<h3>{item.term}</h3>
				</div>
			)
		});
	}

	renderPage() {
		
		if(this.props.javascript.page.length > 0) {
			const item = this.props.javascript.page[0]
			return (
				<div className="concept-page">
					<h3>{item.term}</h3>
					<p>{item.definition}</p>
					<div className="code-examples">
						{this.renderExamples(item.snippets)}
					</div>
				</div>
			)	
		}

		
	}

	render() {
		return (
			<div className="js-helper-main">
				<h1>JavaScript Cheat Sheet</h1>
				<div className="container">
					<input type="text" className="search" placeholder="JavaScript concept or function" 
						value={this.props.javascript.search}
						onChange={(e) => this.props.updateSearch(e.target.value)}/>
					<div className="results">
						{this.renderSearch()}
					</div>
					<div>
						{this.renderPage()}
					</div>	
				</div>
			</div>
		);
	}

}


function mapStateToProps(state) {
	return {
		javascript: state.javascript
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ updateSearch, fetchLibrary, changePage }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(JSHelper);