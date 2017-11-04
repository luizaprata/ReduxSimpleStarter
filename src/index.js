import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD0HfYOwSm9Ig4lukCSv_z_Bz7QRp3Y9rA';
// Create new component. this should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}
//take this component's generated HTML and put it in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));

