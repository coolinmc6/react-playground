import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearch, fetchLibrary, changePage, changeFocus } from '../actions/index';
import { languageIdentifier, prismLanguage } from '../helpers/Helpers'

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



	renderCode(codeBlock) {
		let language = codeBlock.language ? languageIdentifier(codeBlock.language) : 'javascript';
		let prism = prismLanguage(language);
		return codeBlock.snipCode.map((line) => {
			const html = Prism.highlight(line, Prism.languages[prism]);
			return (
				<div key={Math.floor(Math.random()*10000000)}
					dangerouslySetInnerHTML={this.createMarkup(html)}></div>
			);
		})
	}

	renderTags(tags) {

		return tags.map(tag => {
			return(
				<div className="chip" key={Math.floor(Math.random()*10000)}>{tag}</div>
			) 
		})
	}

	renderExamples(codeBlock) {
		return (
			<div key={Math.floor(Math.random()*10000000)} className="code-block">
				<pre><code className="language-javascript">
					{this.renderCode(codeBlock)}
				</code></pre>
			</div>
		)
		
	}

	// Renders search results block

	renderAllSearch() {
		if(this.props.javascript.search === '') {
			return <div>Enter a JavaScript function, concept, or keyword above</div>
		} 
		else if(!this.props.javascript.focus) {
			return;
		}
		return (
			<div>
				<h6 className="search-header">Concepts and Methods</h6>
				<div>{this.renderSearch()}</div>
				<h6 className="search-header">Tags and Descriptors</h6>
				<div>{this.renderKeywords()}</div>
			</div>
		)
	}

	// Renders Concept search results: TOP LEVEL item
	renderSearch() {
		if(this.props.javascript.search === '') {
			return <div>Enter a search term above</div>
		} else if(this.props.javascript.list.length === 0) {
			return <div>0 Results</div>
		}
		// else if(!this.props.javascript.focus) {
		// 	return;
		// }
		return this.props.javascript.list.map((item) =>  {
			const regex = new RegExp(this.props.javascript.search, 'gi');
			const final = item.term.replace(regex, `<span class="special">${this.props.javascript.search}</span>`)
			const rand = Math.floor(Math.random()*1000000)
			return (
				<div dangerouslySetInnerHTML={{__html: final}} 
					className="search-result" key={item.id} 
					onClick={() => this.props.changePage(item.id)}>
				</div>
			)
		});
	}

	// Renders Keyword & Tag search results: tags
	renderKeywords() {
		if(this.props.javascript.search === '') {
			return;
		} else if(this.props.javascript.keywords.length === 0) {
			return <div>0 Results</div>
		} 
		// else if(!this.props.javascript.focus) {
		// 	return;
		// }
		return this.props.javascript.keywords.map(item => {
			const regex = new RegExp(this.props.javascript.search, 'gi');
			const final = item.tag.replace(regex, `<span class="special">${this.props.javascript.search}</span>`);
			const rand = Math.floor(Math.random()*1000000)
			return (
				<div className="search-result" key={rand} 
					onClick={() => this.props.changePage(item.id)}
					dangerouslySetInnerHTML={{__html: final}}></div>
			)
		})
	}


	// Renders the term or concept, definition, and code examples
	renderPage() {
		if(this.props.javascript.page.length > 0) {
			const item = this.props.javascript.page[0]
			console.log(item);
			return (
				<div className="concept-page" key={item.id}>
					<span className="close" onClick={() => this.props.changePage(0)}>&times;</span>
					<h4>{item.term}</h4>
					<p className="term-definition">{item.description}</p>
					<div className="code-examples">
						<div className="code-tags">{this.renderTags(item.snipTags)}</div>
						{this.renderExamples(item)}
					</div>
				</div>
			)	
		}
	}

	setDelay(fn, val) {
		setTimeout(fn(val), 250);
	}



	render() {
		return (
			<div className="js-helper-main">
				<h1>JavaScript Cheat Sheet</h1>
				<div className="container">
					<input type="text" className="search" placeholder="JavaScript concept or function" 
						value={this.props.javascript.search}
						onChange={(e) => this.props.updateSearch(e.target.value)}
						// onFocus={() => this.props.changeFocus(true)}
						onFocus={() => setTimeout(() => this.props.changeFocus(true), 50)}
						// onBlur={() => this.props.changeFocus(false)}
						onBlur={() => setTimeout(() => this.props.changeFocus(false), 150)}/>
					<div className="results">
						{this.renderAllSearch()}
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
	return bindActionCreators({ updateSearch, fetchLibrary, changePage, changeFocus }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(JSHelper);