import React, { Component } from 'react';

class SearchBar extends Component{
	render() {
		return <input onChange={this.onInputChange} />
	}

	onInputChange(ev){
		console.log(event.target.value);
	}
}

export default SearchBar;