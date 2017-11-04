import React, { Component } from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);
		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
	}

	render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={this.onInputChange} />
				<div><small>Value {this.state.term} </small></div>
			</div>
		)
	}
	
	onInputChange(ev) {
		this.setState({ term: ev.target.value });
	}
}

export default SearchBar;