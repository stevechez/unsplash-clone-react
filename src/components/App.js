import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

import './stylesheets/App.css';
import Header from './header';
import Results from './results';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			arr: [],
			timeOut: false
		};
	}

	getImages = async (query, page) => {
		this.setState({ arr: [] });
		const response = await axios.get('https://api.unsplash.com/search/photos', {
			params: { query, per_page: 21, page },
			headers: {
				Authorization: 'Client-ID ' + process.env.REACT_APP_UNSPLASH_KEY
			}
		});
		return response;
	};

	componentDidMount = async () => {
		let response = await this.getImages('dog', 1);
		this.setState({ arr: response.data.results });
	};

	handleSubmit = async (value, page) => {
		this.setState({ timeOut: false });
		let response = await this.getImages(value, Math.random() * 200);
		let timeOut = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 5000);
		});

		timeOut.then(() => {
			this.setState({ timeOut: true });
		});
		this.setState({
			arr: response.data.results
		});
	};

	render() {
		return (
			<div className='App container-fluid'>
				<Header onSubmit={this.handleSubmit} />
				<Results
					images={this.state.arr}
					onLoad={this.setLoadingFalse}
					timeOut={this.state.timeOut}
				/>
			</div>
		);
	}
}

export default App;